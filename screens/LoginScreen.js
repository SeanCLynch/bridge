import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import Login from '../components/Login';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  }
});
