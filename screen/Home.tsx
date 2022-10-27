import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
        styles.container,
        valueExist() && valueIsValid() ? styles.containerOk : null,
        valueExist() && !valueIsValid() ? styles.containerError : null,
        {
          flexDirection: 'column',
        },
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
            style={styles.checkLabel}
            onPress={() => navigation.navigate('CheckDataUser')}>
            CHECK
          </Text>
        )}
        {username?.usernameValidity && repository?.repositoryValidity && (
          <Text style={styles.checkLabel} onPress={() => sendData()}>
            SEND
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerError: {
    backgroundColor: 'red',
  },
  containerOk: {
    backgroundColor: 'green',
  },
  checkLabel: {
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 20,
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
  errorLabel: {
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 20,
  },
  successLabel: {
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 20,
  },
});

export default HomeScreen;
