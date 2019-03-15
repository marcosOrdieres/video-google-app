import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import destinationStyles from './destinationStyles';
import MapView from 'react-native-maps';
import { ListItem } from 'components';
import Palette from '../../common/palette';

const {width, height} = Dimensions.get('window');

const localStyles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  },
  buttonView: {
    position: 'absolute',
    top: 400,
    width: 350,
    marginLeft: 10
  }
});
export default (controller) => (
  <View style={{flex: 1, flexDirection: 'column'}}>
    <View style={{flex: 0.7}}>
      <MapView
        onPress={(event) => {
          controller.setState({
            latitude: event.nativeEvent.coordinate.latitude,
            longitude: event.nativeEvent.coordinate.longitude
          });
          return controller.retrieveDataFromYoutubeLinks(event.nativeEvent.coordinate.latitude, event.nativeEvent.coordinate.longitude);
        }}
        style={localStyles.map}
        region={controller.state.mapRegion}
        rotateEnabled
        scrollEnabled
        loadingEnabled
        showsScale
        showsCompass
        toolbarEnabled />
    </View>
    <ScrollView style={{flex: 0.3}}>
      <Text>Examole of scroll </Text>
      <Text>Examole of scroll </Text>
      <Text>Examole of scroll </Text>
      <Text>Examole of scroll </Text>
      <Text>Examole of scroll </Text>
      <Text>Examole of scroll </Text>
      <Text>Examole of scroll </Text>
      <Text>Examole of scroll </Text>
      <Text>Examole of scroll </Text>
      <Text>Examole of scroll </Text>
      <Text>Examole of scroll </Text>
      <Text>Examole of scroll </Text>
      <Text>Examole of scroll </Text>
      <Text>Examole of scroll </Text>
      <Text>Examole of scroll </Text>
      <Text>Examole of scroll </Text>
      <Text>Examole of scroll </Text>
      <Text>Examole of scroll </Text>
      <Text>Examole of scroll </Text>
      <Text>Examole of scroll </Text>
      <Text>Examole of scroll </Text>
      <Text>Examole of scroll </Text>
      <Text>Examole of scroll </Text>
      <Text>Examole of scroll </Text>
      <Text>Examole of scroll </Text>
      <Text>Examole of scroll </Text>

    </ScrollView>

  </View>
);
