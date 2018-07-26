import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import Login from '../components/Login';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  _navigateSignUp() {
    this.props.navigation.navigate("SignUp");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>BRIDGE</Text>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    justifyContent: 'center',
    fontSize: 25,
    letterSpacing: 2,
  }
});
