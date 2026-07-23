import React, { useState } from 'react';
import { cpfMask } from './cpfMask';

const Demo = () => {
  const [val, setVal] = useState('');
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <label>CPF com Máscara Simples</label><br />
      <input
        value={val}
        onChange={e => setVal(cpfMask(e.target.value))}
        placeholder="000.000.000-00"
        maxLength={14}
        style={{ padding: 8, marginTop: 4, borderRadius: 4, border: '1px solid #ccc', fontSize: 16 }}
      />
    </div>
  );
};

export default {
  title: 'cpfMask',
  component: Demo,
};

export const Default = {};
