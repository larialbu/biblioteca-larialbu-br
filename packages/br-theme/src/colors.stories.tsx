import React from 'react';
import { colors } from './colors';

const Demo = () => (
  <div style={{ display: 'flex', gap: 16, fontFamily: 'sans-serif' }}>
    {Object.entries(colors).map(([name, hex]) => (
      <div key={name} style={{ textAlign: 'center' }}>
        <div style={{ width: 80, height: 80, backgroundColor: hex, borderRadius: 8, border: '1px solid #eee' }} />
        <div style={{ marginTop: 8 }}><b>{name}</b></div>
        <div style={{ fontSize: 12, color: '#666' }}>{hex}</div>
      </div>
    ))}
  </div>
);

export default {
  title: 'Cores Base',
  component: Demo,
};

export const Default = {};
