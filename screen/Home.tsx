import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import globalStyles from '../Style';

interface IHomeScreenParams {
  navigation: any;
  route: any;
}

const url = 'https://pushmore.io/webhook/zGsgGuqzBEnVZ41CqjzPDLGQ';

const HomeScreen = ({navigation, route}: IHomeScreenParams) => {
  const {username, repository} = route.params;

  const valueExist = () => {
    return username.value || repository.value;
  };

  const valueIsValid = () => {
    return username?.usernameValidity && repository?.repositoryValidity;
  };

  const sendData = () => {
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        repoUrl: repository?.value,
        sender: username?.value,
      }),
    })
      .then(response => {
        console.log(response);
        navigation.navigate('Success');
      })
      .catch(function (err) {
        console.error(err);
      });
  };

  return (
    <View
      style={[
        globalStyles.container,
        valueExist() && valueIsValid() ? styles.containerOk : null,
        valueExist() && !valueIsValid() ? styles.containerError : null,
      ]}>
      <View style={{flex: 1}}>
        <Text style={styles.title}>Set the repository address</Text>
        <Text style={styles.infoLabel}>github.com</Text>
        <Text style={styles.infoLabel}>
          /
          {username?.value ? <Text>{username?.value}</Text> : <Text>user</Text>}
        </Text>
        <Text style={styles.infoLabel}>
          /
          {repository?.value ? (
            <Text>{repository?.value}</Text>
          ) : (
            <Text>repo</Text>
          )}
        </Text>
      </View>
      {valueExist() && !valueIsValid() && (
        <View style={{flex: 1}}>
          <Text style={styles.infoLabel}>
            Check your username or your repository name
          </Text>
        </View>
      )}
      <View style={{justifyContent: 'flex-end'}}>
        {(!username?.usernameValidity || !repository?.repositoryValidity) && (
          <Text
            style={globalStyles.bottomLabel}
            onPress={() => navigation.navigate('CheckDataUser')}>
            CHECK
          </Text>
        )}
        {username?.usernameValidity && repository?.repositoryValidity && (
          <Text style={globalStyles.bottomLabel} onPress={() => sendData()}>
            SEND
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerError: {
    backgroundColor: 'red',
  },
  containerOk: {
    backgroundColor: 'green',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    padding: 10,
  },
  infoLabel: {
    fontWeight: 'bold',
    fontSize: 28,
    padding: 10,
  },
});

export default HomeScreen;
