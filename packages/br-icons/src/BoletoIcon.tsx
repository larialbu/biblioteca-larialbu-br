import React from 'react';
import type { IconProps } from './PixIcon';

export const BoletoIcon = ({ size = 24, color = '#424242' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="16" rx="1" stroke={color} strokeWidth="1.5"/>
    <line x1="5" y1="7" x2="5" y2="17" stroke={color} strokeWidth="2"/>
    <line x1="8" y1="7" x2="8" y2="17" stroke={color} strokeWidth="1"/>
    <line x1="10" y1="7" x2="10" y2="17" stroke={color} strokeWidth="2"/>
    <line x1="12.5" y1="7" x2="12.5" y2="17" stroke={color} strokeWidth="1"/>
    <line x1="14" y1="7" x2="14" y2="17" stroke={color} strokeWidth="1.5"/>
    <line x1="16" y1="7" x2="16" y2="17" stroke={color} strokeWidth="1"/>
    <line x1="18" y1="7" x2="18" y2="17" stroke={color} strokeWidth="2"/>
    <line x1="20" y1="7" x2="20" y2="17" stroke={color} strokeWidth="1"/>
  </svg>
);
