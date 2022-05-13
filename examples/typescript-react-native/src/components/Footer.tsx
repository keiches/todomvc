import React from 'react';
import type {ReactNode} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

export type Props = {
  children?: ReactNode;
  style?: StyleProp<ViewStyle> | undefined;
};

const Footer: React.FC<Props> = ({children, style}) => {
  return <View style={[styles.footer, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
});

export default Footer;
