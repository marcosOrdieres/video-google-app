import React from 'react';
import { BaseScene } from 'components';
import template from './destinationTemplate';
import { connect } from 'react-redux';
import { View, BackHandler, Alert } from 'react-native';
import services from '../../services';

class DestinationController extends BaseScene {
  constructor (args) {
    super(args);
    this.myArrRegion = [];
    this.services = services;
    this.state = {
      latitude: '',
      longitude: '',
      mapRegion: null,
      lastLat: 20.15,
      lastLong: -74.91,
      buttonFly: true,
      isModalVisible: false,
      externalData: null,
      videosIds: null
    };
  }

  async mapBuilderWithJson () {
    let mapRegion = {
      latitude: 20.15,
      longitude: -74.91,
      latitudeDelta: 60,
      longitudeDelta: 60
    };
    this.onRegionChange(mapRegion, mapRegion.latitude, mapRegion.longitude);
  }

  onRegionChange (mapRegion, lastLat, lastLong) {
    this.setState({
      mapRegion: mapRegion,
      lastLat: lastLat,
      lastLong: lastLong
    });
  }

  async retrieveDataFromYoutubeLinks (lat, long) {
    // Here I should have the URLS of the First videos of Youtube
    let videoIds = [];
    const youtubeLinks = await this.services.Destination.getYoutubeLinks(lat, long);
    youtubeLinks.items.forEach((item, index) => { videoIds.push({'video': item.id.videoId, 'key': index}); });

    console.warn('videoIds:', videoIds);
    this.setState({ videosIds: videoIds, externalData: true });
    return videoIds;
  }

  render () {
    return template(this);
  }
}

export default connect()(DestinationController);
