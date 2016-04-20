/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';
import Index from './pages/Index.js';

class xiecheng extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
         title: '首页',
         component: Index,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('xiecheng', () => xiecheng);
