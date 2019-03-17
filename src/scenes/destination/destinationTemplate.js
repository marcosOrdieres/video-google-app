import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, ImageBackground, FlatList, Platform, Linking } from 'react-native';
import destinationStyles from './destinationStyles';
import MapView from 'react-native-maps';
import { ListItem, YoutubeVideo } from 'components';
import Palette from '../../common/palette';
import env from '../../config/env';

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
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      onScrollEndDrag={() => { controller.retrieveDataFromYoutubeLinks(controller.state.latitude, controller.state.longitude); }}
      style={{flex: 0.3}}>
      {controller.state.videosIds ?
        <FlatList
          data={controller.state.videosIds}
          renderItem={({item}) =>
            <TouchableOpacity
              onPress={() => {
                controller.openYoutubeVideo(item.video);
              }}>
              <YoutubeVideo
                keyVideo={item.key}
                apiKeyYoutube={env.youtubeApiKey}
                videoIdYoutube={item.video}
                onErrorYoutube={e => {
                  console.warn('weeee:');
                  controller.setState({ error: e.error });
                }}
            />
            </TouchableOpacity>

        } />
      :
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{textAlign: 'center', fontSize: 18}}>Tap a location on the map to show the related videos list</Text>
        </View>

    }
    </ScrollView>

  </View>
);
