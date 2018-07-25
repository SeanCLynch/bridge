import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import SignUp from '../components/SignUp';

export default class SignUpScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <SignUp />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
