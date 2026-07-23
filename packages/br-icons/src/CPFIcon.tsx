import React from 'react';
import type { IconProps } from './PixIcon';

export const CPFIcon = ({ size = 24, color = '#1565C0' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="20" height="18" rx="2" stroke={color} strokeWidth="2"/>
    <circle cx="8" cy="10" r="2.5" stroke={color} strokeWidth="1.5"/>
    <path d="M4 17c0-2 1.8-3.5 4-3.5s4 1.5 4 3.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="14" y1="9" x2="20" y2="9" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="14" y1="12" x2="20" y2="12" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="14" y1="15" x2="18" y2="15" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
