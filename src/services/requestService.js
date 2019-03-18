import env from '../config/env.json';

export default class RequestService {
  constructor (storageService) {
    this.storageService = storageService;
  }

  get (url, options) {
    return this.__request('GET', url, options);
  }

  post (url, params, options) {
    return this.__request('POST', url, options, params);
  }

  put (url, params, options) {
    return this.__request('PUT', url, options, params);
  }

  patch (url, options) {
    return this.__request('PATCH', url, {}, options);
  }

  delete (url, options) {
    return this.__request('DELETE', url, options);
  }

  head (url, options) {
    return this.__request('HEAD', url, options);
  }

  __request (method, url, options, params) {
    // return fetch(env.host + url, this.__setOptions(method, options, params))
    return fetch(url, this.__setOptions(method, options, params))

    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 204) {
        return;
      } else {
        let errObj = JSON.parse(response._bodyText);
        throw errObj;
      }
    });
  }

  __setOptions (method = 'GET', options = {}, params) {
    // const token = 'Bearer ' + this.user.getToken();
    return {
      method: method,
      headers: Object.assign({}, {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        // 'Authorization': token
      }, options),
  			body: JSON.stringify(params)
  		};
  }

}
