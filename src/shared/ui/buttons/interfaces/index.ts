export interface IButtonProps {
    handler?: () => void;
    text: string;
    className?: string;
}

// TODO:
//  1. Create type for handler
//  2. Rethink about next interfaces

export interface ILinkButtonProps {
    path: string;
    text: string;
    className?: string;
}

export interface INavLinkButtonProps {
    path: string;
    text: string;
    className?: string;
}