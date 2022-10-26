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
      <View style={{flex: 1}}>
        <Text>Set the repository address</Text>
        <Text>github.com</Text>
        <Text>/user</Text>
        <Text>/repo</Text>
      </View>
      <View style={{justifyContent: 'flex-end'}}>
        <Text
          style={styles.checkLabel}
          onPress={() => navigation.navigate('CheckDataUser')}>
          CHECK
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  checkLabel: {
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 20,
  },
});

export default HomeScreen;
