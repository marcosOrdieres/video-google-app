import endpoints from '../config/endpoints.json';
import env from '../config/env.json';

export default class DestinationService {
  constructor (request) {
    this.request = request;
  }

  getYoutubeLinks (latitude, longitude) {
    const url = 'https://www.googleapis.com/youtube/v3/videos?key=' + env.youtubeApiKey + '&part=id&chart=mostPopular&location=' + latitude + ',' + longitude + '&type=video&maxResults=10';
    return this.request.get(url);
  }
}
