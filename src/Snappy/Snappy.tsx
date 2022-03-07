import { View, Text } from 'react-native';
import React from 'react';
import { SnappyIconNames } from './types';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

export interface SnappyProps {
  name: SnappyIconNames;
  size?: number;
  weight?: number;
  color?: string;
}

const Snappy = ({
  name,
  size = 24,
  weight = 2,
  color = '#000',
}: SnappyProps) => {
  if (weight < 0.5) weight = 0.5;
  if (weight > 2.5) weight = 2.5;

  return (
    <View>
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
    </View>
  );
};

export default Snappy;