import endpoints from '../config/endpoints.json';
import env from '../config/env.json';

export default class DestinationService {
  constructor (request) {
    this.request = request;
  }

  getYoutubeLinks (latitude, longitude) {
    const url = 'https://www.googleapis.com/youtube/v3/videos?key=' +
    env.youtubeApiKey
    + '&chart=mostPopular&part=id&location="' + latitude + '","' + longitude + '"&type=video&maxResults=10&locationRadius=1000m&order=date&q=&pageToken=';
    return this.request.get(url);
  }
}
