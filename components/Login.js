import React from 'react';
import { TextInput, Text, View, Button, StyleSheet } from 'react-native';

export class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }
  }

  submit() {
    console.log("Hello")
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({email: text})}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({password: text})}
          placeholder="Password"
        />
        <Button
          onPress={this.submit}
          title="Submit"
          color="#8B008B"
        />
      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200
  },
  input: {
    width: 250,
    margin: 5,
  }
});

export default Login;
