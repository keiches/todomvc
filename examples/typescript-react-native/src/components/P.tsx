import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, Text, ViewStyle} from 'react-native';

export type Props = {
  children?: ReactNode;
  style?: StyleProp<ViewStyle> | undefined;
};

const P: React.FC<Props> = ({children, style}) => {
  return <Text style={[styles.p, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  p: {flex: 1, backgroundColor: 'red'}, // , flexDirection: 'row'},
});

export default P;
