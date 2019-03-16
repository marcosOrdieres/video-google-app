import React, {Component} from 'react';
import { View } from 'react-native';
import Palette from '../common/palette';
import YouTube from 'react-native-youtube';

// const styles = StyleSheet.create({
//   splashContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: Palette.primaryColor
//   }
// });

export default class YoutubeVideoComponent extends Component {
  constructor (args) {
    super(args);
  }

  render () {
    return (
      <View style={{height: 100, paddingTop: 5, paddingBottom: 5}}>
        <YouTube
          key={this.props.keyVideo}
          apiKey={this.props.apiKeyYoutube}
          videoId={this.props.videiIdYoutube}
          onError={this.props.onErrorYoutube}
          play={false}
          onReady={e => this.setState({ isReady: true })}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          style={{ alignSelf: 'stretch', height: 80 }}
        />
      </View>
    );
  }
}
