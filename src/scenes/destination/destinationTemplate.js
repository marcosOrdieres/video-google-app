import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import destinationStyles from './destinationStyles';
import MapView from 'react-native-maps';
import { ListItem } from 'components';
import Palette from '../../common/palette';
import env from '../../config/env';

import YouTube from 'react-native-youtube';

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
      {controller.state.videosIds ?
        controller.state.videosIds.map((value, key) => (
          <YouTube
            key={key}
            apiKey={env.youtubeApiKey}
            videoId={value}
            play={false}
            // onReady={e => controller.setState({ isReady: true })}
            // onChangeState={e => controller.setState({ status: e.state })}
            // onChangeQuality={e => controller.setState({ quality: e.quality })}
            onError={e => controller.setState({ error: e.error })}
            style={{ alignSelf: 'stretch', height: 50 }}
          />
        ))
      :
      null
    }
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
