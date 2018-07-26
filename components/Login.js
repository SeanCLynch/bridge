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
        if (error.response.status === 501) {
          alert('Invalid password, try again');
        }
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
          autoCapitalize= 'none'
          autoCorrect= {false}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({password: text})}
          placeholder="  Password"
          autoCapitalize= 'none'
          autoCorrect= {false}
          secureTextEntry={true}
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
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    width: 325,
    margin: 25,
  }
});

export default Login;
