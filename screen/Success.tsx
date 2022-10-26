import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SuccessScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.successLabel}>All done!</Text>
        <Text style={styles.successLabel}>Repository sent.</Text>
      </View>
      <View style={{justifyContent: 'flex-end'}}>
        <Text style={styles.coolLabel}>COOL</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  labelContainer: {
    textAlign: 'center',
    justifyContent: 'center', //Centered horizontally
    alignItems: 'center', //Centered vertically
    flex: 1,
  },
  successLabel: {
    fontWeight: 'bold',
    fontSize: 30,
    padding: 10,
  },
  coolLabel: {
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 20,
  },
});

export default SuccessScreen;
