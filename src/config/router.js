import React from 'react';
import { StyleSheet, Image, Icon, SafeAreaView, Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import i18n from '../translations';
import Palette from '../common/palette';

import DestinationScreen from '../scenes/destination';
import SplashScreen from '../scenes/splash';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.white,
    alignItems: 'center',
    justifyContent: 'center'
  },
  labelStyle: {
    fontFamily: 'Hind-Light',
    fontSize: 14,
    marginLeft: Platform.isPad ? 25 : 0,
    marginRight: 0,
    marginBottom: 0,
    marginTop: 0
  }
});

export const RootStack = StackNavigator({
  Splash: {
    screen: SplashScreen
  },
  Destination: {
    screen: DestinationScreen
  }
},
  {
    navigationOptions: {
      header: Platform.OS === 'ios' ? <SafeAreaView style={{backgroundColor: Palette.white}} /> : null
    },
    cardStyle: {
      backgroundColor: Palette.white
    }
  });
