import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface IHomeScreenParams {
  navigation: any;
}

const HomeScreen = ({navigation}: IHomeScreenParams) => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 4}}>
        <Text>Set the repository address</Text>
        <Text>github.com</Text>
        <Text>/user</Text>
        <Text>/repo</Text>
      </View>
      <View style={{flex: 1}}>
        <Text onPress={() => navigation.navigate('CheckData')}>CHECK</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
