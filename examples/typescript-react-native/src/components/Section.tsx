/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {ReactNode} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ViewStyle,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export type Props = {
  children?: ReactNode;
  style?: StyleProp<ViewStyle> | undefined;
};

const Section: React.FC<Props> = ({children, style}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={[styles.section, style]}>
      <Text
        style={[
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {'title'}
      </Text>
      <Text
        style={[
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Section;
