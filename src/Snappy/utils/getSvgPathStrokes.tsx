import React from 'react';
import { CommonPathProps, NumberProp } from 'react-native-svg';

function getStrokedPathProps(
  color: string,
  strokeWidth: NumberProp,
  preserveColor?: boolean
): CommonPathProps {
  const props = {
    strokeWidth,
    vectorEffect: 'nonScalingStroke' as const,
  } as CommonPathProps;

  if (!preserveColor) {
    props.stroke = color;
  }

  return props;
}

function getFilledPathProps(
  color: string,
  preserveColor?: boolean
): CommonPathProps {
  if (preserveColor) return {};

  return {
    fill: color,
  };
}

/**
 *
 * @param pathElement
 * @param color
 * @param strokeWidth
 * @param preserveColor
 * @returns
 */
export default function getSvgPathProps(
  pathElement: React.ReactNode,
  color: string,
  strokeWidth: NumberProp,
  preserveColor?: boolean
) {
  if (!React.isValidElement(pathElement)) return {};

  const { props } = React.cloneElement(pathElement);

  const [isStrokedPath, isFilledPath] = [!!props.stroke, !!props.fill];

  if (isStrokedPath) {
    return getStrokedPathProps(color, strokeWidth, preserveColor);
  }

  if (isFilledPath) {
    return getFilledPathProps(color, preserveColor);
  }

  return {};
}
