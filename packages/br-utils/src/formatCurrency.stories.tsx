import React from 'react';
import { formatCurrency } from './formatCurrency';

const Demo = () => (
  <div style={{ fontFamily: 'sans-serif' }}>
    <p>Formato 1234.56 → {formatCurrency(1234.56)}</p>
    <p>Formato 99.9 → {formatCurrency(99.9)}</p>
    <p>Formato 1000000 → {formatCurrency(1000000)}</p>
  </div>
);

export default {
  title: 'formatCurrency',
  component: Demo,
};

export const Default = {};
