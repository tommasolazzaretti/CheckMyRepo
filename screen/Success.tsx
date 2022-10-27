import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import globalStyles from '../Style';

interface ISuccessParams {
  navigation: any;
}

const SuccessScreen = ({navigation}: ISuccessParams) => {
  return (
    <View style={globalStyles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.successLabel}>All done!</Text>
        <Text style={styles.successLabel}>Repository sent.</Text>
      </View>
      <View style={{justifyContent: 'flex-end'}}>
        <Text
          style={globalStyles.bottomLabel}
          onPress={() => navigation.navigate('Home')}>
          COOL
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default SuccessScreen;
