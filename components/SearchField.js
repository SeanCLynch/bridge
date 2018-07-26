import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';

const SearchField = ({}) =>
  <View>
    <TextInput
      style={styles.input}
      placeholder="Search"
      autoCapitalize= 'none'
      autoCorrect= {false}
    />
  </View>

  const styles = StyleSheet.create({
    container: {
    },
    input: {
      margin: 25,
      width: 300,
      textAlign: 'center',
      fontSize: 15,
      padding: 10,
      borderWidth: 1,
      borderRadius: 5,
    }
  });

  export default SearchField;
