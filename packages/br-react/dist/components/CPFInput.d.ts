import React from 'react';
export interface CPFInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onValidationChange?: (isValid: boolean) => void;
}
export declare const CPFInput: React.FC<CPFInputProps>;
