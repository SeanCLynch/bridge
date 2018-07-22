import React from 'react';
import { TextInput, Text, View, Button, StyleSheet } from 'react-native';

export class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
      code: ""
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
          onChangeText={(text) => this.setState({name: text})}
          placeholder="Name"
        />
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
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({confirmpassword: text})}
          placeholder="Confirm Password"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({code: text})}
          placeholder="Code"
        />
        <Button
          onPress={this.submit}
          title="Sign up"
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

export default SignUp;
