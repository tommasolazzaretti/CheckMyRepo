import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

interface IGoBackButton {
  navigation: any;
}

const GoBackButton = ({navigation}: IGoBackButton) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require('../assets/back.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default GoBackButton;
