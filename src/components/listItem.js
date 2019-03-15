import React, {Component} from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Text, Linking } from 'react-native';
import Palette from '../common/palette';
import rootStore from '../stores/root';
import i18n from '../translations';
import User from '../models/user';

const {width, height} = Dimensions.get('window');

export default class ListItemComponent extends Component {
  constructor (args) {
    super(args);
    this.rootStore = rootStore;
    this.user = User.instance;
  }

  render () {
    return (
      <View />
    );
  }
}
