import { StyleSheet, Dimensions } from 'react-native';
import Palette from '../../common/palette';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  destinationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
