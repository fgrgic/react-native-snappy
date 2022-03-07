import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { IconConfig } from '../types';

const icons: Record<string, IconConfig> = {
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
          d='M12 20L17 15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <Path
          d='M12 20L7 15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    ),
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
  },
  // 'name': {svg: (

  // )},
};

export default icons;
