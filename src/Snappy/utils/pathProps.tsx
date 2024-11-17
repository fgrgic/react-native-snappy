import React from 'react';
import { CommonPathProps, NumberProp } from 'react-native-svg';

export default function pathProps(
  pathElement: React.ReactNode,
  color: string,
  strokeWidth: NumberProp
) {
  if (!React.isValidElement<CommonPathProps>(pathElement)) return {};

  const { props } = pathElement;

  const [isStrokedPath, isFilledPath] = [!!props.stroke, !!props.fill];

  if (isStrokedPath) {
    return {
      strokeWidth,
      stroke: color,
      vectorEffect: 'nonScalingStroke' as const,
    } as CommonPathProps;
  }

  if (isFilledPath) {
    return {
      fill: color,
    };
  }

  return {};
}
