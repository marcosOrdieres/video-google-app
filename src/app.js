import React, { Component} from 'react';
import { AppRegistry } from 'react-native';
import { RootStack } from './config/router';
import { Provider } from 'react-redux';
import rootStore from './stores/root';

class App extends Component {
  render () {
    return (
      <Provider store={rootStore}>
        <RootStack />
      </Provider>
    );
  }
}

export default App;

AppRegistry.registerComponent('videoGoogleApp', () => App);
