import React from 'react';
import { BaseScene } from 'components';
import template from './destinationTemplate';
import { connect } from 'react-redux';
import { View, BackHandler, Linking } from 'react-native';
import services from '../../services';
import Palette from '../../common/palette';

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
      videosIds: null,
      nextPageToken: null
    };
  }

  componentDidMount () {
    this.setState({externalData: true});
  }

  openYoutubeVideo (videoId) {
    const url = this.env.youtubeUrl + videoId;
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  }

  async retrieveDataFromYoutubeLinks (lat, long) {
    try {
      this.setState({externalData: null});
      // Here I should have the URLS of the First videos of Youtube
      let videoIds = [];
      const youtubeLinks = await this.services.Destination.getYoutubeLinks(lat, long, this.state.nextPageToken);
      youtubeLinks.items.forEach((item, index) => { videoIds.push({'video': item.id.videoId, 'key': index}); });
      // console.warn('videoIds:', videoIds);
      let videosInState = this.state.videosIds;
      if (Array.isArray(this.state.videosIds)) {
        // the rest of the times, when the array is filled
        videoIds.forEach((value) => { videosInState.push(value); });
        this.setState({ videosIds: videosInState, nextPageToken: youtubeLinks.nextPageToken, externalData: true});
      } else {
        // first time
        this.setState({ videosIds: videoIds, nextPageToken: youtubeLinks.nextPageToken, externalData: true});
      }
      return videoIds;
    } catch (error) {
      if (error.error.errors[0].reason === 'quotaExceeded') {
        this.setState({ videosIds: 'quotaExceeded', externalData: true});
      } else {
        console.warn(error);
      }
    }
  }

  render () {
    if (this.state.externalData === null) {
      return <View />;
    } else {
      return template(this);
    }
  }
}

export default connect()(DestinationController);
