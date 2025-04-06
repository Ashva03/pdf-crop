import styled from 'styled-components';

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
`;

const LoadingBalls = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Ball = styled.div<{ delay: number }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #2563eb;
  animation: bounce 1s infinite;
  animation-delay: ${props => props.delay}s;

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

const LoadingText = styled.p`
  color: #4b5563;
  font-size: 1rem;
  font-weight: 500;
`;

interface LoadingProps {
    text?: string;
}

export default function Loading({ text = "Generating cropped PDF..." }: LoadingProps) {
    return (
        <LoadingContainer>
            <LoadingBalls>
                <Ball delay={0} />
                <Ball delay={0.2} />
                <Ball delay={0.4} />
            </LoadingBalls>
            <LoadingText>{text}</LoadingText>
        </LoadingContainer>
    );
} 