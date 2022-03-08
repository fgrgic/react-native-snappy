import {
  View,
  StyleProp,
  TextStyle,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import React from 'react';
import icons from './svg';
import Svg, { SvgProps } from 'react-native-svg';
import getProps from './utils/pathProps';
import { SnappyIconNames } from './types';

const DEFAULT_ICON_SIZE = 24;
const DEFAULT_STROKE_WIDTH = 2;
const DEFAULT_ICON_COLOR = '#000';

interface SvgIconProps extends SvgProps {
  name: SnappyIconNames;
  svgs: typeof icons;
  color?: string;
  viewBox?: string;
  style?: SvgProps['style'] & StyleProp<Pick<TextStyle, 'color'>>;
}

const SvgIcon = ({
  name,
  svgs,
  color = DEFAULT_ICON_COLOR,
  height = DEFAULT_ICON_SIZE,
  width = DEFAULT_ICON_SIZE,
  strokeWidth = DEFAULT_STROKE_WIDTH,
  viewBox = `0 0 ${DEFAULT_ICON_SIZE} ${DEFAULT_ICON_SIZE}`,
  fillRule,
  style,
}: SvgIconProps) => {
  let icon = svgs[name] ?? {};

  if (!icon.svg) {
    icon = svgs['question-circle'];
  }

  const styledSvgPath = React.Children.map(icon.svg, (child) => {
    if (React.isValidElement(child)) {
      return React.Children.map(child.props.children, (path) => {
        return React.cloneElement(path, {
          fillRule,
          ...getProps(path, color, strokeWidth),
        });
      });
    }
  });

  return (
    <Svg
      height={height}
      width={width}
      viewBox={viewBox}
      style={style}
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      {styledSvgPath}
    </Svg>
  );
};

const MemoizedSvgIcon = React.memo(SvgIcon);

export interface SnappyProps {
  name: SnappyIconNames;
  size?: number;
  strokeWidth?: number;
  filled?: boolean;
  color?: string;
  style?: SvgProps['style'] & SvgIconProps['style'];
  containerStyle?: ViewStyle;
}

const Snappy = ({
  size = DEFAULT_ICON_SIZE,
  strokeWidth = DEFAULT_STROKE_WIDTH,
  color = DEFAULT_ICON_COLOR,
  ...rest
}: SnappyProps) => {
  const svgIconProps = {
    width: size,
    height: size,
    ...rest,
  };

  return (
    <View style={[{ height: size, width: size }, styles.iconContainer]}>
      <MemoizedSvgIcon
        {...svgIconProps}
        strokeWidth={strokeWidth}
        color={color}
        svgs={icons}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Snappy;
