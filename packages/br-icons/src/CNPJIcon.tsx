import React from 'react';
import type { IconProps } from './PixIcon';

export const CNPJIcon = ({ size = 24, color = '#2E7D32' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="16" rx="2" stroke={color} strokeWidth="2"/>
    <path d="M7 4V2" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M17 4V2" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <rect x="6" y="8" width="5" height="4" rx="0.5" stroke={color} strokeWidth="1.5"/>
    <line x1="6" y1="15" x2="18" y2="15" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="6" y1="18" x2="14" y2="18" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="14" y1="8" x2="18" y2="8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="14" y1="11" x2="18" y2="11" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
