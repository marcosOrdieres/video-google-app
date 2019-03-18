import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, ImageBackground, FlatList, Platform, Linking } from 'react-native';
import destinationStyles from './destinationStyles';
import MapView from 'react-native-maps';
import { ListItem, YoutubeVideo } from 'components';
import Palette from '../../common/palette';
import env from '../../config/env';

const {width, height} = Dimensions.get('window');

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 20;
  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom;
};

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
            longitude: event.nativeEvent.coordinate.longitude,
            videosIds: null
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
      onScroll={({nativeEvent}) => {
        if (isCloseToBottom(nativeEvent)) {
          controller.retrieveDataFromYoutubeLinks(controller.state.latitude, controller.state.longitude);
        }
      }}
      style={{flex: 0.3}}>
      {controller.state.videosIds && Array.isArray(controller.state.videosIds) ?
        <FlatList
          data={controller.state.videosIds}
          renderItem={({item, index}) =>
            <TouchableOpacity
              style={{backgroundColor: Palette.primaryColor50, opacity: 0.8}}
              onPress={() => {
                controller.openYoutubeVideo(item.video);
              }}>
              <View style={{borderBottomWidth: 1, borderBottomColor: 'white', height: 100, paddingTop: 5, paddingBottom: 5, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'white', textAlign: 'center', fontSize: 14}}>Tap to see in youtube app the video with the id:
                  <Text style={{color: 'white', fontWeight: 'bold', fontSize: 22}}>{' ' + item.video + ' '}</Text>
                    and the key: <Text style={{color: 'white', fontWeight: 'bold', fontSize: 26}}>{index}</Text>
                </Text>
              </View>
              {/* <YoutubeVideo
                keyVideo={index}
                apiKeyYoutube={env.youtubeApiKey}
                videoIdYoutube={item.video}
                onErrorYoutube={e => { controller.setState({ error: e.error }); }}
            /> */}
              {/* <YoutubeVideo
                sourceYoutubeVideo={controller.env.youtubeUrl + item.video} /> */}
            </TouchableOpacity>
        } />
        :
      controller.state.videosIds && (controller.state.videosIds === 'quotaExceeded') ?
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{textAlign: 'center', fontSize: 18}}>Your quota for Youtube is Exceeded</Text>
        </View>
      :
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{textAlign: 'center', fontSize: 18}}>Tap a location on the map to show the related videos list</Text>
        </View>

    }
    </ScrollView>

  </View>
);
