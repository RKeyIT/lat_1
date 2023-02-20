import React from 'react';
import {ITextAreaProps} from "./interface";

export const TextArea: React.FC<ITextAreaProps> = ({value, onChange}) => {
    return (
        <>
            <textarea placeholder='Enter message' value={value} onChange={onChange}/>
        </>
    );
};