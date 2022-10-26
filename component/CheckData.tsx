import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import GoBackButton from './GoBackButton';

interface ICheckDataScreenParams {
  navigation: any;
}

const CheckDataScreen = ({navigation}: ICheckDataScreenParams) => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [text2, onChangeText2] = React.useState('Useless Text');

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 1}}>
        <GoBackButton navigation={navigation} />
      </View>
      <View style={{flex: 4}}>
        <Text>User</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText2}
          value={text2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default CheckDataScreen;
