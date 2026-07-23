import React from 'react';
import { PixIcon } from './PixIcon';
import { CPFIcon } from './CPFIcon';
import { CNPJIcon } from './CNPJIcon';
import { CorreiosIcon } from './CorreiosIcon';
import { NFIcon } from './NFIcon';
import { BoletoIcon } from './BoletoIcon';

const icons = [
  { name: 'PixIcon', Icon: PixIcon, color: '#32BCAD' },
  { name: 'CPFIcon', Icon: CPFIcon, color: '#1565C0' },
  { name: 'CNPJIcon', Icon: CNPJIcon, color: '#2E7D32' },
  { name: 'CorreiosIcon', Icon: CorreiosIcon, color: '#FFD600' },
  { name: 'NFIcon', Icon: NFIcon, color: '#E65100' },
  { name: 'BoletoIcon', Icon: BoletoIcon, color: '#424242' },
];

const Demo = () => (
  <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', fontFamily: 'sans-serif' }}>
    {icons.map(({ name, Icon, color }) => (
      <div key={name} style={{ textAlign: 'center' }}>
        <div style={{
          width: 80, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center',
          borderRadius: 12, background: '#f8f8f8', border: '1px solid #eee',
        }}>
          <Icon size={48} color={color} />
        </div>
        <div style={{ marginTop: 8, fontSize: 13, fontWeight: 600 }}>{name}</div>
        <div style={{ fontSize: 11, color: '#999' }}>{color}</div>
      </div>
    ))}
  </div>
);

export default {
  title: 'PixIcon',
  component: Demo,
  parameters: { layout: 'centered' },
};

export const Default = {};
