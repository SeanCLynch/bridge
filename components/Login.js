import React from 'react';
import { TextInput, Text, View, Button, StyleSheet } from 'react-native';
import axios from 'axios';

export class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }
    this.submit = this.submit.bind(this)
  }

  submit() {

    if (!this.state.email || !this.state.password) { //NOTE: Simple Error checking, no error handling yet!
      alert("All fields are required for login!")
    }

    else {
      axios.post('http://localhost/login', {
        email: this.state.email,
        password: this.state.password
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error) //NOTE: Fails with error code 501 for incorrect password, fails with error code 502 for incorrect email
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({email: text})}
          placeholder="  Email"
          placeholderStyle={{ fontSize: 1 }}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({password: text})}
          placeholder="  Password"
        />
        <Button
          onPress={this.submit}
          title="Login"
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
    fontSize: 15,
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    width: 325,
    margin: 25,
  }
});

export default Login;
