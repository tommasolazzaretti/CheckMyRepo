import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface IHomeScreenParams {
  navigation: any;
  route: any;
}

const url = 'https://pushmore.io/webhook/zGsgGuqzBEnVZ41CqjzPDLGQ';

const HomeScreen = ({navigation, route}: IHomeScreenParams) => {
  console.log(' home route ', route);
  const {username, repository} = route.params;

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
        {
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 1}}>
        <Text style={styles.title}>Set the repository address</Text>
        <Text style={styles.infoLabel}>github.com</Text>
        <Text style={styles.infoLabel}>/user</Text>
        <Text style={styles.infoLabel}>/repo</Text>
      </View>
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
