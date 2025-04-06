import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

const CropOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: crosshair;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  user-select: none;
`

const SelectionBox = styled.div<{ x: number; y: number; width: number; height: number }>`
  position: absolute;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border: 2px solid #0070f3;
  background: rgba(0, 112, 243, 0.1);
  pointer-events: none;
  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.5);
`

const SelectionHandles = styled.div<{ x: number; y: number; width: number; height: number }>`
  position: absolute;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  pointer-events: none;
`

const Handle = styled.div<{ position: string }>`
  position: absolute;
  width: 10px;
  height: 10px;
  background: #0070f3;
  border: 2px solid white;
  border-radius: 50%;
  pointer-events: all;
  cursor: ${props => {
        switch (props.position) {
            case 'nw': return 'nw-resize';
            case 'ne': return 'ne-resize';
            case 'sw': return 'sw-resize';
            case 'se': return 'se-resize';
            case 'n': return 'n-resize';
            case 's': return 's-resize';
            case 'e': return 'e-resize';
            case 'w': return 'w-resize';
            default: return 'default';
        }
    }};
  z-index: 1002;

  ${props => {
        switch (props.position) {
            case 'nw': return 'top: -5px; left: -5px;';
            case 'ne': return 'top: -5px; right: -5px;';
            case 'sw': return 'bottom: -5px; left: -5px;';
            case 'se': return 'bottom: -5px; right: -5px;';
            case 'n': return 'top: -5px; left: 50%; transform: translateX(-50%);';
            case 's': return 'bottom: -5px; left: 50%; transform: translateX(-50%);';
            case 'e': return 'right: -5px; top: 50%; transform: translateY(-50%);';
            case 'w': return 'left: -5px; top: 50%; transform: translateY(-50%);';
            default: return '';
        }
    }}
`

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 1001;
  background: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Button = styled.button`
  background-color: ${props => props.color || '#0070f3'};
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`

const Instructions = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.95);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  text-align: center;
  max-width: 400px;
  font-size: 1.1rem;
  line-height: 1.5;
`

const SelectionInfo = styled.div`
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.95);
  padding: 0.75rem 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  text-align: center;
  font-size: 0.9rem;
  color: #666;
`

interface CustomCropProps {
    onCrop: (cropBox: { x: number; y: number; width: number; height: number }) => void;
    onCancel: () => void;
}

export default function CustomCrop({ onCrop, onCancel }: CustomCropProps) {
    const [isSelecting, setIsSelecting] = useState(false)
    const [startPoint, setStartPoint] = useState({ x: 0, y: 0 })
    const [selection, setSelection] = useState<{ x: number; y: number; width: number; height: number } | null>(null)
    const [isResizing, setIsResizing] = useState(false)
    const [resizeHandle, setResizeHandle] = useState<string | null>(null)
    const overlayRef = useRef<HTMLDivElement>(null)

    const getRelativeCoordinates = (e: React.MouseEvent | MouseEvent) => {
        const rect = overlayRef.current?.getBoundingClientRect()
        if (!rect) return { x: 0, y: 0 }

        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        return { x, y }
    }

    const handleMouseDown = (e: React.MouseEvent) => {
        const { x, y } = getRelativeCoordinates(e)
        setIsSelecting(true)
        setStartPoint({ x, y })
        setSelection({ x, y, width: 0, height: 0 })
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isSelecting && !isResizing) return

        const { x, y } = getRelativeCoordinates(e)

        if (isResizing && selection && resizeHandle) {
            const newSelection = { ...selection }
            switch (resizeHandle) {
                case 'nw':
                    newSelection.width = selection.x + selection.width - x
                    newSelection.height = selection.y + selection.height - y
                    newSelection.x = x
                    newSelection.y = y
                    break
                case 'ne':
                    newSelection.width = x - selection.x
                    newSelection.height = selection.y + selection.height - y
                    newSelection.y = y
                    break
                case 'sw':
                    newSelection.width = selection.x + selection.width - x
                    newSelection.height = y - selection.y
                    newSelection.x = x
                    break
                case 'se':
                    newSelection.width = x - selection.x
                    newSelection.height = y - selection.y
                    break
                case 'n':
                    newSelection.height = selection.y + selection.height - y
                    newSelection.y = y
                    break
                case 's':
                    newSelection.height = y - selection.y
                    break
                case 'e':
                    newSelection.width = x - selection.x
                    break
                case 'w':
                    newSelection.width = selection.x + selection.width - x
                    newSelection.x = x
                    break
            }
            setSelection(newSelection)
        } else if (isSelecting) {
            const width = Math.abs(x - startPoint.x)
            const height = Math.abs(y - startPoint.y)
            const left = Math.min(x, startPoint.x)
            const top = Math.min(y, startPoint.y)

            setSelection({ x: left, y: top, width, height })
        }
    }

    const handleMouseUp = () => {
        if (!isSelecting && !isResizing) return
        setIsSelecting(false)
        setIsResizing(false)
        setResizeHandle(null)
    }

    const handleResizeStart = (handle: string) => (e: React.MouseEvent) => {
        e.stopPropagation()
        setIsResizing(true)
        setResizeHandle(handle)
    }

    const handleConfirm = () => {
        if (selection) {
            onCrop(selection)
        }
    }

    useEffect(() => {
        const handleGlobalMouseMove = (e: MouseEvent) => {
            if (isSelecting || isResizing) {
                handleMouseMove(e as unknown as React.MouseEvent)
            }
        }

        const handleGlobalMouseUp = () => {
            handleMouseUp()
        }

        window.addEventListener('mousemove', handleGlobalMouseMove)
        window.addEventListener('mouseup', handleGlobalMouseUp)

        return () => {
            window.removeEventListener('mousemove', handleGlobalMouseMove)
            window.removeEventListener('mouseup', handleGlobalMouseUp)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSelecting, isResizing, startPoint, selection, resizeHandle])

    return (
        <>
            <Instructions>
                Click and drag to select an area. Use the handles to resize the selection. The selection will be applied to all pages.
            </Instructions>
            {selection && (
                <SelectionInfo>
                    Selection size: {Math.round(selection.width)} × {Math.round(selection.height)} pixels
                </SelectionInfo>
            )}
            <CropOverlay
                ref={overlayRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                {selection && (
                    <>
                        <SelectionBox
                            x={selection.x}
                            y={selection.y}
                            width={selection.width}
                            height={selection.height}
                        />
                        <SelectionHandles
                            x={selection.x}
                            y={selection.y}
                            width={selection.width}
                            height={selection.height}
                        >
                            <Handle position="nw" onMouseDown={handleResizeStart('nw')} />
                            <Handle position="n" onMouseDown={handleResizeStart('n')} />
                            <Handle position="ne" onMouseDown={handleResizeStart('ne')} />
                            <Handle position="e" onMouseDown={handleResizeStart('e')} />
                            <Handle position="se" onMouseDown={handleResizeStart('se')} />
                            <Handle position="s" onMouseDown={handleResizeStart('s')} />
                            <Handle position="sw" onMouseDown={handleResizeStart('sw')} />
                            <Handle position="w" onMouseDown={handleResizeStart('w')} />
                        </SelectionHandles>
                    </>
                )}
            </CropOverlay>
            <ButtonContainer>
                <Button onClick={handleConfirm} disabled={!selection}>
                    Apply to All Pages
                </Button>
                <Button color="#dc2626" onClick={onCancel}>
                    Cancel
                </Button>
            </ButtonContainer>
        </>
    )
} 