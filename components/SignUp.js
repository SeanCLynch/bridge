import React from 'react';
import { TextInput, Text, View, Button, StyleSheet } from 'react-native';
import axios from 'axios';

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
    this.submit = this.submit.bind(this)
  }

  submit() {

    if (!this.state.email || !this.state.password || !this.state.confirmpassword || !this.state.code) {
      alert('All fields are required!')
    }

    else {

      axios.post('http://localhost/signup', { //NOTE: This will not be localhost in production!! Global parameter
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
        if (error.response.status === 500) {
          alert('This email already exists in the database')
        }
        else {
          alert("Something is not right, probably on our end")
        }
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({name: text})}
          placeholder="  Name"
          textContentType= 'name'
          autoCorrect= {false}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({email: text})}
          placeholder="  Email"
          autoCapitalize= 'none'
          autoCorrect= {false}
          textContentType= 'emailAddress'
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({password: text})}
          placeholder="  Password"
          autoCapitalize= 'none'
          autoCorrect= {false}
          textContentType= 'password'
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({confirmpassword: text})}
          placeholder="  Confirm Password"
          autoCapitalize= 'none'
          autoCorrect= {false}
          textContentType= 'password'
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({code: text})}
          placeholder="  Organization Code"
          autoCapitalize= 'none'
          autoCorrect= {false}
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
    fontSize: 15,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    width: 325,
    margin: 25,
  }
});

export default SignUp;
