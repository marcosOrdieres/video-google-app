import RequestService from './requestService.js';
import StorageService from './storageService.js';
import SplashService from './splashService.js';
import DestinationService from './destinationService.js';

const requestService = new RequestService(storageService);
const storageService = new StorageService(requestService);
const splashService = new SplashService(requestService, storageService);
const destinationService = new DestinationService(requestService, storageService);

export default {
  Request: requestService,
  Storage: storageService,
  Splash: splashService,
  Destination: destinationService
};
