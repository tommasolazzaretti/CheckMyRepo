import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import GoBackButton from '../component/GoBackButton';
import globalStyles from '../Style';

interface ICheckDataRepositoryScreenParams {
  navigation: any;
  route: any;
}

const regexRepoUrl = new RegExp(
  '[(http(s)?):\\/\\/(www\\.)?a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)',
);

const CheckDataRepositoryScreen = ({
  navigation,
  route,
}: ICheckDataRepositoryScreenParams) => {
  const [repo, onChangeRepo] = React.useState('');
  const {username} = route.params;

  const checkRepoUrl = (repository: string) => {
    if (regexRepoUrl.test(repository)) {
      navigation.navigate('Home', {
        username,
        repository: {
          value: repository,
          repositoryValidity: true,
        },
      });
    } else {
      navigation.navigate('Home', {
        repository: {
          value: repository,
          repositoryValidity: false,
        },
      });
    }
  };

  return (
    <View style={globalStyles.container}>
      <View style={{justifyContent: 'flex-start'}}>
        <GoBackButton navigation={navigation} title={'REPOSITORY'} />
      </View>
      <View style={{flex: 1}}>
        <TextInput
          style={globalStyles.inputLayout}
          onChangeText={onChangeRepo}
          placeholder={'Type your repository name'}
          value={repo}
        />
      </View>
      <View style={{justifyContent: 'flex-end'}}>
        <Text
          style={globalStyles.bottomLabel}
          onPress={() => checkRepoUrl(repo)}>
          DONE
        </Text>
      </View>
    </View>
  );
};

export default CheckDataRepositoryScreen;
