import React from 'react';
import {Text, TextInput, View} from 'react-native';
import GoBackButton from '../component/GoBackButton';
import globalStyles from '../Style';

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
      navigation.navigate('CheckDataRepository', {
        username: {
          value: user,
          usernameValidity: true,
        },
      });
    } else {
      navigation.navigate('Home', {
        username: {
          value: user,
          usernameValidity: false,
        },
      });
    }
  };

  return (
    <View style={globalStyles.container}>
      <View style={{justifyContent: 'flex-start'}}>
        <GoBackButton navigation={navigation} title={'USER'} />
      </View>
      <View style={{flex: 1}}>
        <TextInput
          style={globalStyles.inputLayout}
          onChangeText={onChangeUser}
          placeholder={'Type your github username'}
          value={user}
        />
      </View>
      <View style={{justifyContent: 'flex-end'}}>
        <Text
          style={globalStyles.bottomLabel}
          onPress={() => checkUserName(user)}>
          DONE
        </Text>
      </View>
    </View>
  );
};

export default CheckDataUserScreen;
