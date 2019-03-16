import endpoints from '../config/endpoints.json';
import env from '../config/env.json';

export default class DestinationService {
  constructor (request) {
    this.request = request;
  }

  getYoutubeLinks (latitude, longitude) {
    const url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&location='
    + latitude +
    '%2C+'
    + longitude +
    '&locationRadius=50km&maxResults=10&order=date&type=video%2Clist&key=' + env.youtubeApiKey + '';
    return this.request.get(url);
  }
}
