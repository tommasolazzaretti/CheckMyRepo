import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import GoBackButton from '../component/GoBackButton';

interface ICheckDataRepositoryScreenParams {
  navigation: any;
}

const regexUsername = new RegExp('^[A-Za-z]\\w{3,29}');

const CheckDataUserScreen = ({
  navigation,
}: ICheckDataRepositoryScreenParams) => {
  const [user, onChangeUser] = React.useState('');

  const checkUserName = (username: string) => {
    if (regexUsername.test(username)) {
      navigation.navigate('CheckDataRepository');
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <View style={{justifyContent: 'flex-start'}}>
        <GoBackButton navigation={navigation} title={'USER'} />
      </View>
      <View style={{flex: 1}}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeUser}
          placeholder={'Type your github username'}
          value={user}
        />
      </View>
      <View style={{justifyContent: 'flex-end'}}>
        <Text style={styles.doneLabel} onPress={() => checkUserName(user)}>
          DONE
        </Text>
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
  doneLabel: {
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 20,
  },
});

export default CheckDataUserScreen;
