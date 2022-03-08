import {
  View,
  Text,
  StyleProp,
  TextStyle,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import React from 'react';
// import { SnappyIconNames } from './types';
import icons from './svg';
import Svg, { SvgProps } from 'react-native-svg';
import getSvgPathProps from './utils/getSvgPathStrokes';
import { SnappyIconNames } from './types';

interface SvgIconProps extends SvgProps {
  name: SnappyIconNames;
  svgs: typeof icons;
  color?: string;
  ignoreColorScheme?: boolean;
  style?: SvgProps['style'] & StyleProp<Pick<TextStyle, 'color'>>;
  viewBox?: string;
}

const SvgIcon = ({
  name,
  svgs,
  color = '#000',
  height = 24,
  width = 24,
  strokeWidth = 2,
  viewBox = '0 0 24 24',
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
          ...getSvgPathProps(path, color, strokeWidth),
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

// const MemoizedSvgIcon = React.memo(SvgIcon);

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
  size = 24,
  strokeWidth = 2,
  color = '#000',
  ...rest
}: SnappyProps) => {
  const svgIconProps = {
    width: size,
    height: size,
    ...rest,
  };

  // if (strokeWidth < 0.5) strokeWidth = 0.5;
  // if (strokeWidth > 2.5) strokeWidth = 2.5;

  return (
    <View style={[{ height: size, width: size }, styles.iconContainer]}>
      <SvgIcon
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
