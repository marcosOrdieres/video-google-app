import React, { Component } from 'react';
import i18n from '../translations';
import User from '../models/user';
import rootStore from '../stores/root';
import env from '../config/env';
import palette from '../common/palette';

export default class BaseComponent extends Component {
  constructor (args) {
    super();
    this.i18n = i18n;
    this.user = User.instance;
    this.rootStore = rootStore;
    this.env = env;
    this.palette = palette;
  }
}
