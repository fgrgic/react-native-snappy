import React from 'react';
import rawIcons, { tightlyTyped } from './svg';

export interface IconConfig {
  svg: React.ReactNode;
  keywords?: string[];
  description?: string;
}

export type SnappyIconNames = keyof typeof tightlyTyped;
export const snappyNameArray = Object.keys(tightlyTyped) as SnappyIconNames[];
