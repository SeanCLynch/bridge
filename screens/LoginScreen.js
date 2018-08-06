import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet
} from 'react-native';

import Login from '../components/Login';

export default class LoginScreen extends React.Component {
  constructor(props){
    super(props);
    this._navigateSignUp = this._navigateSignUp.bind(this)
  }

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
        <Button
          onPress={this._navigateSignUp}
          title="Sign Up"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    justifyContent: 'center',
    fontSize: 25,
    letterSpacing: 5,
  }
});
