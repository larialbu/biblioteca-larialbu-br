import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { isCPF } from '@larialbu/br-validators';
export const CPFInput = ({ onValidationChange, style, ...props }) => {
    const [value, setValue] = useState('');
    const [isValid, setIsValid] = useState(null);
    const handleChange = (e) => {
        let rawValue = e.target.value;
        // Apply basic mask: 000.000.000-00
        rawValue = rawValue.replace(/\D/g, "");
        rawValue = rawValue.replace(/(\d{3})(\d)/, "$1.$2");
        rawValue = rawValue.replace(/(\d{3})(\d)/, "$1.$2");
        rawValue = rawValue.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        setValue(rawValue);
        if (rawValue.replace(/[^\d]/g, '').length === 11) {
            const valid = isCPF(rawValue);
            setIsValid(valid);
            onValidationChange?.(valid);
        }
        else {
            setIsValid(null);
        }
    };
    const borderColor = isValid === null ? '#ccc' : isValid ? '#4caf50' : '#f44336';
    return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '4px', fontFamily: 'sans-serif' }, children: [_jsx("input", { ...props, value: value, onChange: handleChange, placeholder: "000.000.000-00", maxLength: 14, style: {
                    padding: '10px 14px',
                    borderRadius: '6px',
                    border: `2px solid ${borderColor}`,
                    outline: 'none',
                    fontSize: '16px',
                    transition: 'border-color 0.3s',
                    ...style
                } }), isValid === false && (_jsx("span", { style: { color: '#f44336', fontSize: '12px' }, children: "CPF Inv\u00E1lido" })), isValid === true && (_jsx("span", { style: { color: '#4caf50', fontSize: '12px' }, children: "CPF V\u00E1lido!" }))] }));
};
