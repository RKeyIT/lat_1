export interface IButtonProps {
    text: string;
    handler?: () => void;
    style?: string;
}

// TODO:
//  1. Create type for handler
//  2. Rethink about next interfaces

export interface ILinkButtonProps {
    path: string;
    text: string;
    style?: string;
}

export interface INavLinkButtonProps {
    path: string;
    text: string;
    style?: string;
}