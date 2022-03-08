import React from 'react';
import Svg, { Path, Circle, Rect, Ellipse } from 'react-native-svg';
import { IconConfig } from '../types';

const icons = {
  snap: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M9.29638 3.79637L9.3177 3.81769C9.43844 3.93843 9.53893 4.07785 9.6153 4.23059L13.1382 11.2764C13.3044 11.6088 13.7624 11.6501 13.9854 11.3528L14.5751 10.5666C14.8545 10.194 15.2169 9.89155 15.6334 9.68327L16.367 9.31647C16.7655 9.11724 17.2345 9.11724 17.633 9.31647C18.3704 9.68518 18.6378 10.6036 18.2136 11.3106L16.0713 14.8812C16.0246 14.9589 16 15.0479 16 15.1385V17.4476C16 18.1289 15.7682 18.7898 15.3426 19.3217L14.9007 19.8741C14.3314 20.5857 13.4695 21 12.5581 21H10.2426C9.44699 21 8.68393 20.6839 8.12132 20.1213L5.01612 17.0161C4.68566 16.6856 4.5 16.2374 4.5 15.7701V15.5041C4.5 14.9044 4.8837 14.3721 5.45257 14.1825C5.80308 14.0656 6.09283 13.8143 6.25806 13.4839L6.68258 12.6348C6.88286 12.2343 7.25685 11.9486 7.69599 11.8608C8.61594 11.6768 9.12219 10.6814 8.72904 9.82959L6.76057 5.56456C6.59318 5.20188 6.57032 4.78904 6.69663 4.41009C7.06573 3.30281 8.47106 2.97105 9.29638 3.79637Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M14 5V3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M16 6.5L17.5 5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
    keywords: ['snappy', 'finger', 'hand', 'thanos', 'logo'],
    description: 'Fingers snapping',
  },
  'arrow-big-down': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12 1L12 23'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 23L18 17'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 23L6 17'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
    keywords: ['arrow', 'chevron'],
  },
  'arrow-big-left': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M23 12L1 12'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M1 12L7 6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M1 12L7 18'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
    keywords: ['arrow', 'chevron'],
  },
  'arrow-big-right': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M1 12L23 12'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M23 12L17 6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M23 12L17 18'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
    keywords: ['arrow', 'chevron'],
  },
  'arrow-big-up': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12 23L12 1'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 1L18 7'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 1L6 7'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
    keywords: ['arrow', 'chevron'],
  },
  'arrow-down-left': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M6 18L18 6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M6 18H13'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M6 18V11'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
    keywords: ['arrow', 'chevron'],
  },
  'arrow-down-right': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M18 18L6 6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M18 18H11'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M18 18V11'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
    keywords: ['arrow', 'chevron'],
  },
  'arrow-down': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12 4L12 20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M7 15L12 20L17 15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
    keywords: ['arrow', 'chevron'],
  },
  'arrow-left': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M20 12H4'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M4 12L9 7'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M4 12L9 17'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
    keywords: ['arrow', 'chevron'],
  },
  'arrow-right': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4 12H20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M20 12L15 7'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M20 12L15 17'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
    keywords: ['arrow', 'chevron'],
  },
  'arrow-up-left': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M6 6L18 18'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M6 6H13'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M6 6V13'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
    keywords: ['arrow', 'chevron'],
  },
  'arrow-up-right': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M18 6L6 18'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M18 6H11'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M18 6V13'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
    keywords: ['arrow', 'chevron'],
  },
  'arrow-up': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12 20L12 4'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 4L17 9'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 4L7 9'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
    keywords: ['arrow', 'chevron'],
  },
  'arrows-down-up': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M7 6L7 21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M7 21L10.5 17.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M7 21L3.5 17.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M17 18L17 3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M17 3L20.5 6.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M17 3L13.5 6.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
    keywords: ['arrow', 'chevron'],
  },
  'arrows-left-right': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M6 17H21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M21 17L17.5 13.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M21 17L17.5 20.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M18 7H3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M3 7L6.5 3.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M3 7L6.5 10.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
    keywords: ['arrow', 'chevron'],
  },
  'arrows-right-left': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M18 17H3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M3 17L6.5 13.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M3 17L6.5 20.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M6 7H21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M21 7L17.5 3.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M21 7L17.5 10.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
    keywords: ['arrow', 'chevron'],
  },
  'arrows-up-down': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M17 6L17 21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M17 21L13.5 17.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M17 21L20.5 17.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M7 18L7 3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M7 3L3.5 6.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M7 3L10.5 6.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
    keywords: ['arrow', 'chevron'],
  },
  'chevron-down': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12 16L20 8'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 16L4 8'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
    keywords: ['arrow', 'chevron'],
  },
  'chevron-left': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M8 12L16 4'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M8 12L16 20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
    keywords: ['arrow', 'chevron'],
  },
  'chevron-right': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M16 12L8 4'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M16 12L8 20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
    keywords: ['arrow', 'chevron'],
  },
  'chevron-small-down': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12 14.5L16.5 10'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 14.5L7.5 10'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
    keywords: ['arrow', 'chevron', 'caret'],
  },
  'chevron-small-left': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M9.5 12L14 7.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M9.5 12L14 16.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
    keywords: ['arrow', 'chevron', 'caret'],
  },
  'chevron-small-right': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M14 12L9.5 7.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M14 12L9.5 16.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
    keywords: ['arrow', 'chevron', 'caret'],
  },
  'chevron-small-up': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12 10L16.5 14.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 10L7.5 14.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
    keywords: ['arrow', 'chevron', 'caret'],
  },
  'chevron-up': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12 8L20 16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 8L4 16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
    keywords: ['arrow', 'chevron'],
  },
  'chevrons-down': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12 11.5L16.5 7'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 17.5L16.5 13'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 11.5L7.5 7'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 17.5L7.5 13'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
    keywords: ['arrow', 'chevron'],
  },
  'chevrons-left': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12.5 12L17 7.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M6.5 12L11 7.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12.5 12L17 16.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M6.5 12L11 16.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
    keywords: ['arrow', 'chevron'],
  },
  'chevrons-right': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M11.5 12L7 7.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M17.5 12L13 7.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M11.5 12L7 16.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M17.5 12L13 16.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
    keywords: ['arrow', 'chevron'],
  },
  'chevrons-up': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12 12.5L16.5 17'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 6.5L16.5 11'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 12.5L7.5 17'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 6.5L7.5 11'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
    keywords: ['arrow', 'chevron'],
  },
  bank: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12 18V11'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M6 18V11'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M18 18V11'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M5 21L19 21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M20 8H4L12 3L20 8Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  home: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M9 21V12H15V21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M4 10L12 3L20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10Z'
          stroke='black'
          stroke-width='2'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'calendar-1': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='4'
          y='4'
          width='16'
          height='16'
          rx='3'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M8 4V3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M16 4V3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M4 9H20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M12.5 12L12.5 17'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M12.5 12L11.5 13'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'calendar-9': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='4'
          y='4'
          width='16'
          height='16'
          rx='3'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M8 4V3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M16 4V3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M4 9H20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M13.5 13L13.5 15.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Circle cx='12' cy='13' r='1.5' stroke='black' stroke-width='2' />
        <Path
          d='M13.5 15.5C13.5 16.3284 12.8284 17 12 17C11.5558 17 11.1566 16.8069 10.882 16.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'calendar-event': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='4'
          y='4'
          width='16'
          height='16'
          rx='3'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M8 4V3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M16 4V3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M4 9H20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Rect
          x='13'
          y='12'
          width='4'
          height='4'
          rx='1'
          stroke='black'
          stroke-width='2'
        />
      </Svg>
    ),
  },
  'calendar-minus': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='4'
          y='4'
          width='16'
          height='16'
          rx='3'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M8 4V3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M16 4V3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M4 9H20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M10 14L14 14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'calendar-plus': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='4'
          y='4'
          width='16'
          height='16'
          rx='3'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M8 4V3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M16 4V3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M4 9H20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M12 12V16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M10 14L14 14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  calendar: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='4'
          y='4'
          width='16'
          height='16'
          rx='3'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M8 4V3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M16 4V3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M4 9H20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'bar-chart-2': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M3 18V15C3 13.8954 3.89543 13 5 13C6.10457 13 7 13.8954 7 15V18C7 19.1046 6.10457 20 5 20C3.89543 20 3 19.1046 3 18Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M10 18V6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6V18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M17 18V10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10V18C21 19.1046 20.1046 20 19 20C17.8954 20 17 19.1046 17 18Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'bar-chart': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M3 18V15C3 13.8954 3.89543 13 5 13C6.10457 13 7 13.8954 7 15V18C7 19.1046 6.10457 20 5 20C3.89543 20 3 19.1046 3 18Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M10 18V11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11V18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M17 18V6C17 4.89543 17.8954 4 19 4C20.1046 4 21 4.89543 21 6V18C21 19.1046 20.1046 20 19 20C17.8954 20 17 19.1046 17 18Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'line-chart-down-2': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M3 4V21H21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M21 17L14 10L10 14L3 7.00001'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'line-chart-down': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M22 18L14 9.99999L10 14L2 6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'line-chart-up-2': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M3 4V21H21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M3 17L10 10L14 14L21 7.00001'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'line-chart-up': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M2 18L10 9.99999L14 14L22 6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'pie-chart': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M8 3.93774C7.65584 4.1085 7.32171 4.30174 6.99987 4.51678C5.51983 5.50571 4.36628 6.91132 3.68509 8.55586C3.0039 10.2004 2.82567 12.01 3.17294 13.7558C3.5202 15.5016 4.37737 17.1053 5.63604 18.364C6.89472 19.6226 8.49836 20.4798 10.2442 20.8271C11.99 21.1743 13.7996 20.9961 15.4442 20.3149C17.0887 19.6337 18.4943 18.4802 19.4832 17.0001C19.6983 16.6783 19.8915 16.3442 20.0623 16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M18.364 5.63604C16.7943 4.06639 14.7046 3.13642 12.4998 3.01388C12.2241 2.99855 12 3.22386 12 3.5L12 11.5C12 11.7761 12.2239 12 12.5 12L20.5 12C20.7761 12 21.0014 11.7759 20.9861 11.5002C20.8636 9.29542 19.9336 7.20568 18.364 5.63604Z'
          stroke='black'
          stroke-width='2'
        />
      </Svg>
    ),
  },
  archive: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4 9H20V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V9Z'
          stroke='black'
          stroke-width='2'
        />
        <Rect
          x='3'
          y='4'
          width='18'
          height='5'
          rx='1'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M10 12H14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'at-sign': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='4' stroke='black' stroke-width='2' />
        <Path
          d='M16 8.5C16 8.5 16 12 16 13C16 14 16.5 16 18.5 16C20.5 16 21 14 21 13'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M17.6573 19C16.1116 20.2508 14.1433 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V13'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'bell-mute': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4 21L20 5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M6.00002 19H18C20 19 20.5812 17.0811 19 15.5L18 14.5C17.3507 13.8506 17.2916 12.4845 17.2206 10.8396C17.1822 9.95134 17.1403 8.98182 17 8M4.57721 16C4.69546 15.8314 4.83611 15.6639 5 15.5L5.99999 14.5C6.64933 13.8506 6.70836 12.4845 6.77945 10.8396C6.81783 9.95134 6.85973 8.98182 6.99999 8C7.39999 5.2 10.5 4 12 4C12.769 4 13.9584 4.31537 14.9891 5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M12 3.01V3.005V3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Circle cx='12' cy='20' r='2' fill='black' />
      </Svg>
    ),
  },
  'bell-notification': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='16' cy='9' r='3' stroke='black' stroke-width='2' />
        <Path
          d='M13 2.5C13 1.94772 12.5523 1.5 12 1.5C11.4477 1.5 11 1.94772 11 2.5H13ZM7.00001 8L7.98995 8.14142L7.00001 8ZM6.77946 10.8396L5.78039 10.7964L6.77946 10.8396ZM6 14.5L6.70712 15.2071L6.70712 15.2071L6 14.5ZM5.00001 15.5L5.7071 16.2071L5.70712 16.2071L5.00001 15.5ZM19 15.5L18.2929 16.2071L18.2929 16.2071L19 15.5ZM18 14.5L17.2929 15.2071L17.2929 15.2071L18 14.5ZM18.3108 12.3375C18.2576 11.7878 17.7689 11.3853 17.2192 11.4385C16.6694 11.4917 16.2669 11.9804 16.3201 12.5302L18.3108 12.3375ZM11 2.5V3H13V2.5H11ZM7.98995 8.14142C8.22845 6.47195 9.82244 5.44271 11.2433 5.103L10.7782 3.15782C9.03342 3.57499 6.42087 4.9829 6.01006 7.85858L7.98995 8.14142ZM7.77853 10.8828C7.81719 9.9881 7.85775 9.06682 7.98995 8.14142L6.01006 7.85858C5.86174 8.89681 5.8185 9.91458 5.78039 10.7964L7.77853 10.8828ZM6.70712 15.2071C7.25918 14.655 7.47898 13.8909 7.59295 13.2076C7.70994 12.5063 7.74381 11.6861 7.77853 10.8828L5.78039 10.7964C5.74403 11.638 5.71284 12.3232 5.62021 12.8786C5.52455 13.452 5.39017 13.6956 5.29288 13.7929L6.70712 15.2071ZM5.70712 16.2071L6.70712 15.2071L5.29289 13.7929L4.29289 14.7929L5.70712 16.2071ZM6.00003 18C5.33763 18 5.16266 17.7191 5.11704 17.5628C5.05278 17.3426 5.08539 16.8288 5.7071 16.2071L4.29292 14.7929C3.33345 15.7523 2.86607 16.9886 3.19711 18.123C3.5468 19.3214 4.66243 20 6.00003 20V18ZM18 18H6.00003V20H18V18ZM18.2929 16.2071C18.9146 16.8288 18.9473 17.3426 18.883 17.5628C18.8374 17.7191 18.6624 18 18 18V20C19.3376 20 20.4532 19.3214 20.8029 18.123C21.134 16.9886 20.6666 15.7523 19.7071 14.7929L18.2929 16.2071ZM17.2929 15.2071L18.2929 16.2071L19.7071 14.7929L18.7071 13.7929L17.2929 15.2071ZM16.3201 12.5302C16.4074 13.4319 16.5905 14.5046 17.2929 15.2071L18.7071 13.7929C18.5618 13.6475 18.4003 13.2616 18.3108 12.3375L16.3201 12.5302ZM11 3C11 3.00052 11 3.00067 10.9999 3.001C10.9998 3.00143 10.9994 3.00333 10.9979 3.00687C10.9949 3.01413 10.9868 3.02968 10.968 3.05024C10.9271 3.0951 10.8581 3.13872 10.7782 3.15782L11.2433 5.103C12.1072 4.89644 13 4.13073 13 3H11Z'
          fill='black'
        />
        <Circle cx='12' cy='20' r='2' fill='black' />
      </Svg>
    ),
  },
  'bell-ring': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='20' r='2' fill='black' />
        <Path
          d='M6 3L4 6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M18 3L20 6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M7.00001 8C7.40001 5.2 10.5 4 12 4C13.5 4 16.6 5.2 17 8C17.4 10.8 17 13.5 18 14.5L19 15.5C20.5812 17.0811 20 19 18 19H6.00003C4.00003 19 3.41883 17.0811 5.00001 15.5L6 14.5C6.99998 13.5 6.60001 10.8 7.00001 8Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M12 3.01V3.005V3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  bell: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          opacity='0.3'
          d='M12 4V3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M7.00001 8C7.40001 5.2 10.5 4 12 4C13.5 4 16.6 5.2 17 8C17.4 10.8 17 13.5 18 14.5L19 15.5C20.5812 17.0811 20 19 18 19H6.00003C4.00003 19 3.41883 17.0811 5.00001 15.5L6 14.5C6.99998 13.5 6.60001 10.8 7.00001 8Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M12 3.01V3.005V3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Circle cx='12' cy='20' r='2' fill='black' />
      </Svg>
    ),
  },
  bluetooth: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12 12V4.41421C12 3.52331 13.0771 3.07714 13.7071 3.70711L17.1375 7.13747C17.5837 7.58369 17.5101 8.32658 16.985 8.67662L12 12ZM12 12V19.5858C12 20.4767 13.0771 20.9229 13.7071 20.2929L17.1375 16.8625C17.5837 16.4163 17.5101 15.6734 16.985 15.3234L12 12ZM12 12L6.5 16M6.5 8L8.5 9.49999'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'call-forward': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4.3234 3.67662L5.25002 2.74999C5.64191 2.3581 6.2923 2.41359 6.61214 2.8662L8.91862 6.13009C9.32018 6.69834 9.25408 7.47321 8.76206 7.96523C8.36697 8.36032 8.23953 8.9491 8.48749 9.44981C8.91987 10.3229 9.73836 11.7383 11 13C12.2617 14.2617 13.6771 15.0801 14.5502 15.5125C15.0509 15.7605 15.6397 15.633 16.0348 15.238C16.5268 14.7459 17.3017 14.6798 17.8699 15.0814L21.1338 17.3879C21.5864 17.7077 21.6419 18.3581 21.25 18.75L20.3234 19.6766C19.0255 20.9746 17.1717 21.5503 15.3669 21.2161C14.8372 21.118 14.3251 20.9451 13.8639 20.667C12.7598 20.0012 10.4891 18.4891 8.00002 16C5.51091 13.5109 3.99886 11.2402 3.33306 10.1361C3.05489 9.67488 2.88202 9.1628 2.78394 8.63317C2.44971 6.82829 3.02546 4.97456 4.3234 3.67662Z'
          stroke='black'
          stroke-width='2.25'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M20.0711 5.03554L13 5.03554'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M20.071 5.03554L17.9497 7.15686'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M20.071 5.03554L17.9497 2.91422'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'call-hangup': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M22 12.7944V15.5C22 15.7697 21.7704 15.9823 21.5015 15.9616L17.1507 15.627C16.3323 15.564 15.81 14.725 16.1149 13.9628C16.3368 13.4081 16.1157 12.783 15.5529 12.5824C14.7838 12.3082 13.5702 12 12 12C10.4298 12 9.21616 12.3082 8.44709 12.5824C7.88432 12.783 7.66324 13.4081 7.88513 13.9628C8.18999 14.725 7.66773 15.564 6.8493 15.627L2.49853 15.9616C2.22961 15.9823 2 15.7697 2 15.5L2 12.7944C2 11.6455 2.45642 10.5436 3.26884 9.73115C3.74953 9.25046 4.33577 8.8888 4.99798 8.73519C6.27514 8.43893 8.7207 8 12 8C15.2793 8 17.7248 8.43892 19.002 8.73518C19.6642 8.88879 20.2505 9.25046 20.7312 9.73115C21.5436 10.5436 22 11.6455 22 12.7944Z'
          stroke='black'
          stroke-width='2.25'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'call-incoming': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4.32337 3.67662L5.24999 2.74999C5.64188 2.3581 6.29227 2.41359 6.61211 2.8662L8.91859 6.13009C9.32015 6.69834 9.25405 7.47321 8.76203 7.96523C8.36694 8.36032 8.2395 8.9491 8.48746 9.44981C8.91984 10.3229 9.73833 11.7383 11 13C12.2617 14.2617 13.6771 15.0801 14.5502 15.5125C15.0509 15.7605 15.6397 15.633 16.0348 15.238C16.5268 14.7459 17.3017 14.6798 17.8699 15.0814L21.1338 17.3879C21.5864 17.7077 21.6419 18.3581 21.25 18.75L20.3234 19.6766C19.0254 20.9746 17.1717 21.5503 15.3668 21.2161C14.8372 21.118 14.3251 20.9451 13.8638 20.667C12.7598 20.0012 10.4891 18.4891 7.99999 16C5.51088 13.5109 3.99883 11.2402 3.33303 10.1361C3.05486 9.67488 2.88199 9.1628 2.78391 8.63317C2.44968 6.82829 3.02543 4.97456 4.32337 3.67662Z'
          stroke='black'
          stroke-width='2.25'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M14 10L19 5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M14 10V7'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M14 10H17'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'call-missed': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4.3234 3.67662L5.25002 2.74999C5.64191 2.3581 6.2923 2.41359 6.61214 2.8662L8.91862 6.13009C9.32018 6.69834 9.25408 7.47321 8.76206 7.96523C8.36697 8.36032 8.23953 8.9491 8.48749 9.44981C8.91987 10.3229 9.73836 11.7383 11 13C12.2617 14.2617 13.6771 15.0801 14.5502 15.5125C15.0509 15.7605 15.6397 15.633 16.0348 15.238C16.5268 14.7459 17.3017 14.6798 17.8699 15.0814L21.1338 17.3879C21.5864 17.7077 21.6419 18.3581 21.25 18.75L20.3234 19.6766C19.0255 20.9746 17.1717 21.5503 15.3669 21.2161C14.8372 21.118 14.3251 20.9451 13.8639 20.667C12.7598 20.0012 10.4891 18.4891 8.00002 16C5.51091 13.5109 3.99886 11.2402 3.33306 10.1361C3.05489 9.67488 2.88202 9.1628 2.78394 8.63317C2.44971 6.82829 3.02546 4.97456 4.3234 3.67662Z'
          stroke='black'
          stroke-width='2.25'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M17.071 5.03554L14.9497 7.15686'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M17.071 5.03554L14.9497 2.91422'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M17 5.03554L19.1213 7.15686'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M17 5.03554L19.1213 2.91422'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'call-outgoing': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4.3234 3.67662L5.25002 2.74999C5.64191 2.3581 6.2923 2.41359 6.61214 2.8662L8.91862 6.13009C9.32018 6.69834 9.25408 7.47321 8.76206 7.96523C8.36697 8.36032 8.23953 8.9491 8.48749 9.44981C8.91987 10.3229 9.73836 11.7383 11 13C12.2617 14.2617 13.6771 15.0801 14.5502 15.5125C15.0509 15.7605 15.6397 15.633 16.0348 15.238C16.5268 14.7459 17.3017 14.6798 17.8699 15.0814L21.1338 17.3879C21.5864 17.7077 21.6419 18.3581 21.25 18.75L20.3234 19.6766C19.0255 20.9746 17.1717 21.5503 15.3669 21.2161C14.8372 21.118 14.3251 20.9451 13.8639 20.667C12.7598 20.0012 10.4891 18.4891 8.00002 16C5.51091 13.5109 3.99886 11.2402 3.33306 10.1361C3.05489 9.67488 2.88202 9.1628 2.78394 8.63317C2.44971 6.82829 3.02546 4.97456 4.3234 3.67662Z'
          stroke='black'
          stroke-width='2.25'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M13 7C13 7 14.5 7.5 15.5 8.5C16.5 9.5 17 11 17 11'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M13.5 3.5C13.5 3.5 16 4 18 6C20 8 20.5 10.5 20.5 10.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'chat-2': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M8 8H16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M8 12H13'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M7 21H6C6 21.3702 6.20451 21.7101 6.53158 21.8835C6.85864 22.0569 7.25475 22.0354 7.56116 21.8277L7 21ZM6.6 4H17.4V2H6.6V4ZM20 7V13H22V7H20ZM4 13V7H2V13H4ZM17.4 16H14.1281V18H17.4V16ZM2 13C2 15.6597 3.96299 18 6.6 18V16C5.26056 16 4 14.7586 4 13H2ZM20 13C20 14.7586 18.7394 16 17.4 16V18C20.037 18 22 15.6597 22 13H20ZM17.4 4C18.7394 4 20 5.24143 20 7H22C22 4.34029 20.037 2 17.4 2V4ZM6.6 2C3.96299 2 2 4.34029 2 7H4C4 5.24143 5.26056 4 6.6 4V2ZM6 17.4V21H8V17.4H6ZM7.56116 21.8277L12.4446 18.5169L11.3223 16.8615L6.43884 20.1723L7.56116 21.8277ZM14.1281 16C13.1277 16 12.1503 16.3001 11.3223 16.8615L12.4446 18.5169C12.9415 18.1801 13.5279 18 14.1281 18V16ZM6.6 18C6.26863 18 6 17.7314 6 17.4H8C8 16.6268 7.3732 16 6.6 16V18Z'
          fill='black'
        />
      </Svg>
    ),
  },
  'chat-active': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M7 21H6C6 21.3702 6.20451 21.7101 6.53158 21.8835C6.85864 22.0569 7.25475 22.0354 7.56116 21.8277L7 21ZM6.6 4H17.4V2H6.6V4ZM20 7V13H22V7H20ZM4 13V7H2V13H4ZM17.4 16H14.1281V18H17.4V16ZM2 13C2 15.6597 3.96299 18 6.6 18V16C5.26056 16 4 14.7586 4 13H2ZM20 13C20 14.7586 18.7394 16 17.4 16V18C20.037 18 22 15.6597 22 13H20ZM17.4 4C18.7394 4 20 5.24143 20 7H22C22 4.34029 20.037 2 17.4 2V4ZM6.6 2C3.96299 2 2 4.34029 2 7H4C4 5.24143 5.26056 4 6.6 4V2ZM6 17.4V21H8V17.4H6ZM7.56116 21.8277L12.4446 18.5169L11.3223 16.8615L6.43884 20.1723L7.56116 21.8277ZM14.1281 16C13.1277 16 12.1503 16.3001 11.3223 16.8615L12.4446 18.5169C12.9415 18.1801 13.5279 18 14.1281 18V16ZM6.6 18C6.26863 18 6 17.7314 6 17.4H8C8 16.6268 7.3732 16 6.6 16L6.6 18Z'
          fill='black'
        />
        <Path
          d='M8 10H8.01'
          stroke='black'
          stroke-width='3'
          stroke-linecap='round'
        />
        <Path
          d='M12 10H12.01'
          stroke='black'
          stroke-width='3'
          stroke-linecap='round'
        />
        <Path
          d='M16 10H16.01'
          stroke='black'
          stroke-width='3'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  chat: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M7 21H6C6 21.3702 6.20451 21.7101 6.53158 21.8835C6.85864 22.0569 7.25475 22.0354 7.56116 21.8277L7 21ZM6.6 4H17.4V2H6.6V4ZM20 7V13H22V7H20ZM4 13V7H2V13H4ZM17.4 16H14.1281V18H17.4V16ZM2 13C2 15.6597 3.96299 18 6.6 18V16C5.26056 16 4 14.7586 4 13H2ZM20 13C20 14.7586 18.7394 16 17.4 16V18C20.037 18 22 15.6597 22 13H20ZM17.4 4C18.7394 4 20 5.24143 20 7H22C22 4.34029 20.037 2 17.4 2V4ZM6.6 2C3.96299 2 2 4.34029 2 7H4C4 5.24143 5.26056 4 6.6 4V2ZM6 17.4V21H8V17.4H6ZM7.56116 21.8277L12.4446 18.5169L11.3223 16.8615L6.43884 20.1723L7.56116 21.8277ZM14.1281 16C13.1277 16 12.1503 16.3001 11.3223 16.8615L12.4446 18.5169C12.9415 18.1801 13.5279 18 14.1281 18V16ZM6.6 18C6.26863 18 6 17.7314 6 17.4H8C8 16.6268 7.3732 16 6.6 16V18Z'
          fill='black'
        />
      </Svg>
    ),
  },
  forward: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M14.5 12V15L20.5 9L14.5 3V6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M6.50002 21L5.8433 19.5927C2.8877 13.2593 7.51089 6 14.5 6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M14.5 12H13.5C9.63401 12 6.5 15.134 6.5 19V21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'inbox-2': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M21 20V15H16C15.4477 15 15.0163 15.46 14.8356 15.9819C14.4289 17.1565 13.313 18 12 18C10.687 18 9.57105 17.1565 9.16437 15.9819C8.98368 15.46 8.55228 15 8 15H3V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M3 15V14.2361C3 14.0808 3.03615 13.9277 3.10557 13.7888L5.72361 8.55278C5.893 8.21399 6.23926 7.99999 6.61803 7.99999H17.382C17.7607 7.99999 18.107 8.21399 18.2764 8.55278L20.8944 13.7888C20.9639 13.9277 21 14.0808 21 14.2361V15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  inbox: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M21 20V15H16C15.4477 15 15.0163 15.46 14.8356 15.9819C14.4289 17.1565 13.313 18 12 18C10.687 18 9.57105 17.1565 9.16437 15.9819C8.98368 15.46 8.55228 15 8 15H3V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M3 15V14.2361C3 14.0808 3.03615 13.9277 3.10557 13.7888L5.72361 8.55278C5.893 8.21399 6.23926 7.99999 6.61803 7.99999H8M21 15V14.2361C21 14.0808 20.9639 13.9277 20.8944 13.7888L18.2764 8.55278C18.107 8.21399 17.7607 7.99999 17.382 7.99999H16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M12 4L12 13'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 13L14.5 10.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 13L9.5 10.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  inboxes: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M21 20V15H16C15.4477 15 15.0163 15.46 14.8356 15.9819C14.4289 17.1565 13.313 18 12 18C10.687 18 9.57105 17.1565 9.16437 15.9819C8.98368 15.46 8.55228 15 8 15H3V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M21 15V9H16C15.4477 9 15.0163 9.46 14.8356 9.98189C14.4289 11.1565 13.313 12 12 12C10.687 12 9.57105 11.1565 9.16437 9.98189C8.98368 9.46 8.55228 9 8 9H3V15'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M3 8.5V7.80278C3 7.60535 3.05844 7.41234 3.16795 7.24808L5.70313 3.4453C5.8886 3.1671 6.20083 3 6.53518 3H17.4648C17.7992 3 18.1114 3.1671 18.2969 3.4453L20.8321 7.24808C20.9416 7.41234 21 7.60535 21 7.80278V8.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'mail-open': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M3 8V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V8'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M3 8L11.4453 13.6302C11.7812 13.8541 12.2188 13.8541 12.5547 13.6302L21 8'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M3 8L11.4453 2.3698C11.7812 2.14587 12.2188 2.14587 12.5547 2.3698L21 8'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  mail: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='3'
          y='5'
          width='18'
          height='14'
          rx='2'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M4 6L11.4 11.55C11.7556 11.8167 12.2444 11.8167 12.6 11.55L20 6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'microphone-off': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M6 13C6 13.4952 6.05998 13.9763 6.17307 14.4366M18 13C18 16.3137 15.3137 19 12 19C10.359 19 8.87179 18.3412 7.78856 17.2736'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M12 19V21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M5 20L20 5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M15 6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6V12M15 10.5V13C15 14.6569 13.6569 16 12 16C11.254 16 10.5717 15.7277 10.0468 15.2772'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  microphone: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='9'
          y='3'
          width='6'
          height='13'
          rx='3'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M6 13C6 16.3137 8.68629 19 12 19C15.3137 19 18 16.3137 18 13'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M12 19V21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  outbox: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M21 20V15H16C15.4477 15 15.0163 15.46 14.8356 15.9819C14.4289 17.1565 13.313 18 12 18C10.687 18 9.57105 17.1565 9.16437 15.9819C8.98368 15.46 8.55228 15 8 15H3V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M3 15V14.2361C3 14.0808 3.03615 13.9277 3.10557 13.7888L5.72361 8.55278C5.893 8.21399 6.23926 7.99999 6.61803 7.99999H8M21 15V14.2361C21 14.0808 20.9639 13.9277 20.8944 13.7888L18.2764 8.55278C18.107 8.21399 17.7607 7.99999 17.382 7.99999H16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M12 13L12 3.00001'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 3L14.5 5.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 3L9.5 5.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  phone: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4.3234 3.67662L5.25002 2.74999C5.64191 2.3581 6.2923 2.41359 6.61214 2.8662L8.91862 6.13009C9.32018 6.69834 9.25408 7.47321 8.76206 7.96523C8.36697 8.36032 8.23953 8.9491 8.48749 9.44981C8.91987 10.3229 9.73836 11.7383 11 13C12.2617 14.2617 13.6771 15.0801 14.5502 15.5125C15.0509 15.7605 15.6397 15.633 16.0348 15.238C16.5268 14.7459 17.3017 14.6798 17.8699 15.0814L21.1338 17.3879C21.5864 17.7077 21.6419 18.3581 21.25 18.75L20.3234 19.6766C19.0255 20.9746 17.1717 21.5503 15.3669 21.2161C14.8372 21.118 14.3251 20.9451 13.8639 20.667C12.7598 20.0012 10.4891 18.4891 8.00002 16C5.51091 13.5109 3.99886 11.2402 3.33306 10.1361C3.05489 9.67488 2.88202 9.1628 2.78394 8.63317C2.44971 6.82829 3.02546 4.97456 4.3234 3.67662Z'
          stroke='black'
          stroke-width='2.25'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'reply-all': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M6 9L12 3V6C18.9891 6 23.6123 13.2593 20.6567 19.5927L20 21V19C20 15.134 16.866 12 13 12H12V15L6 9Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M8 11.2881V15L2 9L8 3V6.72171'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  reply: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M10 12V15L4 9L10 3V6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M18 21L18.6567 19.5927C21.6123 13.2593 16.9891 6 10 6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M10 12H11C14.866 12 18 15.134 18 19V21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  send: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M20 4L12 12'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M20 4L16 20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M20 4L4 8'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M4 8L11.7019 11.8509C11.8954 11.9477 12.0523 12.1046 12.1491 12.2981L16 20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  vibrate: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='7'
          y='4'
          width='10'
          height='16'
          rx='2'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M9 4H15V5C15 5.55228 14.5523 6 14 6H10C9.44772 6 9 5.55228 9 5V4Z'
          fill='black'
        />
        <Path
          d='M2.5 8L4.5 10L2.5 12L4.5 14L2.5 16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M21.5 8L19.5 10L21.5 12L19.5 14L21.5 16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  voicemail: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='6.5' cy='11.5' r='3.5' stroke='black' stroke-width='2' />
        <Circle cx='17.5' cy='11.5' r='3.5' stroke='black' stroke-width='2' />
        <Path
          d='M6.5 15H17.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'wifi-off': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12 20L12 20.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M9 16C9 16 10 14.5 12 14.5C14 14.5 15 16 15 16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M6 12.5C6 12.5 6.87897 11.035 9.30978 10.348M18 12.5C18 12.5 16.9867 10.8111 14.1271 10.2096'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M3 9C3 9 5.5 5 12 5C12.5259 5 13.0257 5.02291 13.5 5.06503M21 9C21 9 20.0241 7.63381 17.7066 6.60854'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M5 19L19 5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  wifi: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12 20L12 20.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M9 16C9 16 10 14.5 12 14.5C14 14.5 15 16 15 16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M6 12.5C6 12.5 7.49998 10 12 10C16.5 10 18 12.5 18 12.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M3 9C3 9 5.5 5 12 5C18.5 5 21 9 21 9'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'airpods-case': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='5'
          y='4'
          width='14'
          height='16'
          rx='4'
          stroke='black'
          stroke-width='2'
        />
        <Path d='M5 9L19 9' stroke='black' stroke-width='2' />
      </Svg>
    ),
  },
  'battery-charging': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M16 7C17.1046 7 18 7.89543 18 9V15C18 16.1046 17.1046 17 16 17H13'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M8 7H5C3.89543 7 3 7.89543 3 9V15C3 16.1046 3.89543 17 5 17H6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M21 10V14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M13 7L8 12H14L9 17'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'battery-full': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='3'
          y='7'
          width='15'
          height='10'
          rx='2'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M21 10V14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M6 10V14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M9 10V14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 10V14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M15 10V14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'battery-low': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='3'
          y='7'
          width='15'
          height='10'
          rx='2'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M21 10V14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M6 10V14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'battery-mid-high': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='3'
          y='7'
          width='15'
          height='10'
          rx='2'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M21 10V14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M6 10V14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M9 10V14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 10V14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'battery-mid-low': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='3'
          y='7'
          width='15'
          height='10'
          rx='2'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M21 10V14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M6 10V14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M9 10V14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  battery: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='3'
          y='7'
          width='15'
          height='10'
          rx='2'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M21 10V14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  calculator: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M9 11H9.001'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M9 14H9.001'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M9 17H12'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M15 17H15.001'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 14H12.001'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M15 14H15.001'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 11H12.001'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M15 11H15.001'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Rect
          x='5'
          y='3'
          width='14'
          height='18'
          rx='2'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M8.5 7H15.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  camera: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M9.3 5C8.90828 5 8.51655 5.33152 8.19904 5.77813C7.559 6.67837 6.60457 7.625 5.5 7.625H5C3.89543 7.625 3 8.52043 3 9.625V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V9.625C21 8.52043 20.1046 7.625 19 7.625H18.5C17.3954 7.625 16.3949 6.69325 15.7432 5.80145C15.4082 5.34311 15.0188 5 14.7 5M9.3 5C10.2 5 13.8 5 14.7 5M9.3 5H14.7'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Circle cx='12' cy='13' r='3' stroke='black' stroke-width='2' />
        <Circle cx='17' cy='10' r='1' fill='black' />
      </Svg>
    ),
  },
  cellphone: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='5'
          y='4'
          width='14'
          height='17'
          rx='3'
          stroke='black'
          stroke-width='2'
        />
        <Rect
          x='8'
          y='7'
          width='8'
          height='6'
          rx='1'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M16 4V3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  chip: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='6'
          y='6'
          width='12'
          height='12'
          rx='2'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M9 5V3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 5V3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M15 5V3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M9 21V19'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 21V19'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M15 21V19'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M3 9L5 9'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M19 9L21 9'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M3 12L5 12'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M19 12L21 12'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M3 15L5 15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M19 15L21 15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M10 12H14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  clock: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='9' stroke='black' stroke-width='2' />
        <Path
          d='M12 12L15 15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 12V6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  earphones: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M7.99912 5.06799C9.49885 6.03249 9.99877 7.13999 9.99877 8.42599V18.071C9.99877 18.714 10.0988 20 8.49904 20C6.89933 20 6.99929 18.714 6.99929 18.071V11.3195C4.49973 12.284 3.33327 10.5157 3 9.87274V6.01472C3.49991 4.0857 6.3994 3.91059 7.99912 5.06799Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M16.0009 5.06799C14.5011 6.03249 14.0012 7.13999 14.0012 8.42599V18.071C14.0012 18.714 13.9012 20 15.501 20C17.1007 20 17.0007 18.714 17.0007 18.071V11.3195C19.5003 12.284 20.6667 10.5157 21 9.87274V6.01472C20.5001 4.0857 17.6006 3.91059 16.0009 5.06799Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'game-controller': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M6 9C3.23858 9 1 11.2386 1 14C1 16.7614 3.23858 19 6 19C8.05032 19 9.8124 17.7659 10.584 16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M18 9C20.7614 9 23 11.2386 23 14C23 16.7614 20.7614 19 18 19C15.9497 19 14.1876 17.7659 13.416 16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path d='M6 9H18M13.5 16H10.5' stroke='black' stroke-width='2' />
        <Path
          d='M12 8C12 6.5 12.1515 5.84854 13 5C14 4 17 3 17 1'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M6 12V16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M4 14H8'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M16 14H16.001'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M18 16H18.001'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M20 14H20.001'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M18 12H18.001'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  headphones: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M19 12C19 9 18 4 12 4C5.99995 4 5 9 5 12'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M3 15C3 13.3431 4.34315 12 6 12V12C6.55228 12 7 12.4477 7 13V19C7 19.5523 6.55228 20 6 20V20C4.34315 20 3 18.6569 3 17V15Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M21 15C21 13.3431 19.6569 12 18 12V12C17.4477 12 17 12.4477 17 13V19C17 19.5523 17.4477 20 18 20V20C19.6569 20 21 18.6569 21 17V15Z'
          stroke='black'
          stroke-width='2'
        />
      </Svg>
    ),
  },
  'laptop-2': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M1 16H23V17C23 18.1046 22.1046 19 21 19H3C1.89543 19 1 18.1046 1 17V16Z'
          fill='black'
        />
        <Path
          d='M4 8C4 6.89543 4.89543 6 6 6H18C19.1046 6 20 6.89543 20 8V18H4V8Z'
          stroke='black'
          stroke-width='2'
        />
      </Svg>
    ),
  },
  laptop: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4 8C4 6.89543 4.89543 6 6 6H18C19.1046 6 20 6.89543 20 8V17H4V8Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M22 17H2V18H22V17Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  monitor: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12 18V19'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M6 20H18'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Rect
          x='3'
          y='17'
          width='13'
          height='18'
          rx='2'
          transform='rotate(-90 3 17)'
          stroke='black'
          stroke-width='2'
        />
      </Svg>
    ),
  },
  mouse: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='6'
          y='3'
          width='12'
          height='18'
          rx='6'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M12 7L12 9'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'movie-camera-off': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M21 6L16 11V13L21 18V6Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M4 19.5L18 5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 6H5C3.89543 6 3 6.89543 3 8V15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M5 18H14C15.1046 18 16 17.1046 16 16V8C16 7.63571 15.9026 7.29417 15.7324 7'
          stroke='black'
          stroke-width='2'
        />
      </Svg>
    ),
  },
  'movie-camera': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='3'
          y='6'
          width='13'
          height='12'
          rx='2'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M21 6L16 11V13L21 18V6Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'nintendo-switch': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4 8C4 5.79086 5.79086 4 8 4H10C11.1046 4 12 4.89543 12 6V18C12 19.1046 11.1046 20 10 20H8C5.79086 20 4 18.2091 4 16V8Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M20 8C20 5.79086 18.2091 4 16 4H14C12.8954 4 12 4.89543 12 6V18C12 19.1046 12.8954 20 14 20H16C18.2091 20 20 18.2091 20 16V8Z'
          stroke='black'
          stroke-width='2'
        />
        <Circle cx='8' cy='9' r='1' stroke='black' stroke-width='2' />
        <Circle cx='16' cy='13' r='1' stroke='black' stroke-width='2' />
      </Svg>
    ),
  },
  'smartphone-2': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='6'
          y='3'
          width='12'
          height='18'
          rx='2'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M12 18H12.001'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  smartphone: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='6'
          y='3'
          width='12'
          height='18'
          rx='2'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M9 3H15V4C15 4.55228 14.5523 5 14 5H10C9.44772 5 9 4.55228 9 4V3Z'
          fill='black'
        />
      </Svg>
    ),
  },
  smartphones: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='3'
          y='5'
          width='10'
          height='16'
          rx='2'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M11 5V5C11 3.89543 11.8954 3 13 3H19C20.1046 3 21 3.89543 21 5V17C21 18.1046 20.1046 19 19 19H13.5'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M5 5H11V6C11 6.55228 10.5523 7 10 7H6C5.44772 7 5 6.55228 5 6V5Z'
          fill='black'
        />
        <Path
          d='M13 3H19V4C19 4.55228 18.5523 5 18 5H14C13.4477 5 13 4.55228 13 4V3Z'
          fill='black'
        />
      </Svg>
    ),
  },
  smartwatch: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='6'
          y='6'
          width='12'
          height='12'
          rx='2'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M9 18V20C9 20.5523 9.44772 21 10 21H14C14.5523 21 15 20.5523 15 20V18'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M15 6L15 4C15 3.44772 14.5523 3 14 3L10 3C9.44772 3 9 3.44771 9 4L9 6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M12 12H14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 12L10 10'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  speaker: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='5'
          y='3'
          width='14'
          height='18'
          rx='2'
          stroke='black'
          stroke-width='2'
        />
        <Circle
          cx='12'
          cy='8'
          r='1'
          transform='rotate(-180 12 8)'
          stroke='black'
          stroke-width='2'
        />
        <Circle cx='12' cy='15' r='3' stroke='black' stroke-width='2' />
      </Svg>
    ),
  },
  stopwatch: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='13' r='8' stroke='black' stroke-width='2' />
        <Path
          d='M12 5V3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Circle cx='12' cy='13' r='2' fill='black' />
        <Path
          d='M12 13L9 10'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M19 4L21 6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'tablet-2': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='5'
          y='3'
          width='14'
          height='18'
          rx='2'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M12 18H12.001'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  tablet: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='3'
          y='19'
          width='14'
          height='18'
          rx='2'
          transform='rotate(-90 3 19)'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M10 16H14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  tv: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12 7L8 3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 7L16 3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Rect
          x='3'
          y='20'
          width='13'
          height='18'
          rx='2'
          transform='rotate(-90 3 20)'
          stroke='black'
          stroke-width='2'
        />
      </Svg>
    ),
  },
  watch: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='6'
          y='6'
          width='12'
          height='12'
          rx='6'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M8 16.5L8.82598 20.2169C8.92766 20.6745 9.33347 21 9.80217 21H14.1978C14.6665 21 15.0723 20.6745 15.174 20.2169L16 16.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M16 7.5L15.174 3.78307C15.0723 3.32553 14.6665 3 14.1978 3L9.80217 3C9.33347 3 8.92766 3.32553 8.82598 3.78307L8 7.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M12 12L13.5 13.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 12L12 9'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  angry: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='9' stroke='black' stroke-width='2' />
        <Path
          d='M8 9L10 10'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M16 9L14 10'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M9 11H9.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M15 11H15.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M8 15C8.79844 13.8044 10.2908 13 12 13C13.7092 13 15.2016 13.8044 16 15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  dead: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='9' stroke='black' stroke-width='2' />
        <Path
          d='M10 9L8 11'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M8 9L10 11'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M16 9L14 11'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M14 9L16 11'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M9 15H15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  frown: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='9' stroke='black' stroke-width='2' />
        <Path
          d='M9 10H9.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M15 10H15.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M8 15C8.79844 13.8044 10.2908 13 12 13C13.7092 13 15.2016 13.8044 16 15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  grin: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='9' stroke='black' stroke-width='2' />
        <Path
          d='M16 13C15.6782 14.7026 14.0098 16 12 16C9.99021 16 8.32184 14.7026 8 13'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path d='M8 13L16 13' stroke='black' stroke-width='2' />
        <Path
          d='M9 10H9.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M15 10H15.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  meh: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='9' stroke='black' stroke-width='2' />
        <Path
          d='M9 10H9.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M15 10H15.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M9 14H15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  smile: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='9' stroke='black' stroke-width='2' />
        <Path
          d='M9 10H9.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M15 10H15.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M8 13C8.79844 14.1956 10.2908 15 12 15C13.7092 15 15.2016 14.1956 16 13'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  smirk: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='9' stroke='black' stroke-width='2' />
        <Path
          d='M8 14L9 14.5L16 14.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M10 11H10.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M16 11H16.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M8 10H10'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M14 10H16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  surprise: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='9' stroke='black' stroke-width='2' />
        <Path
          d='M9 10H9.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M15 10H15.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Circle cx='12' cy='14' r='2' stroke='black' stroke-width='2' />
      </Svg>
    ),
  },
  suspicious: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='9' stroke='black' stroke-width='2' />
        <Path
          d='M8 7.5H10'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M16 9.5L14 9.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M9 11H9.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M15 11H15.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M9 15H15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  sweat: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M17.2358 4.6789C15.7607 3.62208 13.953 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 9.9374 20.3062 8.03685 19.1391 6.51903'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M9 10H9.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M15 10H15.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M16.0516 6.10714L17.5 3.5L18.9484 6.10714C19.2808 6.7055 19.2111 7.44669 18.7729 7.97254C18.1105 8.76746 16.8895 8.76746 16.2271 7.97254C15.7889 7.44669 15.7192 6.7055 16.0516 6.10714Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M9 14H15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'tear-smiling': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='9' stroke='black' stroke-width='2' />
        <Path
          d='M9 10H9.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M15 10H15.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M13.8541 15.2918L15 13L16.1459 15.2918C16.3629 15.7258 16.3161 16.2452 16.0249 16.6334C15.5125 17.3167 14.4875 17.3167 13.9751 16.6334C13.6839 16.2452 13.6371 15.7258 13.8541 15.2918Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M9 14C9.59883 14.5978 10.7181 15 12 15C13.2819 15 14.4012 14.5978 15 14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  tear: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='9' stroke='black' stroke-width='2' />
        <Path
          d='M9 10H9.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M15 10H15.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M13.8541 15.2918L15 13L16.1459 15.2918C16.3629 15.7258 16.3161 16.2452 16.0249 16.6334C15.5125 17.3167 14.4875 17.3167 13.9751 16.6334C13.6839 16.2452 13.6371 15.7258 13.8541 15.2918Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M10 15C10.3992 14.4022 11.1454 14 12 14C12.8546 14 13.6008 14.4022 14 15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  tongue: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='9' stroke='black' stroke-width='2' />
        <Path
          d='M9 10H9.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M15 10H15.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M9 14V15.5C9 17.1569 10.3431 18.5 12 18.5V18.5C13.6569 18.5 15 17.1569 15 15.5V14'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M16 13C15.8685 13.6955 15.5124 14.3234 15 14.8229M8 13C8.13147 13.6955 8.48764 14.3234 9 14.8229'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path d='M8 13L16 13' stroke='black' stroke-width='2' />
      </Svg>
    ),
  },
  wink: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='9' stroke='black' stroke-width='2' />
        <Path
          d='M16 13C15.6782 14.7026 14.0098 16 12 16C9.99021 16 8.32184 14.7026 8 13'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path d='M8 13L16 13' stroke='black' stroke-width='2' />
        <Path
          d='M9 10H9.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M15.5 10H14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  document: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M7 21H17C18.1046 21 19 20.1046 19 19V9H15C13.8954 9 13 8.10457 13 7V3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21Z'
          stroke='black'
          stroke-width='2'
          stroke-linejoin='round'
        />
        <Path d='M13 3L19 9' stroke='black' stroke-width='2' />
        <Path
          d='M9 10H11'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M9 13H15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M9 16L15 16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'file-minus': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M7 21H17C18.1046 21 19 20.1046 19 19V9H15C13.8954 9 13 8.10457 13 7V3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21Z'
          stroke='black'
          stroke-width='2'
          stroke-linejoin='round'
        />
        <Path d='M13 3L19 9' stroke='black' stroke-width='2' />
        <Path
          d='M10 13L14 13'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'file-plus': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M7 21H17C18.1046 21 19 20.1046 19 19V9H15C13.8954 9 13 8.10457 13 7V3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21Z'
          stroke='black'
          stroke-width='2'
          stroke-linejoin='round'
        />
        <Path d='M13 3L19 9' stroke='black' stroke-width='2' />
        <Path
          d='M12 11V15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M10 13L14 13'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  file: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M7 21H17C18.1046 21 19 20.1046 19 19V9H15C13.8954 9 13 8.10457 13 7V3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21Z'
          stroke='black'
          stroke-width='2'
          stroke-linejoin='round'
        />
        <Path d='M13 3L19 9' stroke='black' stroke-width='2' />
      </Svg>
    ),
  },
  files: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4.57143 21H12.4286C13.2964 21 14 20.2538 14 19.3333V10.5H11C10.1321 10.5 9.5 9.92047 9.5 9V6H4.57143C3.70355 6 3 6.74619 3 7.66667V19.3333C3 20.2538 3.70355 21 4.57143 21Z'
          stroke='black'
          stroke-width='2'
          stroke-linejoin='round'
        />
        <Path
          d='M9.5 6L14 10.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M11.5714 3H16.5V6C16.5 6.92047 17.1321 7.5 18 7.5H21V16.3333C21 17.2538 20.2964 18 19.4286 18H18'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M16.5 3L21 7.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'folder-minus': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M20 9V18H22V9H20ZM19 19H5V21H19V19ZM12.5 8H19V6H12.5V8ZM5 5H9.5V3H5V5ZM4 18V6H2V18H4ZM9.5 5C9.77614 5 10 5.22386 10 5.5H12C12 4.11929 10.8807 3 9.5 3V5ZM5 3C3.34315 3 2 4.34315 2 6H4C4 5.44772 4.44772 5 5 5V3ZM12.5 6C12.2239 6 12 5.77614 12 5.5H10C10 6.88071 11.1193 8 12.5 8V6ZM5 19C4.44772 19 4 18.5523 4 18H2C2 19.6569 3.34315 21 5 21V19ZM20 18C20 18.5523 19.5523 19 19 19V21C20.6569 21 22 19.6569 22 18H20ZM22 9C22 7.34315 20.6569 6 19 6V8C19.5523 8 20 8.44772 20 9H22Z'
          fill='black'
        />
        <Path
          d='M10 13L14 13'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'folder-plus': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M20 9V18H22V9H20ZM19 19H5V21H19V19ZM12.5 8H19V6H12.5V8ZM5 5H9.5V3H5V5ZM4 18V6H2V18H4ZM9.5 5C9.77614 5 10 5.22386 10 5.5H12C12 4.11929 10.8807 3 9.5 3V5ZM5 3C3.34315 3 2 4.34315 2 6H4C4 5.44772 4.44772 5 5 5V3ZM12.5 6C12.2239 6 12 5.77614 12 5.5H10C10 6.88071 11.1193 8 12.5 8V6ZM5 19C4.44772 19 4 18.5523 4 18H2C2 19.6569 3.34315 21 5 21V19ZM20 18C20 18.5523 19.5523 19 19 19V21C20.6569 21 22 19.6569 22 18H20ZM22 9C22 7.34315 20.6569 6 19 6V8C19.5523 8 20 8.44772 20 9H22Z'
          fill='black'
        />
        <Path
          d='M12 11V15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M10 13L14 13'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  folder: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M20 9V18H22V9H20ZM19 19H5V21H19V19ZM12.5 8H19V6H12.5V8ZM5 5H9.5V3H5V5ZM4 18V6H2V18H4ZM9.5 5C9.77614 5 10 5.22386 10 5.5H12C12 4.11929 10.8807 3 9.5 3V5ZM5 3C3.34315 3 2 4.34315 2 6H4C4 5.44772 4.44772 5 5 5V3ZM12.5 6C12.2239 6 12 5.77614 12 5.5H10C10 6.88071 11.1193 8 12.5 8V6ZM5 19C4.44772 19 4 18.5523 4 18H2C2 19.6569 3.34315 21 5 21V19ZM20 18C20 18.5523 19.5523 19 19 19V21C20.6569 21 22 19.6569 22 18H20ZM22 9C22 7.34315 20.6569 6 19 6V8C19.5523 8 20 8.44772 20 9H22Z'
          fill='black'
        />
      </Svg>
    ),
  },
  airplay: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12 14L8 20H16L12 14Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M18 17H19C20.1046 17 21 16.1046 21 15V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V15C3 16.1046 3.89543 17 5 17H6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'alert-circle': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='9' stroke='black' stroke-width='2' />
        <Path
          d='M12 14V7'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M12 17H12.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'alert-octogon': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12 14V7'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M7.88912 4.07541C8.26419 3.70033 8.7729 3.48962 9.30333 3.48962L14.6967 3.48962C15.2271 3.48962 15.7359 3.70033 16.1109 4.07541L19.9246 7.88911C20.2997 8.26418 20.5104 8.77289 20.5104 9.30332L20.5104 14.6967C20.5104 15.2271 20.2997 15.7358 19.9246 16.1109L16.1109 19.9246C15.7359 20.2997 15.2271 20.5104 14.6967 20.5104L9.30333 20.5104C8.7729 20.5104 8.26419 20.2997 7.88912 19.9246L4.07541 16.1109C3.70034 15.7358 3.48963 15.2271 3.48963 14.6967L3.48963 9.30332C3.48963 8.77289 3.70034 8.26418 4.07541 7.88911L7.88912 4.07541Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M12 17H12.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'alert-triangle': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12 14V8'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M10.5381 4.84211C11.1878 3.7193 12.8122 3.7193 13.4619 4.84211L20.7713 17.4737C21.4211 18.5965 20.6089 20 19.3094 20H4.69056C3.3911 20 2.57895 18.5965 3.22867 17.4737L10.5381 4.84211Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M12 17H12.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'align-center': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M20 6L4 6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M18 10L6 10'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M20 14L4 14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M18 18H6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'align-justify': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M21 6H3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M21 10L3 10'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M21 14H3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M21 18L3 18'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'align-left': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M3 6H20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M3 10H14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M3 14H20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M3 18H14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'align-right': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M21 6H4'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M21 10L10 10'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M21 14H4'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M21 18H10'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  award: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='8' r='5' stroke='black' stroke-width='2' />
        <Path
          d='M9 12L8 21L12 18.8667L16 21L15 12'
          stroke='black'
          stroke-width='2'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  book: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M5 19V5C5 3.89543 5.89543 3 7 3H12M19 17V10M7 21H19'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M12 3H18C18.5523 3 19 3.44772 19 4V10'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M19 17V21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M5 19C5.00002 18 5.99998 17 7 17'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M5 19C5.00002 20 5.99998 21 7 21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M7 17H19'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  bookmark: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M7 13V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V13'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M17 13V20.1169C17 20.5056 16.576 20.7456 16.2428 20.5457L12.2572 18.1543C12.0989 18.0593 11.9011 18.0593 11.7428 18.1543L7.75725 20.5457C7.42399 20.7456 7 20.5056 7 20.1169V13'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'bullet-large': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='4' fill='black' />
      </Svg>
    ),
  },
  'bullet-small': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='2' fill='black' />
      </Svg>
    ),
  },
  bullet: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='3' fill='black' />
      </Svg>
    ),
  },
  cast: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12.5 19C12.5 13.4772 9.02283 10 3.49998 10M8.49998 19C8.49998 15.6863 6.81369 14 3.49998 14M16 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5.99998C5.2597 5 4.34579 5.4022 3.99998 6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M4 18.5H4.01'
          stroke='black'
          stroke-width='3'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'check-circle': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M15.3759 5.86638C14.3748 5.31421 13.2241 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 10.6803 18.6348 9.44596 18 8.39241'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M9 11L12 14L20 6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'check-double': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M8 13L12 17L21.5 7.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M3 13L7 17'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M9.5 14.5L16.5 7.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'check-square': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M9 11L12 14L20 6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M18 8V16C18 17.1046 17.1046 18 16 18H8C6.89543 18 6 17.1046 6 16V8C6 6.89543 6.89543 6 8 6H15.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  check: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M6 13L10 17L19.5 7.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'circle-small': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='7' stroke='black' stroke-width='2' />
      </Svg>
    ),
  },
  circle: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='9' stroke='black' stroke-width='2' />
      </Svg>
    ),
  },
  clipboard: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M14 7H10C8.89543 7 8 6.10457 8 5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5C16 6.10457 15.1046 7 14 7Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M16 5H17C18.1046 5 19 5.89543 19 7V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V7C5 5.89543 5.89543 5 7 5H7.625'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'cloud-download': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M8 16H6.5C4.567 16 3 14.433 3 12.5C3 12.4188 3.00277 12.3382 3.00821 12.2584C3.00276 12.1729 3 12.0868 3 12C3 9.79086 4.79086 8 7 8C7.41666 8 7.81843 8.0637 8.19612 8.1819C8.7596 6.33975 10.4733 5 12.5 5C14.4623 5 16.1312 6.25598 16.7467 8.00789C16.8305 8.00266 16.9149 8 17 8C19.2091 8 21 9.79086 21 12C21 12.0868 20.9972 12.1729 20.9918 12.2584C20.9972 12.3382 21 12.4188 21 12.5C21 14.433 19.433 16 17.5 16H17H16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 12L12 21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 21L14 19'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 21L10 19'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'cloud-upload': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M8 16H6.5C4.567 16 3 14.433 3 12.5C3 12.4188 3.00277 12.3382 3.00821 12.2584C3.00276 12.1729 3 12.0868 3 12C3 9.79086 4.79086 8 7 8C7.41666 8 7.81843 8.0637 8.19612 8.1819C8.7596 6.33975 10.4733 5 12.5 5C14.4623 5 16.1312 6.25598 16.7467 8.00789C16.8305 8.00266 16.9149 8 17 8C19.2091 8 21 9.79086 21 12C21 12.0868 20.9972 12.1729 20.9918 12.2584C20.9972 12.3382 21 12.4188 21 12.5C21 14.433 19.433 16 17.5 16H17H16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 20L12 11'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 11L14 13'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 11L10 13'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  command: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='9'
          y='9'
          width='6'
          height='6'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M3 6C3 4.34315 4.34315 3 6 3V3C7.65685 3 9 4.34315 9 6V9H6C4.34315 9 3 7.65685 3 6V6Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M21 6C21 4.34315 19.6569 3 18 3V3C16.3431 3 15 4.34315 15 6V9H18C19.6569 9 21 7.65685 21 6V6Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M21 18C21 19.6569 19.6569 21 18 21V21C16.3431 21 15 19.6569 15 18V15H18C19.6569 15 21 16.3431 21 18V18Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M3 18C3 19.6569 4.34315 21 6 21V21C7.65685 21 9 19.6569 9 18V15H6C4.34315 15 3 16.3431 3 18V18Z'
          stroke='black'
          stroke-width='2'
        />
      </Svg>
    ),
  },
  cookie: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='17' cy='11' r='1.5' fill='black' />
        <Circle cx='16' cy='16' r='1.5' fill='black' />
        <Circle cx='10' cy='16' r='1.5' fill='black' />
        <Path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M16.5567 5.83213C19.1902 7.14141 21 9.85936 21 13C21 17.4183 17.4183 21 13 21C8.92021 21 5.55372 17.9461 5.06183 13.9995C6.57082 13.9767 8.33841 12.7518 9 11.5C11 11.5 13 9.99999 13 7.99999C14.5574 8.01351 16 6.99999 16.5567 5.83213Z'
          stroke='black'
          stroke-width='2'
          stroke-linejoin='round'
        />
        <Circle cx='8.5' cy='3.5' r='1.5' fill='black' />
        <Circle cx='5' cy='8' r='1.5' fill='black' />
      </Svg>
    ),
  },
  copy: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='9'
          y='9'
          width='11'
          height='11'
          rx='2'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M5 14.7324C4.4022 14.3866 4 13.7403 4 13V6C4 4.89543 4.89543 4 6 4H13C13.7403 4 14.3866 4.4022 14.7324 5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  copyright: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='9' stroke='black' stroke-width='2' />
        <Path
          d='M16 9C15.0878 7.78565 13.6357 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C13.6356 17 15.0878 16.2147 16 15.0005'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  crop: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M7 3V4M21 17H8C7.44772 17 7 16.5523 7 16V10V7'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M3 7L16 7C16.5523 7 17 7.44772 17 8V14M17 21V17'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  crosshair: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='7' stroke='black' stroke-width='2' />
        <Path
          d='M12 3V8'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M21 12L16 12'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M12 21V16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M3 12H8'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  divide: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M20 12L4 12'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Circle cx='12' cy='6' r='2' stroke='black' stroke-width='2' />
        <Circle cx='12' cy='18' r='2' stroke='black' stroke-width='2' />
      </Svg>
    ),
  },
  download: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M7.625 16C6.02469 14.765 5 12.8672 5 10.739C5 7.01717 8.13401 4 12 4C15.866 4 19 7.01717 19 10.739C19 12.8672 17.9753 14.765 16.375 16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M12 10L12 21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 21L14 19'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 21L10 19'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  earth: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='9' stroke='black' stroke-width='2' />
        <Path
          d='M6 5.5V8.5C6 9.32843 6.67157 10 7.5 10V10C8.32843 10 9 10.6716 9 11.5V14.1716C9 14.702 9.21071 15.2107 9.58579 15.5858L10.5858 16.5858C11.3668 17.3668 12.6332 17.3668 13.4142 16.5858L16.5858 13.4142C17.3668 12.6332 17.3668 11.3668 16.5858 10.5858L15.4142 9.41421C14.6332 8.63316 14.6332 7.36684 15.4142 6.58579L17 5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'edit-2': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4.55059 14.4776L14.4341 4.59411C14.4341 4.59411 16.0282 3.00001 17.6223 4.59412C19.2164 6.18823 17.6223 7.78234 17.6223 7.78234L7.73883 17.6658L3.59412 18.6223L4.55059 14.4776Z'
          stroke='black'
          stroke-width='2'
          stroke-linejoin='round'
        />
        <Path
          d='M12 19H20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'edit-3': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4.7825 15.182L16.0962 3.86828C16.0962 3.86828 17.5104 2.45406 19.2782 4.22184C21.046 5.98961 19.6318 7.40382 19.6318 7.40382L8.31804 18.7175L3.72184 19.7782L4.7825 15.182Z'
          stroke='black'
          stroke-width='2'
          stroke-linejoin='round'
        />
        <Path
          d='M14.3284 5.63605L17.864 9.17158'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M4.7825 15.182L7.25738 16.2426L8.31804 18.7175'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  edit: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4.78248 15.182L15.7426 4.22182C15.7426 4.22182 17.5104 2.45406 19.2782 4.22183C21.0459 5.9896 19.2782 7.75737 19.2782 7.75737L8.31803 18.7175L3.72182 19.7782L4.78248 15.182Z'
          stroke='black'
          stroke-width='2'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'external-link': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M11.5 12.5L20 4'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M18 12V16C18 17.1046 17.1046 18 16 18H8C6.89543 18 6 17.1046 6 16V8C6 6.89543 6.89543 6 8 6H12'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M20 4V7.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M20 4H16.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'face-id': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4 7V5C4 4.44772 4.44772 4 5 4H7'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M20 7V5C20 4.44772 19.5523 4 19 4H17'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M4 17V19C4 19.5523 4.44772 20 5 20H7'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M20 17V19C20 19.5523 19.5523 20 19 20H17'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Circle cx='8' cy='9.5' r='1.5' fill='black' />
        <Circle cx='16' cy='9.5' r='1.5' fill='black' />
        <Path
          d='M15.4649 14C14.7732 15.1956 13.4806 16 12 16C10.5194 16 9.22674 15.1956 8.53513 14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M12 10V11.5858C12 11.851 11.8946 12.1054 11.7071 12.2929L11.5 12.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  feed: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='6.5' cy='17.5' r='1.5' stroke='black' stroke-width='2' />
        <Path
          d='M5 10H6C10.4183 10 14 13.5817 14 18V19'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M5 4H6.00001C13.732 4 20 10.268 20 18V19'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  filter: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M14 17.5858V12.3028C14 12.1054 14.0584 11.9123 14.1679 11.7481L18.9635 4.5547C19.4066 3.89015 18.9302 3 18.1315 3H5.86852C5.06982 3 4.59343 3.89015 5.03647 4.5547L9.83205 11.7481C9.94156 11.9123 10 12.1054 10 12.3028V19.5858C10 20.4767 11.0771 20.9229 11.7071 20.2929L13.7071 18.2929C13.8946 18.1054 14 17.851 14 17.5858Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  fingerprint: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12 14V21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M9 20V19M15 14V13.2427C15 12.447 14.6839 11.684 14.1213 11.1213C12.9497 9.94977 11.0503 9.94977 9.87868 11.1213C9.31607 11.684 9 12.447 9 13.2427V16M15 20V17.25M6 19V12.4853C6 11.4964 6.24411 10.5328 6.69895 9.6748M18 19V14.5M3 16V13.2427M21 16V12.1591C21 11.2498 20.8624 10.3541 20.5982 9.5M18.5658 6.00358C16.9118 4.23931 14.7245 3.29573 12.5 3.17285M9 7.28744C11.2946 5.96117 14.2796 6.27958 16.2426 8.24267C17.0405 9.04055 17.5905 10.04 17.8429 11.1213M3.57264 9C3.98581 7.89782 4.61479 6.87758 5.43417 6.00358C6.32678 5.05146 7.37472 4.33836 8.5 3.86428'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  flag: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M6 21L6 3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M6 14.058C6 14.058 7.96653 12.4086 12.3132 13.5732C16.6599 14.7379 18.5 13.058 18.5 13.058'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M6 5C6 5 7.96653 3.35054 12.3132 4.51522C16.6599 5.67991 18.5 4 18.5 4'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M18.5 4.05801V13.058'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'full-screen': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4 4V8'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M4 4L8 4'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M20 20L20 16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M20 20L16 20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M4 20L8 20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M20 4L16 4'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M4 20L4 16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M20 4L20 8'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M4 4L20 20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M20 4L4 20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  gift: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='4'
          y='7'
          width='16'
          height='5'
          stroke='black'
          stroke-width='2'
          stroke-linejoin='round'
        />
        <Rect
          x='5'
          y='12'
          width='14'
          height='8'
          stroke='black'
          stroke-width='2'
          stroke-linejoin='round'
        />
        <Path
          d='M15.5 3.5C16.7916 2.20841 19 3.12317 19 4.94975V4.94975C19 6.08207 18.0821 7 16.9497 7H12L15.5 3.5Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M8.5 3.5C7.20841 2.20841 5 3.12317 5 4.94975V4.94975C5 6.08207 5.91793 7 7.05025 7H12L8.5 3.5Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M12 7V20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  globe: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='9' stroke='black' stroke-width='2' />
        <Path
          d='M3 12H21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 3L9.698 6.45299C7.45866 9.81199 7.45866 14.188 9.698 17.547L12 21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 3L14.302 6.453C16.5413 9.81199 16.5413 14.188 14.302 17.547L12 21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'heart-filled': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M3 8.83333C3 15.2333 11 19.5 12 19.5C13 19.5 21 15.2333 21 8.83333C21 5.63333 18.75 4 16.5 4C14.25 4 12 6.5 12 6.5C12 6.5 9.75 4 7.5 4C5.25 4 3 5.63333 3 8.83333Z'
          fill='black'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  heart: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M3 8.83333C3 15.2333 11 19.5 12 19.5C13 19.5 21 15.2333 21 8.83333C21 5.63333 18.75 4 16.5 4C14.25 4 12 6.5 12 6.5C12 6.5 9.75 4 7.5 4C5.25 4 3 5.63333 3 8.83333Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  image: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='4'
          y='4'
          width='16'
          height='16'
          rx='3'
          stroke='black'
          stroke-width='2'
        />
        <Circle cx='9' cy='9' r='2' stroke='black' stroke-width='2' />
        <Path
          d='M6.5 19.5L16 10L20 14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  indent: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12 6L20 6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 12L20 12'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 18L20 18'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M4 5L8 9L4 13'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  info: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='9' stroke='black' stroke-width='2' />
        <Path
          d='M12 16V12'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M12 8.5H12.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  key: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='8' cy='16' r='4' stroke='black' stroke-width='2' />
        <Path
          d='M11 13L20 4'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M18 6L20 8M17 12L14.5 9.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  layers: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4.02231 8.1686L11.7911 4.59606C11.9237 4.53509 12.0763 4.53509 12.2089 4.59606L19.9777 8.1686C20.3713 8.34963 20.3641 8.91153 19.9659 9.08237L12.1971 12.4154C12.0713 12.4694 11.9287 12.4694 11.8029 12.4154L4.03407 9.08237C3.63589 8.91153 3.62865 8.34963 4.02231 8.1686Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M4 12.5L11.5992 15.8246C11.8547 15.9364 12.1453 15.9364 12.4008 15.8246L20 12.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M4 16L11.5992 19.3246C11.8547 19.4364 12.1453 19.4364 12.4008 19.3246L20 16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'link-2': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M10 8.5H6.5C4.567 8.5 3 10.067 3 12C3 13.933 4.567 15.5 6.5 15.5H10'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M14 8.5H17.5C19.433 8.5 21 10.067 21 12C21 13.933 19.433 15.5 17.5 15.5H14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M9 12L15 12'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  link: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M13.693 12.106C13.55 11.8067 13.3545 11.5261 13.1066 11.2782L12.3995 10.5711C11.2279 9.39952 9.32842 9.39952 8.15685 10.5711L4.62131 14.1066C3.44974 15.2782 3.44974 17.1777 4.62131 18.3493L5.32842 19.0564C6.49999 20.2279 8.39949 20.2279 9.57106 19.0564L10.6317 17.9957L11.3388 17.2886'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M10.3989 12.5717C10.5419 12.871 10.7373 13.1516 10.9853 13.3995L11.6924 14.1066C12.8639 15.2782 14.7634 15.2782 15.935 14.1066L19.4705 10.5711C20.6421 9.39949 20.6421 7.5 19.4705 6.32843L18.7634 5.62132C17.5919 4.44975 15.6924 4.44975 14.5208 5.62132L13.4601 6.68198L12.753 7.38909'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  list: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4.005 5.995L4.005 6.005'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M4.005 11.995L4.005 12.005'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M4.005 17.995L4.005 18.005'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M8 6H20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M8 12H20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M8 18H20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  loading: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12 3V7'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M12 17V21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M21 12H17'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M15.5 8.5L18.5 5.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M15.5 15.5L18.5 18.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M8.50001 15.5L5.49998 18.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M5.5 5.5L8.5 8.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M7 12L3 12'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  lock: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='6'
          y='12'
          width='12'
          height='9'
          rx='2'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M8 12C8 12 8 9 8 7C8 5 10 4 12 4C14 4 16 5 16 7C16 9 16 12 16 12'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'log-in': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M8 7.5V7C8 5.34315 9.34315 4 11 4H15C16.6569 4 18 5.34315 18 7V17C18 18.6569 16.6569 20 15 20H11C9.34315 20 8 18.6569 8 17V16.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M3 12H14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M14 12L12 14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M14 12L12 10'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'log-out': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M16 16.5V17C16 18.6569 14.6569 20 13 20L9 20C7.34314 20 6 18.6569 6 17L6 7C6 5.34315 7.34315 4 9 4L13 4C14.6569 4 16 5.34315 16 7L16 7.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M11 12L21 12'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M21 12L19 14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M21 12L19 10'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  magnifier: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='10' cy='10' r='7' stroke='black' stroke-width='2' />
        <Path
          d='M15 16L20 21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  maximize: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4 4V8'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M4 4L8 4'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M20 20L20 16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M20 20L16 20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M4 20L8 20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M20 4L16 4'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M4 20L4 16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M20 4L20 8'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'menu-2': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4 6H20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M4 12H20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M4 18H14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'menu-3': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4 6H20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M4 12H20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M10 18H20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  menu: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4 6H20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M4 12H20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M4 18H20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  minimize: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M8 8V4'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M8 8L4 8'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M16 16L16 20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M16 16L20 16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M8 16L4 16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M16 8L20 8'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M8 16L8 20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M16 8L16 4'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  minus: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4.92893 12H19.0711'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'more-vertical': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='6' r='2' fill='black' />
        <Circle cx='12' cy='12' r='2' fill='black' />
        <Circle cx='12' cy='18' r='2' fill='black' />
      </Svg>
    ),
  },
  more: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='2' fill='black' />
        <Circle cx='6' cy='12' r='2' fill='black' />
        <Circle cx='18' cy='12' r='2' fill='black' />
      </Svg>
    ),
  },
  move: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M2.68628 12L5.51471 14.8284'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M2.68628 12L5.51471 9.17157'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M21.3137 12L18.4853 9.17157'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M21.3137 12L18.4853 14.8284'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M12 21.3137L14.8284 18.4853'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M12 2.68629L9.17157 5.51472'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M12 21.3137L9.17157 18.4853'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M12 2.68629L14.8284 5.51472'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M4 12L20 12'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M12 4.00001L12 21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  numpad: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='5' cy='5' r='2' fill='black' />
        <Circle cx='12' cy='5' r='2' fill='black' />
        <Circle cx='19' cy='5' r='2' fill='black' />
        <Circle cx='12' cy='12' r='2' fill='black' />
        <Circle cx='5' cy='12' r='2' fill='black' />
        <Circle cx='19' cy='12' r='2' fill='black' />
        <Circle cx='12' cy='19' r='2' fill='black' />
      </Svg>
    ),
  },
  outdent: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12 6L20 6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 12L20 12'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 18L20 18'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M8 5L4 9L8 13'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  paperclip: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M14.0139 7.85702L7.96787 13.8961C7.96787 13.8961 6.68568 15.1852 7.98399 16.4835C9.2823 17.7818 10.5679 16.4962 10.5679 16.4962L18.9325 8.06903C18.9325 8.06903 20.6317 5.98959 18.2565 3.61438C15.8813 1.23917 13.8408 2.88099 13.8408 2.88099L4.67361 12.0482C4.67361 12.0482 1.51776 15.1599 5.41269 19.0548C9.30763 22.9498 12.6791 19.5991 12.6791 19.5991L19.2175 13.0607'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  percent: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='7' cy='7' r='2' stroke='black' stroke-width='2' />
        <Circle cx='17' cy='17' r='2' stroke='black' stroke-width='2' />
        <Path
          d='M19 5L5.50002 19'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  permille: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='6' cy='7' r='2' stroke='black' stroke-width='2' />
        <Circle cx='14' cy='17' r='2' stroke='black' stroke-width='2' />
        <Path
          d='M18.5 15.063C18.6598 15.0219 18.8274 15 19 15C20.1046 15 21 15.8954 21 17C21 18.1046 20.1046 19 19 19C18.8274 19 18.6598 18.9781 18.5 18.937'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M18 5L4.5 19'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  plus: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12 4.92892V19.0711'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M4.92893 12H19.0711'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'question-circle': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='9' stroke='black' stroke-width='2' />
        <Path
          d='M9.5 9.5C9.66667 8.83333 10.4 7.5 12 7.5C14 7.5 14.5 9 14.5 9.5C14.5 10 14.5 10.5 13 12C12.555 12.445 12.308 12.9891 12.1709 13.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M12 17H12.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  rearrange: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M20 7H13'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M20 12L4 12'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M20 17H13'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M8 8L6 6L4 8'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M8 16L6 18L4 16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'rectangle-landscape': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='3'
          y='5'
          width='18'
          height='14'
          rx='3'
          stroke='black'
          stroke-width='2'
        />
      </Svg>
    ),
  },
  'rectangle-portrait': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='5'
          y='3'
          width='14'
          height='18'
          rx='3'
          stroke='black'
          stroke-width='2'
        />
      </Svg>
    ),
  },
  'refresh-2': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M19.5 10H15.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M19.5 10V6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M18.7101 10C17.8496 7.10851 15.171 5 12 5C8.82899 5 6.15044 7.10851 5.28989 10'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M5 14H9'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M5 14V18'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M5.78987 14C6.65042 16.8915 9.32897 19 12.5 19C15.671 19 18.3496 16.8915 19.2101 14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  refresh: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M19.5 10H15.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M19.5 10V6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M18.7101 10C17.8496 7.10851 15.171 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.171 19 17.8496 16.8915 18.7101 14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'resize-diagonal-down-up': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M20 4V8'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M20 4L16 4'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M4 20L4 16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M4 20L8 20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M20 4L4 20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'resize-diagonal-up-down': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4 4V8'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M4 4L8 4'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M20 20L20 16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M20 20L16 20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M4 4L20 20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'resize-horizontal': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M21 12H2.99999'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M3 12L6.5 8.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M3 12L6.5 15.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M21 12L17.5 8.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M21 12L17.5 15.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'resize-vertical': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12 21L12 3.00001'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 3L15.5 6.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 3L8.5 6.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 21L15.5 17.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 21L8.5 17.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  save: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M7 20H17C18.6569 20 20 18.6569 20 17V8.82843C20 8.29799 19.7893 7.78929 19.4142 7.41421L16.5858 4.58579C16.2107 4.21071 15.702 4 15.1716 4H7C5.34315 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M8 12V17H16V12H8Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M15 5V8H9V4'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  scissors: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='6' cy='6' r='2' stroke='black' stroke-width='2' />
        <Circle cx='6' cy='18' r='2' stroke='black' stroke-width='2' />
        <Path
          d='M8 8L9.5 9.5M19 19L12 12'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M8 16L19 5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'screen-sharing': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='7'
          y='8'
          width='13'
          height='11'
          rx='2'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M4 14V7C4 5.89543 4.89543 5 6 5H16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  settings: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M10.2 4.14174C10.2 3.51118 10.7112 3 11.3417 3H12.6583C13.2888 3 13.8 3.51118 13.8 4.14174V4.14174C13.8 4.6627 14.1567 5.10872 14.6413 5.29991C14.6797 5.31504 14.7178 5.33048 14.7558 5.34624C15.3043 5.57368 15.958 5.49641 16.3779 5.07654V5.07654C16.8975 4.55693 17.7491 4.54775 18.2687 5.06736L18.9326 5.73127C19.4522 6.25088 19.4431 7.10252 18.9235 7.62213V7.62213C18.5036 8.04199 18.4263 8.69566 18.6538 9.24415C18.6695 9.28217 18.685 9.32034 18.7001 9.35868C18.8913 9.84329 19.3373 10.2 19.8583 10.2V10.2C20.4888 10.2 21 10.7112 21 11.3417V12.6583C21 13.2888 20.4888 13.8 19.8583 13.8V13.8C19.3373 13.8 18.8913 14.1567 18.7001 14.6413C18.685 14.6797 18.6695 14.7178 18.6538 14.7558C18.4263 15.3043 18.5036 15.958 18.9235 16.3779V16.3779C19.4431 16.8975 19.4522 17.7491 18.9326 18.2687L18.2687 18.9326C17.7491 19.4522 16.8975 19.4431 16.3779 18.9235V18.9235C15.958 18.5036 15.3043 18.4263 14.7558 18.6538C14.7178 18.6695 14.6797 18.685 14.6413 18.7001C14.1567 18.8913 13.8 19.3373 13.8 19.8583V19.8583C13.8 20.4888 13.2888 21 12.6583 21H11.3417C10.7112 21 10.2 20.4888 10.2 19.8583V19.8583C10.2 19.3373 9.84329 18.8913 9.35868 18.7001C9.32034 18.685 9.28217 18.6695 9.24415 18.6538C8.69566 18.4263 8.04199 18.5036 7.62213 18.9235V18.9235C7.10252 19.4431 6.2509 19.4522 5.73129 18.9326L5.06737 18.2687C4.54776 17.7491 4.55694 16.8975 5.07654 16.3779V16.3779C5.49641 15.958 5.57368 15.3043 5.34624 14.7558C5.33048 14.7178 5.31504 14.6797 5.29991 14.6413C5.10872 14.1567 4.6627 13.8 4.14174 13.8V13.8C3.51118 13.8 3 13.2888 3 12.6583L3 11.3417C3 10.7112 3.51118 10.2 4.14174 10.2V10.2C4.6627 10.2 5.10872 9.84329 5.29991 9.35868C5.31504 9.32034 5.33048 9.28217 5.34625 9.24415C5.57368 8.69566 5.49641 8.04199 5.07654 7.62213V7.62213C4.55693 7.10252 4.54776 6.25088 5.06737 5.73127L5.73128 5.06736C6.25089 4.54775 7.10252 4.55693 7.62213 5.07654V5.07654C8.042 5.49641 8.69566 5.57368 9.24416 5.34624C9.28217 5.33048 9.32034 5.31504 9.35868 5.29991C9.84329 5.10872 10.2 4.6627 10.2 4.14174V4.14174Z'
          stroke='black'
          stroke-width='2'
        />
        <Circle cx='12' cy='12' r='2' stroke='black' stroke-width='2' />
      </Svg>
    ),
  },
  share: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M15.8182 10C17.0232 10 18 10.8954 18 12V19C18 20.1046 17.0232 21 15.8182 21H8.18182C6.97683 21 6 20.1046 6 19V12C6 10.8954 6.97683 10 8.18182 10'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 15V3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 3L9.5 5.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 3L14.5 5.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'square-small': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='6'
          y='6'
          width='12'
          height='12'
          rx='2'
          stroke='black'
          stroke-width='2'
        />
      </Svg>
    ),
  },
  square: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='4'
          y='4'
          width='16'
          height='16'
          rx='3'
          stroke='black'
          stroke-width='2'
        />
      </Svg>
    ),
  },
  'star-filled': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M11.0446 4.09181C11.335 3.15214 12.665 3.15213 12.9554 4.09181L14.379 8.69849C14.5084 9.1175 14.8958 9.40325 15.3344 9.40325H20.0437C21.0002 9.40325 21.4109 10.6172 20.6508 11.1979L16.7559 14.1733C16.4229 14.4277 16.2838 14.8628 16.4076 15.2632L17.8747 20.0108C18.1621 20.941 17.0859 21.6918 16.3122 21.1007L12.6071 18.2703C12.2487 17.9965 11.7513 17.9965 11.3929 18.2703L7.68782 21.1007C6.91413 21.6918 5.83788 20.941 6.12533 20.0108L7.59243 15.2632C7.71616 14.8628 7.5771 14.4277 7.24407 14.1733L3.34923 11.1979C2.58912 10.6172 2.99976 9.40325 3.9563 9.40325H8.66561C9.10417 9.40325 9.49155 9.1175 9.62103 8.69849L11.0446 4.09181Z'
          fill='black'
          stroke='black'
          stroke-width='2'
        />
      </Svg>
    ),
  },
  'star-half-filled': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M11.0446 4.09181C11.335 3.15214 12.665 3.15213 12.9554 4.09181L14.379 8.69849C14.5084 9.1175 14.8958 9.40325 15.3344 9.40325H20.0437C21.0002 9.40325 21.4109 10.6172 20.6508 11.1979L16.7559 14.1733C16.4229 14.4277 16.2838 14.8628 16.4076 15.2632L17.8747 20.0108C18.1621 20.941 17.0859 21.6918 16.3122 21.1007L12.6071 18.2703C12.2487 17.9965 11.7513 17.9965 11.3929 18.2703L7.68782 21.1007C6.91413 21.6918 5.83788 20.941 6.12533 20.0108L7.59243 15.2632C7.71616 14.8628 7.5771 14.4277 7.24407 14.1733L3.34923 11.1979C2.58912 10.6172 2.99976 9.40325 3.9563 9.40325H8.66561C9.10417 9.40325 9.49155 9.1175 9.62103 8.69849L11.0446 4.09181Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M12 3.19354C11.7974 3.19354 11.5949 3.311 11.5223 3.54592L9.74821 9.28696C9.68347 9.49646 9.48978 9.63934 9.2705 9.63934H3.47815C2.99988 9.63934 2.79456 10.2463 3.17462 10.5367L7.90319 14.149C8.0697 14.2762 8.13923 14.4937 8.07737 14.6939L6.28151 20.5054C6.13779 20.9705 6.67591 21.3459 7.06276 21.0504L11.6965 17.5105C11.7861 17.4421 11.893 17.4079 12 17.4079V3.19354ZM21 9.9931C21.0296 10.0894 21.0313 10.1943 21 10.2928V9.9931Z'
          fill='black'
        />
      </Svg>
    ),
  },
  star: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M11.0446 4.09181C11.335 3.15214 12.665 3.15213 12.9554 4.09181L14.379 8.69849C14.5084 9.1175 14.8958 9.40325 15.3344 9.40325H20.0437C21.0002 9.40325 21.4109 10.6172 20.6508 11.1979L16.7559 14.1733C16.4229 14.4277 16.2838 14.8628 16.4076 15.2632L17.8747 20.0108C18.1621 20.941 17.0859 21.6918 16.3122 21.1007L12.6071 18.2703C12.2487 17.9965 11.7513 17.9965 11.3929 18.2703L7.68782 21.1007C6.91413 21.6918 5.83788 20.941 6.12533 20.0108L7.59243 15.2632C7.71616 14.8628 7.5771 14.4277 7.24407 14.1733L3.34923 11.1979C2.58912 10.6172 2.99976 9.40325 3.9563 9.40325H8.66561C9.10417 9.40325 9.49155 9.1175 9.62103 8.69849L11.0446 4.09181Z'
          stroke='black'
          stroke-width='2'
        />
      </Svg>
    ),
  },
  'target-dart': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M15.5 3.70591C14.4241 3.25134 13.2414 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 9.58467 20.0485 7.39156 18.5 5.77503'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M13 7.10002C12.6769 7.03443 12.3425 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 10.7045 16.5073 9.52416 15.6992 8.63599'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Circle cx='12' cy='12' r='1' stroke='black' stroke-width='2' />
        <Path
          d='M18.5 5.5V3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M18.5 5.5L21 5.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M12 12L18.5 5.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  target: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='9' stroke='black' stroke-width='2' />
        <Circle cx='12' cy='12' r='5' stroke='black' stroke-width='2' />
        <Circle cx='12' cy='12' r='1' stroke='black' stroke-width='2' />
      </Svg>
    ),
  },
  'toggle-left': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='3'
          y='6'
          width='18'
          height='12'
          rx='6'
          stroke='black'
          stroke-width='2'
        />
        <Circle cx='9' cy='12' r='3' stroke='black' stroke-width='2' />
      </Svg>
    ),
  },
  'toggle-right': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='3'
          y='6'
          width='18'
          height='12'
          rx='6'
          stroke='black'
          stroke-width='2'
        />
        <Circle cx='15' cy='12' r='3' stroke='black' stroke-width='2' />
      </Svg>
    ),
  },
  trash: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M6 8V19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V8'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M5 7H19'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M9 7V4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V7'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M10 12V16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M14 12V16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  unlock: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='6'
          y='12'
          width='12'
          height='9'
          rx='2'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M8 11C8 11 8 8 8 6C8 4 10 3 12 3C14 3 16 4 16 6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  upload: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M7.625 16C6.02469 14.765 5 12.8672 5 10.739C5 7.01717 8.13401 4 12 4C15.866 4 19 7.01717 19 10.739C19 12.8672 17.9753 14.765 16.375 16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M12 20L12 10'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 10L14 12'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 10L10 12'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'x-circle': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M9 9L15 15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M9 15L15 9'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Circle cx='12' cy='12' r='9' stroke='black' stroke-width='2' />
      </Svg>
    ),
  },
  x: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M7 7L17 17'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M7 17L17 7'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'zoom-in': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M15 16L20 21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M10 8V12'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M12 10L8 10'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Circle cx='10' cy='10' r='7' stroke='black' stroke-width='2' />
      </Svg>
    ),
  },
  'zoom-out': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M15 16L20 21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M12 10L8 10'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Circle cx='10' cy='10' r='7' stroke='black' stroke-width='2' />
      </Svg>
    ),
  },
  'git-branch': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M3 8H5.5M21 8H10.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M8 10V10C8 13.866 11.134 17 15 17H16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Circle cx='18' cy='17' r='2' stroke='black' stroke-width='2' />
        <Circle cx='8' cy='8' r='2' stroke='black' stroke-width='2' />
      </Svg>
    ),
  },
  'git-commit': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M3 12H9M21 12H15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Circle cx='12' cy='12' r='3' stroke='black' stroke-width='2' />
      </Svg>
    ),
  },
  'git-merge': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M21 8H18.5M3 8H13.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M14 8V8C9.58172 8 6 11.5817 6 16V16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Circle cx='6' cy='17' r='2' stroke='black' stroke-width='2' />
        <Circle
          r='2'
          transform='matrix(-1 0 0 1 16 8)'
          stroke='black'
          stroke-width='2'
        />
      </Svg>
    ),
  },
  'git-pull-request': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M21 7H18.5M3 7H13.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M16 12V13C16 15.2091 14.2091 17 12 17H8'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Circle
          r='2'
          transform='matrix(-1 0 0 1 6 17)'
          stroke='black'
          stroke-width='2'
        />
        <Circle
          r='2'
          transform='matrix(-1 0 0 1 16 7)'
          stroke='black'
          stroke-width='2'
        />
      </Svg>
    ),
  },
  'location-pin': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12 3C8.13401 3 5 5.5 5 10C5 14.5 12 20.5 12 20.5C12 20.5 19 14.5 19 10C19 5.5 15.866 3 12 3Z'
          stroke='black'
          stroke-width='2'
        />
        <Circle cx='12' cy='10' r='2' stroke='black' stroke-width='2' />
      </Svg>
    ),
  },
  map: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M7.39955 4.24018L4.25722 5.49711C3.4979 5.80084 3 6.53626 3 7.35407V17.0459C3 18.4609 4.42905 19.4284 5.74278 18.9029L7.39955 18.2402C7.7899 18.084 8.21953 18.0549 8.6274 18.1568L15.3726 19.8432C15.7805 19.9451 16.2101 19.916 16.6005 19.7598L19.7428 18.5029C20.5021 18.1992 21 17.4637 21 16.6459V6.95407C21 5.53914 19.5709 4.57162 18.2572 5.09711L16.6005 5.75982C16.2101 5.91596 15.7805 5.94512 15.3726 5.84315L8.6274 4.15685C8.21953 4.05488 7.7899 4.08404 7.39955 4.24018Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M8 5V17.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M16 6L16 19.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'navigation-2': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4.00001 9.99999L20 4L14 20L11.5 12.5L4.00001 9.99999Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  navigation: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M5 20L12 4L19 20L12 16L5 20Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  apple: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M8.33262 7.19423C8.86488 7.19425 9.50714 7.30425 10.2594 7.52424C11.0188 7.74425 11.5226 7.85425 11.771 7.85424C12.0904 7.85425 12.612 7.73006 13.3359 7.48165C14.0598 7.23328 14.6878 7.10908 15.2201 7.10907C16.093 7.10908 16.8701 7.34328 17.5514 7.81166C17.9346 8.08135 18.3143 8.44684 18.6905 8.90812C18.1227 9.39072 17.7075 9.82008 17.445 10.1962C16.9695 10.8775 16.7317 11.6298 16.7317 12.453C16.7317 13.3543 16.9837 14.1669 17.4875 14.8908C17.9914 15.6146 18.5662 16.0724 19.2121 16.264C18.9424 17.1369 18.4953 18.0489 17.8708 18.9998C16.9269 20.4263 15.9901 21.1395 15.0604 21.1395C14.6914 21.1395 14.1804 21.0224 13.5275 20.7882C12.8817 20.554 12.3352 20.4369 11.8881 20.4369C11.441 20.4369 10.9194 20.5576 10.3233 20.7989C9.73424 21.0473 9.25521 21.1715 8.88618 21.1715C7.77197 21.1715 6.67905 20.2276 5.60743 18.3398C4.53581 16.4734 4 14.6424 4 12.8469C4 11.1791 4.40807 9.82008 5.22421 8.76973C6.04744 7.71941 7.08357 7.19425 8.33262 7.19423Z'
          stroke='black'
          stroke-width='2'
          stroke-linejoin='round'
        />
        <Path
          d='M13.2471 6.45967C13.7033 6.00344 14.0367 5.50858 14.2473 4.97511C14.4775 4.39187 14.4613 3.54287 14.5 3.04834C13.2436 3.33614 12.3416 3.8696 11.7941 4.64872C11.2536 5.42786 10.9764 6.35089 10.9623 7.41779C11.4607 7.37569 11.8327 7.31602 12.0784 7.2388C12.4644 7.10545 12.854 6.84574 13.2471 6.45967Z'
          stroke='black'
          stroke-width='2'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  dribbble: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle
          cx='12'
          cy='12'
          r='9'
          transform='rotate(75 12 12)'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M9.67064 3.30666C9.67064 3.30666 12.4607 5.99182 13.4415 9.65217C14.6674 14.2276 14.3294 20.6933 14.3294 20.6933'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M18.5 5.99998C18.5 5.99998 17 8.56216 13.5 9.49998C9.27408 10.6323 4 9.80932 4 9.80932'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M20.5 14C20.5 14 17.1364 12.5863 14 13.5C9.77409 14.6323 5.63639 18.1637 5.63639 18.1637'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  facebook: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='4'
          y='4'
          width='16'
          height='16'
          rx='3'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M11.5 20V11V10C11.5 8.89543 12.3954 8 13.5 8H15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M10 12.5H14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  figma: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M6 18C6 16.3431 7.34315 15 9 15H12V18C12 19.6569 10.6569 21 9 21V21C7.34315 21 6 19.6569 6 18V18Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M6 12C6 10.3431 7.34315 9 9 9H12V15H9C7.34315 15 6 13.6569 6 12V12Z'
          stroke='black'
          stroke-width='2'
        />
        <Rect
          x='12'
          y='9'
          width='6'
          height='6'
          rx='3'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M6 6C6 4.34315 7.34315 3 9 3H12V9H9C7.34315 9 6 7.65685 6 6V6Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M12 3H15C16.6569 3 18 4.34315 18 6V6C18 7.65685 16.6569 9 15 9H12V3Z'
          stroke='black'
          stroke-width='2'
        />
      </Svg>
    ),
  },
  framer: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M6 3H18V9H6V15H18L6 3Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M6 15L12 21V15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  github: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M9.60256 18.4318C5.24359 19.7159 5.24359 16.2917 3.5 15.8637M14.4051 21V17.6871C14.4378 17.2789 14.3817 16.8685 14.2404 16.4833C14.0991 16.0981 13.8759 15.7468 13.5856 15.4528C16.3231 15.1532 19.2 14.1345 19.2 9.46044C19.1998 8.26524 18.7316 7.11588 17.8923 6.25025C18.2897 5.20459 18.2616 4.04878 17.8138 3.02294C17.8138 3.02294 16.5851 2.72332 14.2051 4.28989C12.2 4 11.8 4 9.80256 4.28989C7.42256 2.72332 6.19385 3.02294 6.19385 3.02294C5.74607 4.04878 5.71797 5.20459 6.11539 6.25025C5.26985 7.12231 4.80117 8.28205 4.80769 9.48612C4.80769 14.1259 7.68461 15.1446 10.4221 15.4785C10.1352 15.7695 9.91402 16.1166 9.77283 16.4971C9.63164 16.8776 9.57363 17.2831 9.60256 17.6871V21'
          stroke='black'
          stroke-width='1.7121'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  google: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M13.5 12H19C19 15.866 15.9952 19 12 19C8.00483 19 5 15.866 5 12C5 8.13401 8.00483 5 12 5C13.6164 5 15.0979 5.52573 16.3192 6.4'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  instagram: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='4'
          y='4'
          width='16'
          height='16'
          rx='4'
          stroke='black'
          stroke-width='2'
        />
        <Circle cx='12' cy='12' r='3' stroke='black' stroke-width='2' />
        <Path
          d='M16.01 8H16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  linkedin: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4.5 11C4.5 10.4477 4.94772 10 5.5 10H6.5C7.05228 10 7.5 10.4477 7.5 11V19C7.5 19.5523 7.05228 20 6.5 20H5.5C4.94772 20 4.5 19.5523 4.5 19V11Z'
          stroke='black'
          stroke-width='2'
        />
        <Rect
          x='4.5'
          y='4'
          width='3'
          height='3'
          rx='1.5'
          stroke='black'
          stroke-width='2'
        />
        <Path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M13.7955 14.0853C13.4885 14.8158 13.4874 15.6576 13.4956 15.8753L13.4956 15.8771C13.4974 15.9232 13.5 15.993 13.5 16.0709V18.5C13.5 19.3284 12.8284 20 12 20C11.1716 20 10.5 19.3284 10.5 18.5V16.0709C10.5 16.0552 10.4995 16.0363 10.4977 15.988C10.4847 15.6417 10.4648 14.2676 11.0297 12.9232C11.3207 12.2307 11.7923 11.4847 12.5569 10.9124C13.3379 10.3276 14.324 10 15.5 10C16.676 10 17.6621 10.3276 18.4431 10.9124C19.2077 11.4847 19.6793 12.2307 19.9703 12.9232C20.5352 14.2676 20.5153 15.6417 20.5023 15.988C20.5005 16.0363 20.5 16.0552 20.5 16.0709V18.5C20.5 19.3284 19.8284 20 19 20C18.1716 20 17.5 19.3284 17.5 18.5V16.0709C17.5 15.993 17.5026 15.9232 17.5044 15.877L17.5044 15.8753C17.5126 15.6576 17.5115 14.8158 17.2046 14.0853C17.0597 13.7405 16.8728 13.4843 16.6452 13.3139C16.434 13.1558 16.0944 13 15.5 13C14.9056 13 14.566 13.1558 14.3548 13.3139C14.1272 13.4843 13.9404 13.7405 13.7955 14.0853Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  slack: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M3 10C3 8.89543 3.89543 8 5 8H10C11.1046 8 12 8.89543 12 10V12H5C3.89543 12 3 11.1046 3 10V10Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M21 14C21 15.1046 20.1046 16 19 16H14C12.8954 16 12 15.1046 12 14V12H19C20.1046 12 21 12.8954 21 14V14Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M10 21C8.89543 21 8 20.1046 8 19L8 14C8 12.8954 8.89543 12 10 12L12 12L12 19C12 20.1046 11.1046 21 10 21V21Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M14 3C15.1046 3 16 3.89543 16 5L16 10C16 11.1046 15.1046 12 14 12L12 12L12 5C12 3.89543 12.8954 3 14 3V3Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M7 5.5C7 4.11929 8.11929 3 9.5 3V3C10.8807 3 12 4.11929 12 5.5V8H9.5C8.11929 8 7 6.88071 7 5.5V5.5Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M17 18.5C17 19.8807 15.8807 21 14.5 21V21C13.1193 21 12 19.8807 12 18.5V16H14.5C15.8807 16 17 17.1193 17 18.5V18.5Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M21 9.5C21 8.11929 19.8807 7 18.5 7V7C17.1193 7 16 8.11929 16 9.5V12H18.5C19.8807 12 21 10.8807 21 9.5V9.5Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M3 14.5C3 15.8807 4.11929 17 5.5 17V17C6.88071 17 8 15.8807 8 14.5V12H5.5C4.11929 12 3 13.1193 3 14.5V14.5Z'
          stroke='black'
          stroke-width='2'
        />
      </Svg>
    ),
  },
  twitter: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M21.1 5.00001C20.3165 5.56468 19.349 5.99656 18.4309 6.27902C17.9382 5.70013 17.2833 5.28983 16.5548 5.10361C15.8264 4.91739 15.0596 4.96423 14.3581 5.2378C13.6565 5.51137 13.0542 5.99847 12.6324 6.63322C12.2107 7.26797 11.9899 8.01974 12 8.78686V9.62281C10.5622 9.6609 9.13741 9.33509 7.85264 8.67438C6.56788 8.01368 5.5 7.00001 4.63636 6.03596C4.63636 6.03596 1.13636 13.1562 8.5 16.5C7 17.5 5 18.5 3 18.5C10.3636 22.6798 19.5 18.6134 19.5 9.00002C19.4992 8.76716 19.5 8.00002 19.5 8.00002C20.335 7.15863 20.8225 6.16425 21.1 5.00001Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  youtube: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='3'
          y='5'
          width='18'
          height='14'
          rx='3'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M10 14.1169V9.8831C10 9.49445 10.424 9.25439 10.7572 9.45435L14.2854 11.5713C14.6091 11.7655 14.6091 12.2345 14.2854 12.4287L10.7572 14.5457C10.424 14.7456 10 14.5056 10 14.1169Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'fast-forward': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M13 17.035V6.96496C13 6.55955 13.4571 6.32268 13.7883 6.55648L20.9213 11.5915C21.2035 11.7907 21.2035 12.2093 20.9213 12.4085L13.7883 17.4435C13.4571 17.6773 13 17.4404 13 17.035Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M3 17.035V6.96496C3 6.55955 3.45713 6.32268 3.78834 6.55648L10.9213 11.5915C11.2035 11.7907 11.2035 12.2093 10.9213 12.4085L3.78834 17.4435C3.45713 17.6773 3 17.4404 3 17.035Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'note-2': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='9.5' cy='16.5' r='2.5' stroke='black' stroke-width='2' />
        <Path
          d='M12 16.5V4'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 4C12 4 13.5 5.5 15 7C16.5 8.5 16.5 10.5 16.5 10.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  note: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='6.5' cy='18.5' r='2.5' stroke='black' stroke-width='2' />
        <Circle cx='16.5' cy='16.5' r='2.5' stroke='black' stroke-width='2' />
        <Path
          d='M9 18.5V6.74403C9 6.30242 9.28967 5.9131 9.71265 5.7862L17.7127 3.3862C18.3543 3.19372 19 3.67417 19 4.34403V16.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M9 10L19 7'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  pause: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M14 19V5C14 4.44772 14.4477 4 15 4H17C17.5523 4 18 4.44772 18 5V19C18 19.5523 17.5523 20 17 20H15C14.4477 20 14 19.5523 14 19Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M6 19V5C6 4.44772 6.44772 4 7 4H9C9.55228 4 10 4.44772 10 5V19C10 19.5523 9.55228 20 9 20H7C6.44772 20 6 19.5523 6 19Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  play: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M6 19.1052V4.89478C6 4.50362 6.42891 4.26395 6.76205 4.46895L18.308 11.5742C18.6253 11.7694 18.6253 12.2306 18.308 12.4258L6.76205 19.531C6.42891 19.7361 6 19.4964 6 19.1052Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  repeat: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M5 10V9C5 7.89543 5.89543 7 7 7H20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M20 7L17 4'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M20 7L17 10'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M19 14L19 15C19 16.1046 18.1046 17 17 17H4'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M4 17L7 20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M4 17L7 14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  rewind: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M11.5 17.035V6.96496C11.5 6.55955 11.0429 6.32268 10.7117 6.55648L3.57869 11.5915C3.29647 11.7907 3.29647 12.2093 3.57869 12.4085L10.7117 17.4435C11.0429 17.6773 11.5 17.4404 11.5 17.035Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M21.5 17.035V6.96496C21.5 6.55955 21.0429 6.32268 20.7117 6.55648L13.5787 11.5915C13.2965 11.7907 13.2965 12.2093 13.5787 12.4085L20.7117 17.4435C21.0429 17.6773 21.5 17.4404 21.5 17.035Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  shuffle: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M3.5 16H5.32491C5.76283 16 6.18865 15.8563 6.53699 15.5909L15.963 8.40914C16.3113 8.14373 16.7372 8 17.1751 8L20 8'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M3.5 8H5.32491C5.76283 8 6.18865 8.14373 6.53699 8.40914L8 9.52381M20 16H17.1751C16.7372 16 16.3113 15.8563 15.963 15.5909L11.25 12'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M21 8L19 10'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M21 8L19 6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M21 16L19 14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M21 16L19 18'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'skip-back': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M20 19.1052V4.89478C20 4.50362 19.5711 4.26395 19.238 4.46895L7.69197 11.5742C7.3747 11.7694 7.3747 12.2306 7.69197 12.4258L19.238 19.531C19.5711 19.7361 20 19.4964 20 19.1052Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M4 5V19'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'skip-forward': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4 19.1052V4.89478C4 4.50362 4.42891 4.26395 4.76205 4.46895L16.308 11.5742C16.6253 11.7694 16.6253 12.2306 16.308 12.4258L4.76205 19.531C4.42891 19.7361 4 19.4964 4 19.1052Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M20 5V19'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'volume-high': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4 14V10C4 9.44772 4.44772 9 5 9H6.58579C6.851 9 7.10536 8.89464 7.29289 8.70711L9.29289 6.70711C9.92286 6.07714 11 6.52331 11 7.41421V16.5858C11 17.4767 9.92286 17.9229 9.29289 17.2929L7.29289 15.2929C7.10536 15.1054 6.851 15 6.58579 15H5C4.44772 15 4 14.5523 4 14Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M15 9C15 9 16 10 16 12C16 14 15 15 15 15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M18 7C18 7 19.5 9 19.5 12C19.5 15 18 17 18 17'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'volume-low': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4 14V10C4 9.44772 4.44772 9 5 9H6.58579C6.851 9 7.10536 8.89464 7.29289 8.70711L9.29289 6.70711C9.92286 6.07714 11 6.52331 11 7.41421V16.5858C11 17.4767 9.92286 17.9229 9.29289 17.2929L7.29289 15.2929C7.10536 15.1054 6.851 15 6.58579 15H5C4.44772 15 4 14.5523 4 14Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M15 9C15 9 16 10 16 12C16 14 15 15 15 15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'volume-x': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4 14V10C4 9.44772 4.44772 9 5 9H6.58579C6.851 9 7.10536 8.89464 7.29289 8.70711L9.29289 6.70711C9.92286 6.07714 11 6.52331 11 7.41421V16.5858C11 17.4767 9.92286 17.9229 9.29289 17.2929L7.29289 15.2929C7.10536 15.1054 6.851 15 6.58579 15H5C4.44772 15 4 14.5523 4 14Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M19 10L15 14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M15 10L19 14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  volume: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4 14V10C4 9.44772 4.44772 9 5 9H6.58579C6.851 9 7.10536 8.89464 7.29289 8.70711L9.29289 6.70711C9.92286 6.07714 11 6.52331 11 7.41421V16.5858C11 17.4767 9.92286 17.9229 9.29289 17.2929L7.29289 15.2929C7.10536 15.1054 6.851 15 6.58579 15H5C4.44772 15 4 14.5523 4 14Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  anchor: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M20 13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M4 13L3 14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M4 13L5 14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M20 13L19 14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M20 13L21 14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 20V9'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Circle cx='12' cy='6' r='3' stroke='black' stroke-width='2' />
      </Svg>
    ),
  },
  beer: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4 10V20H6V10H4ZM7 23H15V21H7V23ZM18 20V10H16V20H18ZM15 23C16.6569 23 18 21.6569 18 20H16C16 20.5523 15.5523 21 15 21V23ZM4 20C4 21.6569 5.34315 23 7 23V21C6.44772 21 6 20.5523 6 20H4ZM6 10H7V8H6V10ZM12 10H16V8H12V10ZM10 10V12H12V10H10ZM10 12H9V14H10V12ZM9 12V10H7V12H9ZM9 12H7C7 13.1046 7.89543 14 9 14V12ZM10 12V14C11.1046 14 12 13.1046 12 12H10ZM12 8C10.8954 8 10 8.89543 10 10H12V8ZM7 10V10H9C9 8.89543 8.10457 8 7 8V10ZM18 10C18 8.89543 17.1046 8 16 8V10V10H18ZM6 10V8C4.89543 8 4 8.89543 4 10H6Z'
          fill='black'
        />
        <Path
          d='M6 9C4.89543 9 4 8.10457 4 7C4 5.89543 4.89543 5 6 5C6 3.34315 7.34315 2 9 2C10.2408 2 11.3056 2.75327 11.7622 3.82744C12.1271 3.61907 12.5497 3.5 13 3.5C14.0681 3.5 14.9797 4.16978 15.3378 5.11224C15.545 5.03953 15.7679 5 16 5C17.1046 5 18 5.89543 18 7C18 8.10457 17.1046 9 16 9'
          stroke='black'
          stroke-width='2'
          stroke-linejoin='round'
        />
        <Path
          d='M17 11H19C20.1046 11 21 11.8954 21 13V16C21 17.1046 20.1046 18 19 18H17'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  box: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M11.0195 3.55154C11.6283 3.20908 12.3717 3.20908 12.9805 3.55154L18.9805 6.92654C19.6103 7.28078 20 7.94715 20 8.66969V15.3303C20 16.0529 19.6103 16.7192 18.9805 17.0735L12.9805 20.4485C12.3717 20.7909 11.6283 20.7909 11.0195 20.4485L5.01948 17.0735C4.38972 16.7192 4 16.0529 4 15.3303V8.66969C4 7.94715 4.38972 7.28078 5.01948 6.92654L11.0195 3.55154Z'
          stroke='black'
          stroke-width='2'
          stroke-linejoin='round'
        />
        <Path
          d='M20 8L12 12.5M12 12.5L4 8M12 12.5V20.5'
          stroke='black'
          stroke-width='2'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  brain: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12 5.5L11 5.5L12 5.5ZM12 18.5L13 18.5L12 18.5ZM6.70923 5.12764L6.39315 4.17891L6.70923 5.12764ZM7.12764 4.70923L8.07637 5.02532L7.12764 4.70923ZM4.83711 8.6332L4.1717 7.88672L4.83711 8.6332ZM5.04927 7.99632L6.02958 7.79887L5.04927 7.99632ZM4.12947 14.7038L5.07746 15.0221L4.12947 14.7038ZM4.12947 14.2962L5.07746 13.9779L4.12947 14.2962ZM5.0123 17.7496L6.00743 17.6509L5.0123 17.7496ZM4.29758 12.316L5.17796 12.7903L4.29758 12.316ZM11 5.5L11 18.5L13 18.5L13 5.5L11 5.5ZM9.5 22C11.433 22 13 20.433 13 18.5L11 18.5C11 19.3284 10.3284 20 9.5 20L9.5 22ZM6.92347 20.8689C7.56178 21.5629 8.48058 22 9.5 22L9.5 20C9.06311 20 8.67102 19.8145 8.39552 19.515L6.92347 20.8689ZM4.01718 17.8482C4.18129 19.5039 5.49606 20.8187 7.15178 20.9828L7.34905 18.9926C6.64189 18.9225 6.07752 18.3581 6.00743 17.6509L4.01718 17.8482ZM3 15.5C3 16.5194 3.43711 17.4382 4.13112 18.0765L5.48503 16.6045C5.18549 16.329 5 15.9369 5 15.5L3 15.5ZM3.18148 14.3855C3.06351 14.7368 3 15.112 3 15.5L5 15.5C5 15.3312 5.02749 15.1709 5.07746 15.0221L3.18148 14.3855ZM3 13.5C3 13.888 3.06351 14.2632 3.18148 14.6145L5.07746 13.9779C5.02749 13.8291 5 13.6688 5 13.5L3 13.5ZM3.4172 11.8418C3.15078 12.3363 3 12.902 3 13.5L5 13.5C5 13.2412 5.06469 13.0006 5.17796 12.7903L3.4172 11.8418ZM3 10.5C3 11.098 3.15078 11.6637 3.4172 12.1582L5.17796 11.2097C5.06469 10.9994 5 10.7588 5 10.5L3 10.5ZM4.1717 7.88672C3.45421 8.5263 3 9.46076 3 10.5L5 10.5C5 10.0548 5.19272 9.65584 5.50252 9.37968L4.1717 7.88672ZM4 7.5C4 7.73661 4.02362 7.96872 4.06895 8.19378L6.02958 7.79887C6.01029 7.70309 6 7.60326 6 7.5L4 7.5ZM6.39315 4.17891C5.00384 4.64178 4 5.95236 4 7.5L6 7.5C6 6.83892 6.4283 6.27528 7.02532 6.07637L6.39315 4.17891ZM9.5 2C7.95236 2 6.64178 3.00384 6.17891 4.39315L8.07637 5.02532C8.27528 4.42829 8.83893 4 9.5 4L9.5 2ZM13 5.5C13 3.567 11.433 2 9.5 2L9.5 4C10.3284 4 11 4.67157 11 5.5L13 5.5ZM7.02532 6.07637C7.52048 5.9114 7.9114 5.52048 8.07637 5.02532L6.17891 4.39315C6.21299 4.29087 6.29087 4.21299 6.39315 4.17891L7.02532 6.07637ZM5.50252 9.37968C5.94564 8.98468 6.1464 8.37886 6.02958 7.79887L4.06895 8.19378C4.04588 8.07922 4.083 7.96579 4.1717 7.88672L5.50252 9.37968ZM5.07746 15.0221C5.19114 14.6835 5.19114 14.3165 5.07746 13.9779L3.18148 14.6145C3.15647 14.54 3.15647 14.46 3.18148 14.3855L5.07746 15.0221ZM6.00743 17.6509C5.96769 17.2501 5.7814 16.8771 5.48503 16.6045L4.13112 18.0765C4.06622 18.0168 4.0259 17.9362 4.01718 17.8482L6.00743 17.6509ZM5.17796 12.7903C5.44297 12.2984 5.44297 11.7016 5.17796 11.2097L3.4172 12.1582C3.36322 12.058 3.36322 11.942 3.4172 11.8418L5.17796 12.7903ZM8.39552 19.515C8.12293 19.2186 7.74993 19.0323 7.34905 18.9926L7.15178 20.9828C7.06384 20.9741 6.98316 20.9338 6.92347 20.8689L8.39552 19.515Z'
          fill='black'
        />
        <Path
          d='M12 5.5L13 5.5L12 5.5ZM12 18.5L11 18.5L12 18.5ZM17.2908 5.12764L17.6069 4.17891L17.2908 5.12764ZM16.8724 4.70923L15.9236 5.02532L16.8724 4.70923ZM19.1629 8.6332L19.8283 7.88672L19.1629 8.6332ZM18.9507 7.99632L17.9704 7.79887L18.9507 7.99632ZM19.8705 14.7038L18.9225 15.0221L19.8705 14.7038ZM19.8705 14.2962L18.9225 13.9779L19.8705 14.2962ZM18.9877 17.7496L17.9926 17.6509L18.9877 17.7496ZM19.7024 12.316L18.822 12.7903L19.7024 12.316ZM16.3405 20.1919L17.0765 20.8689L16.3405 20.1919ZM13 5.5L13 18.5L11 18.5L11 5.5L13 5.5ZM14.5 22C12.567 22 11 20.433 11 18.5L13 18.5C13 19.3284 13.6716 20 14.5 20L14.5 22ZM17.0765 20.8689C16.4382 21.5629 15.5194 22 14.5 22L14.5 20C14.9369 20 15.329 19.8145 15.6045 19.515L17.0765 20.8689ZM19.9828 17.8482C19.8187 19.5039 18.5039 20.8187 16.8482 20.9828L16.651 18.9926C17.3581 18.9225 17.9225 18.3581 17.9926 17.6509L19.9828 17.8482ZM21 15.5C21 16.5194 20.5629 17.4382 19.8689 18.0765L18.515 16.6045C18.8145 16.329 19 15.9369 19 15.5L21 15.5ZM20.8185 14.3855C20.9365 14.7368 21 15.112 21 15.5L19 15.5C19 15.3312 18.9725 15.1709 18.9225 15.0221L20.8185 14.3855ZM21 13.5C21 13.888 20.9365 14.2632 20.8185 14.6145L18.9225 13.9779C18.9725 13.8291 19 13.6688 19 13.5L21 13.5ZM20.5828 11.8418C20.8492 12.3363 21 12.902 21 13.5L19 13.5C19 13.2412 18.9353 13.0006 18.822 12.7903L20.5828 11.8418ZM21 10.5C21 11.098 20.8492 11.6637 20.5828 12.1582L18.822 11.2097C18.9353 10.9994 19 10.7588 19 10.5L21 10.5ZM19.8283 7.88672C20.5458 8.5263 21 9.46076 21 10.5L19 10.5C19 10.0548 18.8073 9.65584 18.4975 9.37968L19.8283 7.88672ZM20 7.5C20 7.73661 19.9764 7.96872 19.931 8.19378L17.9704 7.79887C17.9897 7.70309 18 7.60326 18 7.5L20 7.5ZM17.6069 4.17891C18.9962 4.64178 20 5.95236 20 7.5L18 7.5C18 6.83892 17.5717 6.27528 16.9747 6.07637L17.6069 4.17891ZM14.5 2C16.0476 2 17.3582 3.00384 17.8211 4.39315L15.9236 5.02532C15.7247 4.42829 15.1611 4 14.5 4L14.5 2ZM11 5.5C11 3.567 12.567 2 14.5 2L14.5 4C13.6716 4 13 4.67157 13 5.5L11 5.5ZM16.9747 6.07637C16.4795 5.9114 16.0886 5.52048 15.9236 5.02532L17.8211 4.39315C17.787 4.29087 17.7091 4.21299 17.6069 4.17891L16.9747 6.07637ZM18.4975 9.37968C18.0544 8.98468 17.8536 8.37886 17.9704 7.79887L19.931 8.19378C19.9541 8.07922 19.917 7.96579 19.8283 7.88672L18.4975 9.37968ZM18.9225 15.0221C18.8089 14.6835 18.8089 14.3165 18.9225 13.9779L20.8185 14.6145C20.8435 14.54 20.8435 14.46 20.8185 14.3855L18.9225 15.0221ZM17.9926 17.6509C18.0323 17.2501 18.2186 16.8771 18.515 16.6045L19.8689 18.0765C19.9338 18.0168 19.9741 17.9362 19.9828 17.8482L17.9926 17.6509ZM18.822 12.7903C18.557 12.2984 18.557 11.7016 18.822 11.2097L20.5828 12.1582C20.6368 12.058 20.6368 11.942 20.5828 11.8418L18.822 12.7903ZM15.6045 19.515C15.8771 19.2186 16.2501 19.0323 16.651 18.9926L16.8482 20.9828C16.9362 20.9741 17.0168 20.9338 17.0765 20.8689L15.6045 19.515Z'
          fill='black'
        />
      </Svg>
    ),
  },
  bug: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M6 10C6 8.89543 6.89543 8 8 8H16C17.1046 8 18 8.89543 18 10V15C18 18.3137 15.3137 21 12 21V21C8.68629 21 6 18.3137 6 15V10Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M8 7C8 4.79086 9.79086 3 12 3V3C14.2091 3 16 4.79086 16 7V8H8V7Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M12 21V12'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M6 10L4 8'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M6 14H3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M21 14H18'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M18 10L20 8'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M18 18L20 20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M6 18L4 20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  coffee: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M3 10C3 9.44771 3.44772 9 4 9H16C16.5523 9 17 9.44772 17 10V16C17 18.2091 15.2091 20 13 20H7C4.79086 20 3 18.2091 3 16V10Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M17 11H18.8787C20.0503 11 21 11.9497 21 13.1213V13.1213C21 13.6839 20.7765 14.2235 20.3787 14.6213L17 18L16 19V19C15.3597 19.6403 14.4913 20 13.5858 20H11.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M7 6L9 4'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M12 6L14 4'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  compass: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='9' stroke='black' stroke-width='2' />
        <Path
          d='M10 10L8 16L14 14L16 8L10 10Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'eye-off': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M3 12L3.42507 11.2915C5.95533 7.25881 9.53326 5.45646 13 5.8845M21 12L20.5749 11.2915C19.4725 9.53446 18.1711 8.20079 16.7668 7.29054'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M3 12L3.42507 12.7085C3.71334 13.1679 4.01512 13.5985 4.32887 14M21 12L20.5749 12.7085C17.1113 18.2289 11.6843 19.5698 7.26682 16.7313'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M14 9.76389C14.6137 10.3132 15 11.1115 15 12C15 13.6569 13.6568 15 12 15C11.1115 15 10.3132 14.6137 9.76389 14'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M4 20L20 4'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  eye: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M3 12L3.42507 11.2915C8 4 16 4.00001 20.5749 11.2915L21 12'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M3 12L3.42507 12.7085C8 20 16 20 20.5749 12.7085L21 12'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Circle cx='12' cy='12' r='3' stroke='black' stroke-width='2' />
      </Svg>
    ),
  },
  film: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='4'
          y='4'
          width='16'
          height='16'
          rx='2'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M8 4V20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M4 8H8'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M4 12H8'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M5 16H8'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M16 4V20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M20 8H16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M20 12H16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M19 16H16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M8 12H16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  flower: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='3' stroke='black' stroke-width='2' />
        <Path
          d='M11 9L9.9084 6.73283C9.39227 5.66088 9.77011 4.37224 10.7834 3.74871V3.74871C11.5295 3.28956 12.4705 3.28956 13.2166 3.74871V3.74871C14.2299 4.37224 14.6077 5.66088 14.0916 6.73283L13 9'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M11 15L9.9084 17.2672C9.39227 18.3391 9.77011 19.6278 10.7834 20.2513V20.2513C11.5295 20.7104 12.4705 20.7104 13.2166 20.2513V20.2513C14.2299 19.6278 14.6077 18.3391 14.0916 17.2672L13 15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M15 13L17.2672 14.0916C18.3391 14.6077 19.6278 14.2299 20.2513 13.2166V13.2166C20.7104 12.4705 20.7104 11.5295 20.2513 10.7834V10.7834C19.6278 9.77011 18.3391 9.39227 17.2672 9.9084L15 11'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M9 13L6.73283 14.0916C5.66088 14.6077 4.37224 14.2299 3.74871 13.2166V13.2166C3.28956 12.4705 3.28956 11.5295 3.74871 10.7834V10.7834C4.37224 9.77011 5.66088 9.39227 6.73283 9.9084L9 11'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M9 10.5L6.8692 9.79953C5.75351 9.43276 5.08748 8.29053 5.3178 7.13891V7.13891C5.5016 6.21993 6.21993 5.5016 7.1389 5.31781V5.31781C8.29053 5.08748 9.43276 5.75351 9.79953 6.86921L10.5 9'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M15.3713 10.5L17.5021 9.79953C18.6178 9.43276 19.2838 8.29053 19.0535 7.13891V7.13891C18.8697 6.21993 18.1514 5.5016 17.2324 5.31781V5.31781C16.0808 5.08748 14.9385 5.75351 14.5718 6.86921L13.8713 9'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M15.3713 13.8713L17.5021 14.5718C18.6178 14.9386 19.2838 16.0808 19.0535 17.2324V17.2324C18.8697 18.1514 18.1514 18.8697 17.2324 19.0535V19.0535C16.0808 19.2838 14.9385 18.6178 14.5718 17.5021L13.8713 15.3713'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M9 13.8713L6.8692 14.5718C5.75351 14.9386 5.08748 16.0808 5.3178 17.2324V17.2324C5.5016 18.1514 6.21993 18.8697 7.1389 19.0535V19.0535C8.29053 19.2838 9.43276 18.6178 9.79953 17.5021L10.5 15.3713'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'glasses-round': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='6.5' cy='12.5' r='4' stroke='black' stroke-width='2' />
        <Circle cx='17.5' cy='12.5' r='4' stroke='black' stroke-width='2' />
        <Path
          d='M10 11V11C11.259 10.3705 12.741 10.3705 14 11V11'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'glasses-square': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M2.5 10.0352C2.5 9.70083 2.6675 9.3893 2.96972 9.24629C3.59582 8.95003 4.8229 8.5 6.5 8.5C8.1771 8.5 9.40418 8.95003 10.0303 9.24629C10.3325 9.3893 10.5 9.70083 10.5 10.0352V12C10.5 14.2091 8.70914 16 6.5 16H5.5C3.84315 16 2.5 14.6569 2.5 13L2.5 10.0352Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M21.5 10.0352C21.5 9.70083 21.3325 9.3893 21.0303 9.24629C20.4042 8.95003 19.1771 8.5 17.5 8.5C15.8229 8.5 14.5958 8.95003 13.9697 9.24629C13.6675 9.3893 13.5 9.70083 13.5 10.0352V12C13.5 14.2091 15.2909 16 17.5 16H18.5C20.1569 16 21.5 14.6569 21.5 13L21.5 10.0352Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M10.5 9.5H13.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  glasses: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M7.99515 9H4.83519C4.46873 9 4.10741 9.08625 3.78046 9.25177C2.99506 9.64938 2.5 10.4549 2.5 11.3352V13.2438C2.5 14.1256 2.86218 14.9688 3.50178 15.5759C4.87315 16.8776 7.06625 16.7208 8.23847 15.2372L9.96054 13.0578C10.3099 12.6155 10.5 12.0684 10.5 11.5048C10.5 10.1215 9.37854 9 7.99515 9Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M16.0048 9H18.9967C19.4706 9 19.9348 9.13454 20.3353 9.38797C21.0604 9.84684 21.5 10.6452 21.5 11.5033V13.2438C21.5 14.1256 21.1378 14.9688 20.4982 15.5759C19.1268 16.8776 16.9338 16.7208 15.7615 15.2372L14.0395 13.0578C13.6901 12.6155 13.5 12.0684 13.5 11.5048C13.5 10.1215 14.6215 9 16.0048 9Z'
          stroke='black'
          stroke-width='2'
        />
        <Path d='M8 9H16' stroke='black' stroke-width='2' />
        <Path d='M10.5 12H13.5' stroke='black' stroke-width='2' />
      </Svg>
    ),
  },
  leaf: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M6.27374 16.1867L6.11542 15.9195C5.67814 15.1813 5.35698 14.3771 5.16462 13.541C4.21418 9.40982 6.46866 5.19768 10.4402 3.71553L11.5948 3.28463C12.0375 3.11942 12.5352 3.29172 12.7809 3.69529L14.5178 6.54731C14.9895 7.32189 15.6191 7.98841 16.3656 8.50343L16.8238 8.81952C20.6946 11.4902 20.2429 17.3445 16.0081 19.3897C15.1764 19.7914 14.2647 20 13.3411 20H12.9648C10.2175 20 7.67398 18.5505 6.27374 16.1867Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M11.5 11L11.706 11.6694C12.8425 15.3632 15.5637 18.3599 19.1311 19.8463L19.5 20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  'lightbulb-2': {
    svg: (
      <Svg width='24' height='25' viewBox='0 0 24 25' fill='none'>
        <Path
          d='M9 21.5H15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M15 14.6973L14.4993 13.8317C14.1903 14.0104 14 14.3403 14 14.6973H15ZM9 14.6973H10C10 14.3403 9.80972 14.0104 9.50073 13.8317L9 14.6973ZM9 18.5H8C8 19.0523 8.44772 19.5 9 19.5V18.5ZM15 18.5V19.5C15.5523 19.5 16 19.0523 16 18.5H15ZM17 9.5C17 11.3494 15.9964 12.9657 14.4993 13.8317L15.5007 15.5629C17.5904 14.3541 19 12.0922 19 9.5H17ZM12 4.5C14.7614 4.5 17 6.73858 17 9.5H19C19 5.63401 15.866 2.5 12 2.5V4.5ZM7 9.5C7 6.73858 9.23858 4.5 12 4.5V2.5C8.13401 2.5 5 5.63401 5 9.5H7ZM9.50073 13.8317C8.00361 12.9657 7 11.3494 7 9.5H5C5 12.0922 6.40958 14.3541 8.49927 15.5629L9.50073 13.8317ZM10 18.5V14.6973H8V18.5H10ZM15 17.5H9V19.5H15V17.5ZM14 14.6973V18.5H16V14.6973H14Z'
          fill='black'
        />
        <Path
          d='M12 18.5V12.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M10 10.5L12 12.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M14 10.5L12 12.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  lightbulb: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M9 21H15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M15 14.1973L14.4993 13.3317C14.1903 13.5104 14 13.8403 14 14.1973H15ZM9 14.1973H10C10 13.8403 9.80972 13.5104 9.50073 13.3317L9 14.1973ZM9 18H8C8 18.5523 8.44772 19 9 19V18ZM15 18V19C15.5523 19 16 18.5523 16 18H15ZM17 9C17 10.8494 15.9964 12.4657 14.4993 13.3317L15.5007 15.0629C17.5904 13.8541 19 11.5922 19 9H17ZM12 4C14.7614 4 17 6.23858 17 9H19C19 5.13401 15.866 2 12 2V4ZM7 9C7 6.23858 9.23858 4 12 4V2C8.13401 2 5 5.13401 5 9H7ZM9.50073 13.3317C8.00361 12.4657 7 10.8494 7 9H5C5 11.5922 6.40958 13.8541 8.49927 15.0629L9.50073 13.3317ZM10 18V14.1973H8V18H10ZM15 17H9V19H15V17ZM14 14.1973V18H16V14.1973H14Z'
          fill='black'
        />
      </Svg>
    ),
  },
  'martini-2': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4 4L12 12L20 4'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 11.5V20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M17 20H7'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M5 5H19'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  martini: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4 4L12 12L20 4'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 11.5V20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M17 20H7'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M5 5H19'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12.5 8L15 3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  medal: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='15' r='6' stroke='black' stroke-width='2' />
        <Path
          d='M12 18V12'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 12L11 13'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M8 10.5L7 3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M16 10.5L17 3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  package: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M11.0195 3.55154C11.6283 3.20908 12.3717 3.20908 12.9805 3.55154L18.9805 6.92654C19.6103 7.28078 20 7.94715 20 8.66969V15.3303C20 16.0529 19.6103 16.7192 18.9805 17.0735L12.9805 20.4485C12.3717 20.7909 11.6283 20.7909 11.0195 20.4485L5.01948 17.0735C4.38972 16.7192 4 16.0529 4 15.3303V8.66969C4 7.94715 4.38972 7.28078 5.01948 6.92654L11.0195 3.55154Z'
          stroke='black'
          stroke-width='2'
          stroke-linejoin='round'
        />
        <Path
          d='M20 8L12 12.5M12 12.5L4 8M12 12.5V20.5'
          stroke='black'
          stroke-width='2'
          stroke-linejoin='round'
        />
        <Path
          d='M16 10L8 5.5'
          stroke='black'
          stroke-width='2'
          stroke-linejoin='round'
        />
        <Path
          d='M16 10V18.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  pin: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M6 3L18 3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M6 15L18 15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 15V21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M7 3L9.55279 8.10557C9.83431 8.66863 9.83431 9.33137 9.55279 9.89443L7 15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M17 3L14.8205 8.23077C14.6154 8.72308 14.6154 9.27692 14.8205 9.76923L17 15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  pokeball: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='9' stroke='black' stroke-width='2' />
        <Path
          d='M3 12H9M21 12H15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Circle cx='12' cy='12' r='3' stroke='black' stroke-width='2' />
      </Svg>
    ),
  },
  suitcase: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='6'
          y='6'
          width='12'
          height='15'
          rx='2'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M9 6V3C9 2.44772 9.44772 2 10 2H14C14.5523 2 15 2.44772 15 3V6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'thumbs-down': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M17.5854 14.8567L16.199 14.7181C15.0216 14.6003 14 15.5249 14 16.7082V17.4982C14 18.4425 13.5554 19.3316 12.8 19.8982L11.6 20.7982C11.0097 21.2409 10.1936 20.91 10.0294 20.2443C9.98988 20.0839 9.98635 19.9163 9.95918 19.7533L9.19796 15.186C9.07617 14.4552 8.56043 13.8517 7.85763 13.6174L6 12.9982V3.99818H7.51317C7.83561 3.99818 8.15595 3.9462 8.46185 3.84423L10.5381 3.15213C10.844 3.05017 11.1644 2.99818 11.4868 2.99818H17.7574C18.553 2.99818 19.3161 3.31425 19.8787 3.87686L20.1213 4.1195C20.6839 4.68211 21 5.44518 21 6.24082V11.7555C21 12.5512 20.6839 13.3143 20.1213 13.8769L20.0052 13.9929C19.369 14.6292 18.4808 14.9463 17.5854 14.8567Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M3 13.9982H5C5.55228 13.9982 6 13.5505 6 12.9982V3.99818C6 3.4459 5.55228 2.99818 5 2.99818H3V13.9982Z'
          stroke='black'
          stroke-width='2'
        />
      </Svg>
    ),
  },
  'thumbs-up': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M17.5854 9.14146L16.199 9.2801C15.0216 9.39784 14 8.47327 14 7.29002V6.5C14 5.55573 13.5554 4.66656 12.8 4.1L11.6 3.2C11.0097 2.75725 10.1936 3.08816 10.0294 3.75388C9.98988 3.91432 9.98635 4.08192 9.95918 4.24491L9.19796 8.81222C9.07617 9.54296 8.56043 10.1465 7.85763 10.3808L6 11V20H7.51317C7.83561 20 8.15595 20.052 8.46185 20.1539L10.5381 20.8461C10.844 20.948 11.1644 21 11.4868 21H17.7574C18.553 21 19.3161 20.6839 19.8787 20.1213L20.1213 19.8787C20.6839 19.3161 21 18.553 21 17.7574V12.2426C21 11.447 20.6839 10.6839 20.1213 10.1213L20.0052 10.0052C19.369 9.369 18.4808 9.05192 17.5854 9.14146Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M3 10H5C5.55228 10 6 10.4477 6 11V20C6 20.5523 5.55228 21 5 21H3V10Z'
          stroke='black'
          stroke-width='2'
        />
      </Svg>
    ),
  },
  'tree-2': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12 21L12 13'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M8.5 17C6.01472 17 4 14.9853 4 12.5C4 10.9377 4.79618 9.56129 6.00493 8.75448C6.13372 5.55461 8.76853 3 12 3C15.2315 3 17.8663 5.55461 17.9951 8.75448C19.2038 9.56129 20 10.9377 20 12.5C20 14.9853 17.9853 17 15.5 17'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  tree: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12 21L12 15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M9 18H4.64661C4.21002 18 3.98314 17.4797 4.28021 17.1598L9.21979 11.8402C9.51686 11.5203 9.28998 11 8.85339 11H7C6.58798 11 6.35279 10.5296 6.6 10.2L11.6 3.53333C11.8 3.26667 12.2 3.26667 12.4 3.53333L17.4 10.2C17.6472 10.5296 17.412 11 17 11H15.1466C14.71 11 14.4831 11.5203 14.7802 11.8402L19.7198 17.1598C20.0169 17.4797 19.79 18 19.3534 18H15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  triforce: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M8.5359 9L9.40193 9.5H9.40193L8.5359 9ZM15.4641 9L14.5981 9.5L15.4641 9ZM12.866 4.5L13.7321 4L12.866 4.5ZM11.134 4.5L10.268 4L11.134 4.5ZM12 5L14.5981 9.5L16.3301 8.5L13.7321 4L12 5ZM14.5981 9.5H9.40193V11.5H14.5981V9.5ZM9.40193 9.5L12 5L10.268 4L7.66988 8.5L9.40193 9.5ZM9.40193 9.5L9.40193 9.5L7.66988 8.5C6.90008 9.83334 7.86233 11.5 9.40193 11.5V9.5ZM14.5981 9.5L14.5981 9.5V11.5C16.1377 11.5 17.0999 9.83333 16.3301 8.5L14.5981 9.5ZM13.7321 4C12.9623 2.66666 11.0378 2.66667 10.268 4L12 5L12 5L13.7321 4Z'
          fill='black'
        />
        <Path
          d='M3.5359 17.5L4.40193 18H4.40193L3.5359 17.5ZM10.4641 17.5L9.59808 18L10.4641 17.5ZM7.86603 13L8.73206 12.5L7.86603 13ZM6.13398 13L5.26795 12.5L6.13398 13ZM7 13.5L9.59808 18L11.3301 17L8.73206 12.5L7 13.5ZM9.59808 18H4.40193V20H9.59808V18ZM4.40193 18L7 13.5L5.26795 12.5L2.66988 17L4.40193 18ZM4.40193 18L4.40193 18L2.66988 17C1.90008 18.3333 2.86233 20 4.40193 20V18ZM9.59808 18L9.59808 18V20C11.1377 20 12.0999 18.3333 11.3301 17L9.59808 18ZM8.73206 12.5C7.96225 11.1667 6.03775 11.1667 5.26795 12.5L7 13.5L7 13.5L8.73206 12.5Z'
          fill='black'
        />
        <Path
          d='M13.5359 17.5L14.4019 18H14.4019L13.5359 17.5ZM20.4641 17.5L19.5981 18L20.4641 17.5ZM17.866 13L18.7321 12.5L17.866 13ZM16.134 13L15.268 12.5L16.134 13ZM17 13.5L19.5981 18L21.3301 17L18.7321 12.5L17 13.5ZM19.5981 18H14.4019V20H19.5981V18ZM14.4019 18L17 13.5L15.268 12.5L12.6699 17L14.4019 18ZM14.4019 18L14.4019 18L12.6699 17C11.9001 18.3333 12.8623 20 14.4019 20V18ZM19.5981 18L19.5981 18V20C21.1377 20 22.0999 18.3333 21.3301 17L19.5981 18ZM18.7321 12.5C17.9623 11.1667 16.0378 11.1667 15.268 12.5L17 13.5L17 13.5L18.7321 12.5Z'
          fill='black'
        />
      </Svg>
    ),
  },
  trophy: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M6 4C6 3.44772 6.44772 3 7 3H17C17.5523 3 18 3.44772 18 4V7C18 10.3137 15.3137 13 12 13V13C8.68629 13 6 10.3137 6 7V4Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M12 13V17'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Rect
          x='7'
          y='17'
          width='10'
          height='4'
          rx='1'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M5.5 4V4C4.39543 4 3.5 4.89543 3.5 6V6.17157C3.5 6.70201 3.71071 7.21071 4.08579 7.58579L7.5 11'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M18.5 4V4C19.6046 4 20.5 4.89543 20.5 6V6.17157C20.5 6.70201 20.2893 7.21071 19.9142 7.58579L16.5 11'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  wine: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M7 21H12M17 21H12M12 12V21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M5.05416 3C5.01841 3.32759 5 3.66134 5 4C5 8.41828 8.13401 12 12 12C15.866 12 19 8.41828 19 4C19 3.66134 18.9816 3.32759 18.9458 3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M18.5 4H5.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  briefcase: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='4'
          y='8'
          width='16'
          height='12'
          rx='2'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M8 8V6C8 4.89543 8.89543 4 10 4H14C15.1046 4 16 4.89543 16 6V8'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  code: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M7 8L2 12L7 16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M17 8L22 12L17 16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M10 17L14 7'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  cross: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M14 4H10C8.89543 4 8 4.89543 8 6V7.5C8 7.77614 7.77614 8 7.5 8H6C4.89543 8 4 8.89543 4 10V14C4 15.1046 4.89543 16 6 16H7.5C7.77614 16 8 16.2239 8 16.5V18C8 19.1046 8.89543 20 10 20H14C15.1046 20 16 19.1046 16 18V16.5C16 16.2239 16.2239 16 16.5 16H18C19.1046 16 20 15.1046 20 14V10C20 8.89543 19.1046 8 18 8H16.5C16.2239 8 16 7.77614 16 7.5V6C16 4.89543 15.1046 4 14 4Z'
          stroke='black'
          stroke-width='2'
        />
      </Svg>
    ),
  },
  database: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Ellipse cx='12' cy='5' rx='7' ry='2' stroke='black' stroke-width='2' />
        <Path
          d='M19 9.5C19 10.6046 15.866 11.5 12 11.5C8.13401 11.5 5 10.6046 5 9.5'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M19 14C19 15.1046 15.866 16 12 16C8.13401 16 5 15.1046 5 14'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M19 19C19 20.1046 15.866 21 12 21C8.13401 21 5 20.1046 5 19'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M5 5.00001V19'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M19 4.99998V19'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  design: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M15.8891 8.81802C17.9812 10.9101 18.037 13.7412 15.8891 15.8891C13.7412 18.037 10.9101 17.9812 8.81802 15.8891C7.08818 14.1593 5.80181 8.03859 5.40819 5.97081C5.34382 5.63263 5.63262 5.34382 5.9708 5.4082C8.03858 5.80182 14.1592 7.08818 15.8891 8.81802Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M6.69669 6.6967L12.3535 12.3536'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Circle
          cx='12.3535'
          cy='12.3536'
          r='1'
          transform='rotate(-45 12.3535 12.3536)'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M15.182 16.5962L17.3033 18.7175C17.6938 19.108 18.327 19.108 18.7175 18.7175V18.7175C19.108 18.327 19.108 17.6938 18.7175 17.3033L16.5962 15.182'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  law: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12 6V19'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M3 13L6 6L9 13C9 13 8 14 6 14C4 14 3 13 3 13Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M15 13L18 6L21 13C21 13 20 14 18 14C16 14 15 13 15 13Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M6 6H18'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Circle cx='12' cy='6' r='1' stroke='black' stroke-width='2' />
        <Path
          d='M7 19H17'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  pill: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='15.7279'
          y='3'
          width='8'
          height='18'
          rx='4'
          transform='rotate(45 15.7279 3)'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M9.36395 9.36395L15.0208 15.0208'
          stroke='black'
          stroke-width='2'
        />
      </Svg>
    ),
  },
  server: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='5'
          y='3'
          width='14'
          height='18'
          rx='3'
          stroke='black'
          stroke-width='2'
        />
        <Path d='M5 9H19' stroke='black' stroke-width='2' />
        <Path d='M5 15H19' stroke='black' stroke-width='2' />
        <Path
          d='M8 6H8.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M8 12H8.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M8 18H8.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M19 6H16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M19 12L13 12'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M19 18L15 18'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  terminal: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M5 6L11 12L5 18'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M13 18H19'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  vaccine: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='14.7071'
          y='5.05025'
          width='6'
          height='12'
          rx='2'
          transform='rotate(45 14.7071 5.05025)'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M8.34312 15.6569L6.2218 17.7782M4.10048 15.6569L8.34312 19.8995'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M16.8284 7.17154L19.6569 4.34311'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M11.8787 7.87868L13.2929 9.29289'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M9.05023 10.7071L10.4644 12.1213'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'card-2': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='3'
          y='5'
          width='18'
          height='14'
          rx='3'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M17 15C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13V15Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Circle cx='14' cy='14' r='1' stroke='black' stroke-width='2' />
      </Svg>
    ),
  },
  card: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='3'
          y='5'
          width='18'
          height='14'
          rx='3'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M3 10H21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M7 14H13'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'coin-stack': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Ellipse
          cx='14.5'
          cy='6'
          rx='5.5'
          ry='2.5'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M20 18C20 19.3807 17.5376 20.5 14.5 20.5C12.5865 20.5 10.9012 20.0558 9.91599 19.3819'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M20 14C20 15.3807 17.5376 16.5 14.5 16.5C13.4585 16.5 12.4846 16.3684 11.6544 16.1398'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M20 10C20 11.3807 17.5376 12.5 14.5 12.5C13.1704 12.5 11.9509 12.2855 11 11.9286'
          stroke='black'
          stroke-width='2'
        />
        <Path d='M9 6V10.5' stroke='black' stroke-width='2' />
        <Path d='M20 6V18' stroke='black' stroke-width='2' />
        <Ellipse
          cx='7.53652'
          cy='15.3525'
          rx='4.20365'
          ry='5.15636'
          transform='rotate(10.796 7.53652 15.3525)'
          stroke='black'
          stroke-width='2'
        />
      </Svg>
    ),
  },
  coin: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='9' stroke='black' stroke-width='2' />
        <Path
          d='M15 9.5C15 9.5 14 8 12 8C10 8 9 9 9 10C9 11 10 12 12 12C14 12 15 13 15 14C15 15 14 16 12 16C10 16 9 14.5 9 14.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 8V6.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 16V17.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'dollar-sign': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M17 7.625C17 7.625 15.3333 5 12 5C8.66667 5 7 6.75 7 8.5C7 10.25 8.66667 12 12 12C15.3333 12 17 13.75 17 15.5C17 17.25 15.3333 19 12 19C8.66667 19 7 16.375 7 16.375'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 4.5V3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 19.5V21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'shopping-bag': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M17.6391 21H6.36092C5.12504 21 4.18496 19.8903 4.38813 18.6712L5.72147 10.6712C5.8822 9.70683 6.71658 9 7.69425 9H16.3057C17.2834 9 18.1178 9.70683 18.2785 10.6712L19.6119 18.6712C19.815 19.8903 18.875 21 17.6391 21Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M8 9C8 9 7 3 12 3C17 3 16 9 16 9'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'shopping-basket': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M18.6391 8H5.36092C4.12504 8 3.18496 9.10973 3.38813 10.3288L4.72147 18.3288C4.8822 19.2932 5.71658 20 6.69425 20H17.3057C18.2834 20 19.1178 19.2932 19.2785 18.3288L20.6119 10.3288C20.815 9.10973 19.875 8 18.6391 8Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M6 8L10 4'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M18 8L14 4'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 12V16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M9 12V16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M15 12V16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'shopping-cart': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M7 20H7.01'
          stroke='black'
          stroke-width='3'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M17 20H17.01'
          stroke='black'
          stroke-width='3'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M6.78078 14H18.2192C18.6781 14 19.0781 13.6877 19.1894 13.2425L20.6894 7.24254C20.8472 6.61139 20.3698 6 19.7192 6H5.28078C4.63021 6 4.15285 6.61139 4.31063 7.24254L5.81063 13.2425C5.92193 13.6877 6.32191 14 6.78078 14Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M6 14V17H18'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M4.5 6L3.5 4'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  baseball: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='8' stroke='black' stroke-width='2' />
        <Path
          d='M6 7C6 7 9 8.66667 9 12C9 15.3333 6 17 6 17'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M18 7C18 7 15 8.66667 15 12C15 15.3333 18 17 18 17'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  basketball: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='9' stroke='black' stroke-width='2' />
        <Path
          d='M12 20C12 20 10 16.2322 10 10.0572C10 4.7643 12 3 12 3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M3 12C3 12 6.31578 10 10.1053 10C14.8421 10 21 12 21 12'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M4.93863 6.5C5.81868 7.12805 6.99998 8.45319 6.99998 11.0417C6.99998 13.4306 5.33674 15.5653 4.48712 16.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M18.5 6C18.5 6 15 6 15 10.84C15 14.8 19 17 19 17'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  bicycle: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='5.5' cy='17.5' r='3.5' stroke='black' stroke-width='2' />
        <Circle cx='18.5' cy='17.5' r='3.5' stroke='black' stroke-width='2' />
        <Path
          d='M12 7L8 10.5L12.5 14V19'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M15 4H15.01'
          stroke='black'
          stroke-width='4'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M11 8.5L14 11H16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  bike: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='5.5' cy='17.5' r='3.5' stroke='black' stroke-width='2' />
        <Circle cx='18.5' cy='17.5' r='3.5' stroke='black' stroke-width='2' />
        <Path
          d='M13 7L6.99997 10.5L12.5 14V19'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M11 8.5L15 11H18'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Circle cx='16' cy='5' r='2' fill='black' />
      </Svg>
    ),
  },
  boomerang: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M15 4H6.61158C5.49526 4 4.82942 5.24414 5.44865 6.17297C5.65898 6.48847 5.98848 6.70498 6.36156 6.77281L12.1499 7.82523C14.1988 8.19776 15.8022 9.80123 16.1748 11.8501L17.2272 17.6384C17.295 18.0115 17.5115 18.341 17.827 18.5514C18.7559 19.1706 20 18.5047 20 17.3884V9C20 6.23858 17.7614 4 15 4Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M10 11.5L6 15.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M13 14.5L9 18.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  bowling: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='9' stroke='black' stroke-width='2' />
        <Path
          d='M8 8H8.01'
          stroke='black'
          stroke-width='3'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M13 9H13.01'
          stroke='black'
          stroke-width='3'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M9 13H9.01'
          stroke='black'
          stroke-width='3'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  boxing: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12.6364 19C11.0798 19 9.8193 18.7104 9.02401 18.4618C8.44092 18.2796 8.09092 17.7237 8.09092 17.1128C8.09092 16.6208 7.86449 16.1562 7.47698 15.8531L6.6193 15.1822C6.09431 14.7715 5.68546 14.2311 5.43309 13.6142L4.25926 10.7448C4.08983 10.3307 4.03987 9.87728 4.11506 9.43614L4.26705 8.54451C4.37535 7.90915 4.92597 7.44444 5.57049 7.44444C6.00961 7.44444 6.42008 7.66245 6.66598 8.02626L8.00001 10L7.69349 9.37561C7.35686 8.68988 7.18183 7.93614 7.18183 7.17224V6.06942C7.18183 5.2434 7.51476 4.45225 8.10537 3.87477C8.67889 3.31399 9.44913 3 10.2513 3H15.9306C16.7327 3 17.503 3.31399 18.0765 3.87477C18.6671 4.45225 19 5.24341 19 6.06942V12.1243C19 13.1292 18.6972 14.1107 18.1312 14.941L17.5131 15.8475C17.2973 16.164 17.1818 16.5382 17.1818 16.9213C17.1818 17.6494 16.7637 18.3128 16.065 18.5175C15.2657 18.7516 14.078 19 12.6364 19Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M8.5 21C8.5 21 10 21.5 13 21.5C16 21.5 17 21 17 21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  football: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M7.05026 16.9497C13.2728 23.1723 19.7782 19.7782 19.7782 19.7782C19.7782 19.7782 23.1723 13.2728 16.9498 7.05024C10.7272 0.827696 4.22183 4.22181 4.22183 4.22181C4.22183 4.22181 0.827715 10.7272 7.05026 16.9497Z'
          stroke='black'
          stroke-width='2'
          stroke-linejoin='round'
        />
        <Path
          d='M12 12L13.4142 10.5858'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M14.1213 14.1213L15.5356 12.7071'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M9.87869 9.87866L11.2929 8.46445'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M19.7782 19.7782C19.7782 19.7782 18.0104 16.5962 12.7071 11.2929C7.4038 5.98959 4.22182 4.22182 4.22182 4.22182'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  golf: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M11 15.0183C6.50005 15.1841 3 16.4558 3 18C3 19.6569 7.02944 21 12 21C16.9706 21 21 19.6569 21 18C21 16.5723 18.008 15.3775 14 15.0743'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M14 17L14 3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M14 10L6 7L14 3V10Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Ellipse cx='14' cy='18' rx='3' ry='1' fill='black' />
      </Svg>
    ),
  },
  rugby: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12 6C4 6 2 12 2 12C2 12 4 18 12 18C20 18 22 12 22 12C22 12 20 6 12 6Z'
          stroke='black'
          stroke-width='2'
          stroke-linejoin='round'
        />
        <Path
          d='M12 6V8'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M9 7L9 8'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M15 7L15 8'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M3 12C3 12 3.83351 12.9763 5.625 14C7.41649 15.0237 10 15 10 15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  running: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M13.5 8L9.5 17L5 19.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M11.5 13L17 15L15 20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M13.5 8L8 11'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M13.5 8L18 9.5L19.5 6.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Circle cx='15' cy='4' r='2' fill='black' />
      </Svg>
    ),
  },
  'skateboard-2': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M10 7L7 14L14 11L17 14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M7 14L11 16L9 20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M9.5 8L6 7L4 9'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M14 21L19 16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M15 21H15.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M19 17H19.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Circle cx='13' cy='4' r='2' fill='black' />
      </Svg>
    ),
  },
  skateboard: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path d='M7 6V18M17 6V18' stroke='black' stroke-width='2' />
        <Path
          d='M7 6C7 6 7 2 12 2C17 2 17 6 17 6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M17 18C17 18 17 22 12 22C7 22 7 18 7 18'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M6 6V8'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M18 6V8'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M6 16V18'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M18 16V18'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  sneaker: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M5.01936 5.75713L6 3.5C6 3.5 7.04648 5.01535 7.883 5.75713C8.71951 6.49892 10.522 7.49952 11.1343 7.14596C11.8761 6.30945 14.1957 4.25668 14.6786 4.38609C15.1616 4.5155 13.9715 7.12058 14.6786 8.34533C15.3857 9.57007 18.3436 13.9861 19.1801 14.7279C20.0166 15.4697 20.4996 15.5991 21.3361 16.3408C22.1726 17.0826 22.0432 17.5656 22.0432 17.5656C22.0432 17.5656 21.7844 18.5315 20.5596 19.2386C19.3349 19.9457 18.3689 19.6869 15.4712 18.9104C12.5734 18.134 11.418 14.7186 8.52022 13.9421L4.65652 12.9068C4.17355 12.7774 3.20764 12.5186 2.50053 11.2939C1.79343 10.0691 3.27698 8.39609 3.27698 8.39609L5.01936 5.75713Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M15 8.99999L14 10'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M17 12L16 13'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'soccer-2': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M11 20H11.01'
          stroke='black'
          stroke-width='3'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M11.5 8L10.5 13L14 15.5L16 20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M10.5 13L8 16.5L4.5 14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M11.5 8L7 9.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M11.5 8H14.5L17 6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Circle cx='13' cy='4' r='2' fill='black' />
      </Svg>
    ),
  },
  soccer: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='9' stroke='black' stroke-width='2' />
        <Path
          d='M11.4122 8.42705C11.7627 8.17241 12.2373 8.17241 12.5878 8.42705L15.2164 10.3369C15.5669 10.5915 15.7136 11.0429 15.5797 11.4549L14.5757 14.5451C14.4418 14.9571 14.0578 15.2361 13.6246 15.2361H10.3754C9.94217 15.2361 9.55822 14.9571 9.42435 14.5451L8.42029 11.4549C8.28641 11.0429 8.43307 10.5915 8.78356 10.3369L11.4122 8.42705Z'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M4.71085 17.1465L6.91913 17.1634C7.35234 17.1667 7.73415 17.4486 7.86487 17.8617L8.62988 20.2789'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M15.2401 20.3928L16.1366 17.7887C16.2776 17.379 16.6664 17.1068 17.0995 17.1143L19.2225 17.1513'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M9.39679 3.2978L11.4527 4.64214C11.7852 4.85954 12.2148 4.85954 12.5473 4.64214L14.6487 3.26803'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M18.2707 5.5L17.9744 8.3192C17.9291 8.75005 18.1664 9.16107 18.5622 9.33728L21 10.4227'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M5.77177 5.5L6.06808 8.3192C6.11337 8.75005 5.87607 9.16107 5.4803 9.33728L3.04248 10.4227'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M12 8V5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M10 15L7.50002 17.5M14 15L16.5 17.5M15.5 11L18.2749 9.15005M8.50003 11L6 9.21955'
          stroke='black'
          stroke-width='2'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  swimming: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M4 17L4.58579 16.4142C5.36684 15.6332 6.63316 15.6332 7.41421 16.4142L7.58579 16.5858C8.36683 17.3668 9.63316 17.3668 10.4142 16.5858L10.5858 16.4142C11.3668 15.6332 12.6332 15.6332 13.4142 16.4142L13.5858 16.5858C14.3668 17.3668 15.6332 17.3668 16.4142 16.5858L16.5858 16.4142C17.3668 15.6332 18.6332 15.6332 19.4142 16.4142L20 17'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M11 11L13.4142 8.58579C13.7893 8.21071 14.298 8 14.8284 8H19'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Circle cx='16' cy='12' r='2' fill='black' />
      </Svg>
    ),
  },
  'table-tennis': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M19.917 12.3583C20.0357 12.0619 20.1361 11.7604 20.2181 11.4559C20.8525 9.0986 20.3788 6.5598 18.6647 4.8457C15.9885 2.1695 11.302 2.51702 8.43465 5.38438C5.56729 8.25174 5.21978 12.9382 7.89598 15.6144C10.2504 17.9688 14.1606 17.983 17.0193 16'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M6.98131 15L3.44859 18.5327C3.44859 18.5327 2.43926 19.5421 3.44859 20.5514C4.45792 21.5607 5.46728 20.5514 5.46728 20.5514L9 17.0187'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M6.5 10L14 17'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Circle cx='18.5' cy='14.5' r='2.5' stroke='black' stroke-width='2' />
      </Svg>
    ),
  },
  tennis: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle
          cx='12'
          cy='12'
          r='7.77819'
          transform='rotate(45 12 12)'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M12 4.66666C12 4.66666 12.6111 7.72222 10.1667 10.1667C7.72222 12.6111 4.66665 12 4.66665 12'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M19.3333 12C19.3333 12 16.2778 11.3889 13.8333 13.8334C11.3889 16.2778 12 19.3334 12 19.3334'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  volleyball: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='9' stroke='black' stroke-width='2' />
        <Path
          d='M3 12C3 12 3.75354 14.2014 7 15.5C9.5 16.5 12 16.5 12 16.5C12.5 13.5 15 7.5 18.5 6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M7 15.5C7 11 10 5 14 3.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 16.5C13 17 14.5 18.5 15 20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M14.5 11C16.5 12 18.5 14.5 19.5 17'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  weight: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M7 12H17M3 9V15M6 6V12V18M21 9V15M18 6V12V18'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M2 12H3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M21 12H22'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'user-check': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='10' cy='8' r='4' stroke='black' stroke-width='2' />
        <Path
          d='M3 21V19C3 16.7909 4.79086 15 7 15H13C15.2091 15 17 16.7909 17 19V21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M17 8.5L18.5 10L21 7.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'user-minus': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='10' cy='8' r='4' stroke='black' stroke-width='2' />
        <Path
          d='M3 21V19C3 16.7909 4.79086 15 7 15H13C15.2091 15 17 16.7909 17 19V21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M17 8H21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'user-plus': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='10' cy='8' r='4' stroke='black' stroke-width='2' />
        <Path
          d='M3 21V19C3 16.7909 4.79086 15 7 15H13C15.2091 15 17 16.7909 17 19V21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M19 6V10'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M17 8H21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'user-x': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='10' cy='8' r='4' stroke='black' stroke-width='2' />
        <Path
          d='M3 21V19C3 16.7909 4.79086 15 7 15H13C15.2091 15 17 16.7909 17 19V21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M17.5 7L20.5 10'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M20.5 7L17.5 10'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  user: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='8' r='4' stroke='black' stroke-width='2' />
        <Path
          d='M5 21V19C5 16.7909 6.79086 15 9 15H15C17.2091 15 19 16.7909 19 19V21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  users: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='10' cy='8' r='4' stroke='black' stroke-width='2' />
        <Path
          d='M16 4.53513C17.1956 5.22674 18 6.51943 18 8C18 9.48056 17.1956 10.7732 16 11.4649'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M3 21V19C3 16.7909 4.79086 15 7 15H13C15.2091 15 17 16.7909 17 19V21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M21 21V19C21 17.5194 20.1956 16.2267 19 15.5351'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  bus: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M18 16H19C20.1046 16 21 15.1046 21 14V12.3246C21 12.1096 20.9653 11.896 20.8974 11.6921L19.4558 7.36755C19.1836 6.55086 18.4193 6 17.5585 6H13H7H5C3.89543 6 3 6.89543 3 8V12V14C3 15.1046 3.89543 16 5 16H6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Circle cx='8' cy='16' r='2' stroke='black' stroke-width='2' />
        <Circle cx='16' cy='16' r='2' stroke='black' stroke-width='2' />
        <Path
          d='M10 16H14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M16 6V9C16 10.1046 16.8954 11 18 11H20.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  car: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M18 16H19C20.1046 16 21 15.1046 21 14V13.5616C21 12.6438 20.3754 11.8439 19.4851 11.6213L17.3918 11.098C17.1332 11.0333 16.8901 10.9176 16.6769 10.7577L13.5333 8.4C13.1871 8.14036 12.7661 8 12.3333 8H7.82843C7.29799 8 6.78929 8.21071 6.41421 8.58579L4 11L3.58579 11.4142C3.21071 11.7893 3 12.298 3 12.8284V14C3 15.1046 3.89543 16 5 16H6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Circle cx='8' cy='16' r='2' stroke='black' stroke-width='2' />
        <Circle cx='16' cy='16' r='2' stroke='black' stroke-width='2' />
        <Path
          d='M10 16H14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  pickup: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M18 16H19C20.1046 16 21 15.1046 21 14V12.4415C21 11.5807 20.4491 10.8164 19.6325 10.5442L18.651 10.217C18.2291 10.0764 17.8661 9.79909 17.6194 9.42903L16.5937 7.8906C16.2228 7.3342 15.5983 7 14.9296 7H11.3934C10.6238 7 10 7.62385 10 8.3934V8.3934C10 9.24135 9.24898 9.89271 8.40955 9.77279L5.28284 9.32612C4.07798 9.154 3 10.0889 3 11.306V14C3 15.1046 3.89543 16 5 16V16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Circle cx='7' cy='16' r='2' stroke='black' stroke-width='2' />
        <Circle cx='16' cy='16' r='2' stroke='black' stroke-width='2' />
        <Path
          d='M9 16L14 16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  plane: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M13.7071 7.46447L13.6304 8.46152C13.9215 8.48391 14.2078 8.378 14.4142 8.17157L13.7071 7.46447ZM11.2322 10.6464L11.9393 11.3536C12.159 11.1339 12.2641 10.8246 12.2238 10.5165C12.1834 10.2085 12.0021 9.93668 11.7333 9.78102L11.2322 10.6464ZM16.5355 10.2929L15.8284 9.58579C15.622 9.79221 15.5161 10.0785 15.5385 10.3696L16.5355 10.2929ZM13.3536 12.7678L14.219 12.2667C14.0633 11.9979 13.7915 11.8166 13.4835 11.7762C13.1754 11.7359 12.8661 11.841 12.6464 12.0607L13.3536 12.7678ZM3.80761 14.5355L3.71708 13.5396C3.28614 13.5788 2.92928 13.8907 2.83279 14.3125C2.7363 14.7344 2.92206 15.1704 3.29312 15.393L3.80761 14.5355ZM9.46447 20.1924L8.60697 20.7069C8.8296 21.0779 9.26563 21.2637 9.68746 21.1672C10.1093 21.0707 10.4212 20.7139 10.4604 20.2829L9.46447 20.1924ZM6.70282 6.92568L6.62612 7.92273L6.70282 6.92568ZM6.41395 7.85692L5.91292 8.72234L6.41395 7.85692ZM9.78524 16.6639L10.7811 16.7544L9.78524 16.6639ZM7.33614 14.2148L7.42667 15.2107L7.33614 14.2148ZM17.0743 17.2972L16.0773 17.3739L17.0743 17.2972ZM16.1431 17.586L15.2777 18.0871L16.1431 17.586ZM7.85764 17.5143L8.71513 16.9999L7.85764 17.5143ZM18.6569 5.34315C19.0474 5.73367 19.0474 6.36684 18.6569 6.75736L20.0711 8.17157C21.2426 7 21.2426 5.10051 20.0711 3.92893L18.6569 5.34315ZM20.0711 3.92893C18.8995 2.75736 17 2.75736 15.8284 3.92893L17.2426 5.34315C17.6332 4.95262 18.2663 4.95262 18.6569 5.34315L20.0711 3.92893ZM13.7838 6.46741L6.77951 5.92862L6.62612 7.92273L13.6304 8.46152L13.7838 6.46741ZM5.91292 8.72234L10.7312 11.5119L11.7333 9.78102L6.91499 6.99149L5.91292 8.72234ZM15.5385 10.3696L16.0773 17.3739L18.0714 17.2205L17.5326 10.2162L15.5385 10.3696ZM17.0085 17.085L14.219 12.2667L12.4881 13.2688L15.2777 18.0871L17.0085 17.085ZM15.8284 3.92893L13 6.75736L14.4142 8.17157L17.2426 5.34315L15.8284 3.92893ZM8.65981 14.6331L11.9393 11.3536L10.5251 9.93934L7.2456 13.2189L8.65981 14.6331ZM18.6569 6.75736L15.8284 9.58579L17.2426 11L20.0711 8.17157L18.6569 6.75736ZM12.6464 12.0607L9.36692 15.3402L10.7811 16.7544L14.0607 13.4749L12.6464 12.0607ZM7.2456 13.2189L3.71708 13.5396L3.89815 15.5314L7.42667 15.2107L7.2456 13.2189ZM10.4604 20.2829L10.7811 16.7544L8.78935 16.5733L8.46857 20.1019L10.4604 20.2829ZM7.00015 18.0288L8.60697 20.7069L10.322 19.6779L8.71513 16.9999L7.00015 18.0288ZM3.29312 15.393L5.97116 16.9999L7.00015 15.2849L4.32211 13.678L3.29312 15.393ZM6.77951 5.92862C5.18863 5.80625 4.53206 7.9229 5.91292 8.72234L6.91499 6.99149C7.37527 7.25797 7.15642 7.96352 6.62612 7.92273L6.77951 5.92862ZM9.36692 15.3402C9.03608 15.671 8.83171 16.1074 8.78935 16.5733L10.7811 16.7544L9.36692 15.3402ZM7.2456 13.2189L7.42667 15.2107C7.89262 15.1683 8.32898 14.9639 8.65981 14.6331L7.2456 13.2189ZM16.0773 17.3739C16.0365 16.8436 16.742 16.6247 17.0085 17.085L15.2777 18.0871C16.0771 19.4679 18.1938 18.8114 18.0714 17.2205L16.0773 17.3739ZM8.71513 16.9999C8.29289 16.2961 7.7039 15.7071 7.00015 15.2849L5.97116 16.9999C6.39341 17.2532 6.7468 17.6066 7.00015 18.0288L8.71513 16.9999Z'
          fill='black'
        />
      </Svg>
    ),
  },
  train: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M18 17H19C20.1046 17 21 16.1046 21 15V12.9098C21 11.8551 20.1449 11 19.0902 11H18.2361C17.2087 11 16.5406 9.91887 17 9V9C17.4594 8.08113 16.7913 7 15.7639 7L14.636 7C13.6025 7 12.8871 8.03229 13.25 9V9C13.6129 9.96771 12.8975 11 11.864 11H11.6373C10.7331 11 10 10.2669 10 9.36267V8C10 6.89543 9.10457 6 8 6H5C3.89543 6 3 6.89543 3 8V13V15C3 16.1046 3.89543 17 5 17H6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Circle cx='8' cy='17' r='2' stroke='black' stroke-width='2' />
        <Circle cx='16' cy='17' r='2' stroke='black' stroke-width='2' />
        <Path
          d='M10 17H14'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M21 20H3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Circle cx='10.5' cy='2.5' r='1.5' fill='black' />
        <Circle r='1' transform='matrix(-1 0 0 1 15 4)' fill='black' />
      </Svg>
    ),
  },
  truck: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12 16C13.1046 16 14 15.1046 14 14V8C14 6.89543 13.1046 6 12 6H5C3.89543 6 3 6.89543 3 8V14C3 14.7403 3.4022 15.3866 4 15.7324M8 16H9'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M15 16V16C14.4477 16 14 15.5523 14 15V7C14 6.44772 14.4477 6 15 6H17.4648C17.7992 6 18.1114 6.1671 18.2969 6.4453L19.8066 8.70994C19.9274 8.89115 20.1308 9 20.3486 9V9C20.7084 9 21 9.29164 21 9.65139V15C21 15.5523 20.5523 16 20 16V16H19'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Circle cx='11' cy='16' r='2' stroke='black' stroke-width='2' />
        <Circle cx='6' cy='16' r='2' stroke='black' stroke-width='2' />
        <Circle cx='17' cy='16' r='2' stroke='black' stroke-width='2' />
      </Svg>
    ),
  },
  van: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M18 16H19C20.1046 16 21 15.1046 21 14V12.5616C21 11.6438 20.3754 10.8439 19.4851 10.6213L17.8924 10.2231C17.326 10.0815 16.8497 9.69945 16.5886 9.17724L15.5528 7.10557C15.214 6.428 14.5215 6 13.7639 6H5C3.89543 6 3 6.89543 3 8V11V12V14C3 15.1046 3.89543 16 5 16V16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Circle cx='7' cy='16' r='2' stroke='black' stroke-width='2' />
        <Circle cx='16' cy='16' r='2' stroke='black' stroke-width='2' />
        <Path
          d='M9 16L14 16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  'cloud-sun': {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M11.8845 8.04175C11.4551 6.29538 9.87884 5 8 5C5.79086 5 4 6.79086 4 9C4 9.97964 4.35217 10.877 4.93681 11.5725'
          stroke='black'
          stroke-width='2'
        />
        <Path
          d='M6.5 18C4.567 18 3 16.433 3 14.5C3 14.4188 3.00277 14.3382 3.00821 14.2584C3.00276 14.1729 3 14.0868 3 14C3 11.7909 4.79086 10 7 10C7.41666 10 7.81843 10.0637 8.19612 10.1819C8.7596 8.33975 10.4733 7 12.5 7C14.4623 7 16.1312 8.25598 16.7467 10.0079C16.8305 10.0027 16.9149 10 17 10C19.2091 10 21 11.7909 21 14C21 14.0868 20.9972 14.1729 20.9918 14.2584C20.9972 14.3382 21 14.4188 21 14.5C21 16.433 19.433 18 17.5 18H6.5Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  cloud: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M6.5 17C4.567 17 3 15.433 3 13.5C3 13.4188 3.00277 13.3382 3.00821 13.2584C3.00276 13.1729 3 13.0868 3 13C3 10.7909 4.79086 9 7 9C7.41666 9 7.81843 9.0637 8.19612 9.1819C8.7596 7.33975 10.4733 6 12.5 6C14.4623 6 16.1312 7.25598 16.7467 9.00789C16.8305 9.00266 16.9149 9 17 9C19.2091 9 21 10.7909 21 13C21 13.0868 20.9972 13.1729 20.9918 13.2584C20.9972 13.3382 21 13.4188 21 13.5C21 15.433 19.433 17 17.5 17H6.5Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  moon: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M19.9299 15.4602C14.4393 15.4225 10 10.9599 10 5.46046C10 4.96437 10.0361 4.47673 10.1059 4C7.11809 5.15986 5 8.06281 5 11.4605C5 15.8787 8.58172 19.4605 13 19.4605C15.9612 19.4605 18.5467 17.8516 19.9299 15.4602Z'
          stroke='black'
          stroke-width='2'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  rain: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M6.5 15C4.567 15 3 13.433 3 11.5C3 11.4188 3.00277 11.3382 3.00821 11.2584C3.00276 11.1729 3 11.0868 3 11C3 8.79086 4.79086 7 7 7C7.41666 7 7.81843 7.0637 8.19612 7.1819C8.7596 5.33975 10.4733 4 12.5 4C14.4623 4 16.1312 5.25598 16.7467 7.00789C16.8305 7.00266 16.9149 7 17 7C19.2091 7 21 8.79086 21 11C21 11.0868 20.9972 11.1729 20.9918 11.2584C20.9972 11.3382 21 11.4188 21 11.5C21 13.433 19.433 15 17.5 15H6.5Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M10.5 18L9.5 19'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M20 18L19 19'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M15 19L14 20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M5.5 19L4.5 20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  snow: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M6.5 15C4.567 15 3 13.433 3 11.5C3 11.4188 3.00277 11.3382 3.00821 11.2584C3.00276 11.1729 3 11.0868 3 11C3 8.79086 4.79086 7 7 7C7.41666 7 7.81843 7.0637 8.19612 7.1819C8.7596 5.33975 10.4733 4 12.5 4C14.4623 4 16.1312 5.25598 16.7467 7.00789C16.8305 7.00266 16.9149 7 17 7C19.2091 7 21 8.79086 21 11C21 11.0868 20.9972 11.1729 20.9918 11.2584C20.9972 11.3382 21 11.4188 21 11.5C21 13.433 19.433 15 17.5 15H6.5Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M15 18L15.01 18.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M19 18L19.01 18.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M6.99999 18L7.00999 18.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M11 18L11.01 18.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M13 20L13.01 20.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M17 20L17.01 20.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M4.99999 20L5.00999 20.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M8.99999 20L9.00999 20.01'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  sun: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='5' stroke='black' stroke-width='2' />
        <Path
          d='M12 3V4'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M18.7071 5.29289L18 6'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M5.29289 5.29286L6 5.99997'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M5.29289 18.707L6 17.9999'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M18.7071 18.707L18 17.9999'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 20V21'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M4 12H3'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M21 12H20'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
  thunderstorm: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M6.5 15C4.567 15 3 13.433 3 11.5C3 11.4188 3.00277 11.3382 3.00821 11.2584C3.00276 11.1729 3 11.0868 3 11C3 8.79086 4.79086 7 7 7C7.41666 7 7.81843 7.0637 8.19612 7.1819C8.7596 5.33975 10.4733 4 12.5 4C14.4623 4 16.1312 5.25598 16.7467 7.00789C16.8305 7.00266 16.9149 7 17 7C19.2091 7 21 8.79086 21 11C21 11.0868 20.9972 11.1729 20.9918 11.2584C20.9972 11.3382 21 11.4188 21 11.5C21 13.433 19.433 15 17.5 15H6.5Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M18 18L17 19'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M6.5 18L5.5 19'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M13.5 15L10.5 18'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M13 18L9.5 21.5'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
      </Svg>
    ),
  },
  wind: {
    svg: (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
          d='M12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M16 20C17.1046 20 18 19.1046 18 18C18 16.8954 17.1046 16 16 16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M18 12C19.3807 12 20.5 10.8807 20.5 9.5C20.5 8.11929 19.3807 7 18 7'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
        />
        <Path
          d='M12 8H4'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M16 16L4 16'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M4 12H18'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
  },
};

const exportIcons: Record<string, IconConfig> = icons;

export { icons as tightlyTyped };
export default exportIcons;
