import React, { useState } from 'react';
import { isCPF } from './isCPF';

const Demo = () => {
  const [cpf, setCpf] = useState('');
  const result = cpf.length > 0 ? (isCPF(cpf) ? '✅ CPF Válido' : '❌ CPF Inválido') : '';
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <input
        value={cpf}
        onChange={e => setCpf(e.target.value)}
        placeholder="Digite um CPF para validar"
        style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc', fontSize: 16, width: 250 }}
      />
      <p style={{ marginTop: 8, fontWeight: 'bold' }}>{result}</p>
    </div>
  );
};

export default {
  title: 'isCPF',
  component: Demo,
};

export const Default = {};
