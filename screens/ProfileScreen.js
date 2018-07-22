import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import ProfileContainer from '../containers/ProfileContainer';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ProfileContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
});
