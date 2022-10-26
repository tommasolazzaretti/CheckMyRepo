import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface IGoBackButton {
  navigation: any;
  title: string;
}

const GoBackButton = ({navigation, title}: IGoBackButton) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.arrow}
        onPress={() => navigation.goBack()}>
        <Image source={require('../assets/back.png')} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
  },
  arrow: {
    paddingRight: 15,
    justifyContent: 'center',
  },
  title: {
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default GoBackButton;
