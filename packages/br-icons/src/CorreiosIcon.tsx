import React from 'react';
import type { IconProps } from './PixIcon';

export const CorreiosIcon = ({ size = 24, color = '#FFD600' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="5" width="20" height="14" rx="2" stroke={color} strokeWidth="2"/>
    <path d="M2 7l10 6 10-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 19l7-5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M22 19l-7-5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
