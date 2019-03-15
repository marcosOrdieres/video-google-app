import React, {Component} from 'react';
import { View, StyleSheet, Platform, Dimensions, Text } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const ScreenHeight = Dimensions.get('window').height;

const localStyles = StyleSheet.create({
  containerTotal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  containerMap: {
    height: '100%'
  },

  containerProduct: {
    height: '100%'
  }
});

export default class MapComponent extends Component {
  constructor (args) {
    super(args);
  }

  render () {
    return (
      <View style={localStyles.containerTotal} >
        <View style={localStyles.containerMap} >
          <MapView
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }} />
        </View>
        <View style={localStyles.containerProduct} />
      </View>

    );
  }
}
