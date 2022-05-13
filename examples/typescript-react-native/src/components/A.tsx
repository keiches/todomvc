import React, {ReactNode} from 'react';
import {Linking, StyleSheet, Text} from 'react-native';

export type Props = {
  children?: ReactNode;
  href: string;
};

const A: React.FC<Props> = ({children, href}) => {
  const handlePress = () => Linking.openURL(href);
  return (
    <Text style={styles.link} onPress={handlePress}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  link: {color: 'blue', textDecorationLine: 'underline'},
});

export default A;
