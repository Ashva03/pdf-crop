import React from 'react';

interface IconProps {
    className?: string;
    width?: string | number;
    height?: string | number;
}

export const AmazonIcon: React.FC<IconProps> = ({ className, width = "32", height = "32" }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M15.7 12.5C15.3 12.8 14.8 13 14.2 13C13.6 13 13.1 12.8 12.7 12.5C12.3 12.2 12 11.8 11.9 11.3L14.5 11.3C14.4 11.8 14.1 12.2 13.7 12.5M16.7 13.8C16.9 13.5 17 13.3 17.2 13C17.4 12.7 17.5 12.4 17.6 12C17.7 11.6 17.7 11.3 17.7 10.9C17.7 10.2 17.5 9.6 17.2 9C16.9 8.4 16.4 8 15.8 7.6C15.2 7.3 14.5 7.1 13.7 7.1C13.1 7.1 12.5 7.2 12 7.4C11.5 7.6 11 7.9 10.6 8.3C10.2 8.7 9.9 9.1 9.7 9.6C9.5 10.1 9.4 10.7 9.4 11.3C9.4 12 9.5 12.6 9.8 13.2C10.1 13.8 10.5 14.2 11.1 14.6C11.7 14.9 12.4 15.1 13.1 15.1C13.8 15.1 14.5 14.9 15.1 14.6C15.7 14.3 16.2 14 16.7 13.8M13.4 4C16.9 4 19.9 5.8 21.7 8.5C22.6 9.9 23.1 11.4 23.1 13.1C23.1 14.4 22.7 15.7 22 16.9C21.3 18.1 20.3 19 19.1 19.7C14.5 22.3 9.1 21.4 5.4 17.7C4.8 17.1 4.3 16.5 3.9 15.8C5.4 16.9 7.1 17.6 9 17.9C10.6 18.1 12.1 18 13.6 17.4C15.1 16.9 16.5 16 17.6 14.8L17.5 14.7C16.5 15.1 15.4 15.4 14.3 15.4C13 15.4 11.8 15.1 10.9 14.7C9.9 14.2 9.1 13.6 8.5 12.8C7.9 12 7.6 11.2 7.6 10.2C7.6 9.4 7.8 8.7 8.2 8.1C8.6 7.5 9.2 6.9 9.9 6.5C10.6 6.1 11.4 5.8 12.3 5.6C12.9 5.5 13.4 5.5 14 5.5C13.6 5.2 13.1 5 12.7 4.9C12.1 4.7 11.5 4.7 10.8 4.7C9.6 4.7 8.5 5 7.5 5.6C6.6 6.1 5.7 6.8 5 7.7C5 7.6 5 7.5 5 7.4C5 6.8 5.1 6.2 5.3 5.7C5.5 5.2 5.8 4.7 6.2 4.3C6.6 3.9 7 3.5 7.5 3.3C8 3 8.5 2.9 9 2.8C9.5 2.7 10 2.7 10.5 2.7C11.4 2.8 12.4 3.2 13.4 4M1 8.5C1.7 7.8 2.4 7.3 3.2 6.9C3.3 6.9 3.4 6.8 3.5 6.8C3.5 6.9 3.5 7 3.5 7.1C3.5 7.8 3.6 8.4 3.8 9C4 9.6 4.2 10.1 4.5 10.5C4.2 11.1 4 11.8 3.9 12.5C3.8 13.2 3.8 13.8 4 14.5C3.5 14.1 3.1 13.7 2.7 13.3C2.3 12.9 1.9 12.4 1.6 11.9C1.3 11.4 1.1 10.9 1 10.4C0.9 9.8 0.9 9.1 1 8.5Z" fill="#ff9900" />
        </svg>
    )
}

export const FlipkartIcon: React.FC<IconProps> = ({ className, width = "32", height = "32" }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M4 2V13H7.5V8H11V13H21V2H4Z" fill="#2874F0" />
            <path d="M7.5 14V16.5C7.5 18.5 9 20 11 20H16C18 20 19.5 18.5 19.5 16.5V14H11V16.5C11 17.25 10.25 18 9.5 18C8.75 18 8 17.25 8 16.5V14H7.5Z" fill="#FFC200" />
        </svg>
    )
}

export const MeeshoIcon: React.FC<IconProps> = ({ className, width = "32", height = "32" }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#F43397" />
            <path d="M16.5 9L14.5 7L10.5 11L8.5 9L6.5 11L10.5 15L14.5 11L16.5 13L14.5 15L12.5 13L10.5 15L8.5 17L13.5 17C15.5 17 17 15.5 17 13.5L17 10L16.5 9Z" fill="white" />
        </svg>
    )
}

export const SnapdealIcon: React.FC<IconProps> = ({ className, width = "32", height = "32" }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z" fill="#E40046" />
            <path d="M12 6C8.7 6 6 8.7 6 12C6 15.3 8.7 18 12 18C15.3 18 18 15.3 18 12C18 8.7 15.3 6 12 6ZM12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12C16 14.2 14.2 16 12 16Z" fill="white" />
        </svg>
    )
}

export const MyntraIcon: React.FC<IconProps> = ({ className, width = "32", height = "32" }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M14.5 5L12 2L9.5 5L5 7.5L2 12L5 16.5L9.5 19L12 22L14.5 19L19 16.5L22 12L19 7.5L14.5 5Z" fill="#FB56C1" />
            <path d="M12 8L14 12L12 16L10 12L12 8Z" fill="white" />
        </svg>
    )
} 