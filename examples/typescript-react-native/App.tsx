/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Section from '@components/Section';
import Footer from '@components/Footer';
import A from 'components/A';

import appCssStyles from './src/styles/todomvc-app-css';
import P from 'components/P';

const App: React.FC<{}> = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section style={appCssStyles.todoapp}>
            <View
              style={{
                backgroundColor: 'red',
                flexDirection: 'column',
                flexWrap: 'wrap',
              }}>
              <Text>Header</Text>
              <Section style={{backgroundColor: 'gray'}}>
                <Text>
                  Edit <Text style={styles.highlight}>App.js</Text> to change
                  this screen and then come back to see your edits.
                </Text>
              </Section>
              <Text>Footer</Text>
            </View>
          </Section>
          <Footer style={appCssStyles.info}>
            <P style={appCssStyles.info_p}>Double-click to edit a todo</P>
            <P style={appCssStyles.info_p}>
              Created by{' '}
              <A href="http://github.com/remojansen/">Remo H. Jansen</A>
            </P>
            <P style={appCssStyles.info_p}>
              Part of <A href="http://todomvc.com">TodoMVC</A>
            </P>
          </Footer>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
