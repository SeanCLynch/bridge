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
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({name: text})}
          onSubmitEditing={(text) => this.checkEmpty(text)}
          placeholder="  Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({email: text})}
          onSubmitEditing={(text) => this.checkEmpty(text)}
          placeholder="  Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({password: text})}
          onSubmitEditing={(text) => this.checkEmpty(text)}
          placeholder="  Password"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({confirmpassword: text})}
          onSubmitEditing={(text) => this.checkEmpty(text)}
          placeholder="  Confirm Password"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({code: text})}
          onSubmitEditing={(text) => this.checkEmpty(text)}
          placeholder="  Organization Code"
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

export default SignUp;
