import React, { useState } from 'react';
import { isCPF } from '@larialbu/br-validators';

export interface CPFInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onValidationChange?: (isValid: boolean) => void;
}

export const CPFInput: React.FC<CPFInputProps> = ({ onValidationChange, style, ...props }) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    } else {
      setIsValid(null);
    }
  };

  const borderColor = isValid === null ? '#ccc' : isValid ? '#4caf50' : '#f44336';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontFamily: 'sans-serif' }}>
      <input
        {...props}
        value={value}
        onChange={handleChange}
        placeholder="000.000.000-00"
        maxLength={14}
        style={{
          padding: '10px 14px',
          borderRadius: '6px',
          border: `2px solid ${borderColor}`,
          outline: 'none',
          fontSize: '16px',
          transition: 'border-color 0.3s',
          ...style
        }}
      />
      {isValid === false && (
        <span style={{ color: '#f44336', fontSize: '12px' }}>CPF Inválido</span>
      )}
      {isValid === true && (
        <span style={{ color: '#4caf50', fontSize: '12px' }}>CPF Válido!</span>
      )}
    </div>
  );
};
