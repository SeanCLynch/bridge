import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

const Tag = ({title}) =>
<View style={styles.container}>
  <Text style={styles.title}>#{title}</Text>
</View>

export default Tag;

Tag.defaultProps ={
  title: 'cooking',
}
const styles = StyleSheet.create({
  container:{
    padding: '2%',
    margin: 4,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'cyan'
  },
  title:{

  },
})
