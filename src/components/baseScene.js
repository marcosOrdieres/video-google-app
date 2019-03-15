import React, { Component } from 'react';
import i18n from '../translations';
import User from '../models/user';
import rootStore from '../stores/root';
import env from '../config/env';
import palette from '../common/palette';
import { NetInfo } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import services from '../services';

export default class BaseScene extends Component {
  constructor (args) {
    super();
    this.services = services;
    this.storage = this.services.Storage;
    this.i18n = i18n;
    this.user = User.instance;
    this.rootStore = rootStore;
    this.env = env;
    this.palette = palette;
  }

  navigateTo (destination) {
    this.props.navigation.navigate(destination);
  }
}
