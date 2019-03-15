import React from 'react';
import { View} from 'react-native';
import { BaseScene } from 'components';
import template from './splashTemplate';
import { connect } from 'react-redux';
import services from '../../services';

class SplashController extends BaseScene {
  constructor (args) {
    super(args);
    this.services = services;
    this.storage = this.services.Storage;
    this.initializeApplication();
    this.state = {
      userLoggedIn: false,
      externalData: null
    };
  }

  initializeApplication () {
    setTimeout(() => { this.navigateTo('Destination'); }, 300);
  }

  render () {
    return template(this);
  }
}

export default connect()(SplashController);
