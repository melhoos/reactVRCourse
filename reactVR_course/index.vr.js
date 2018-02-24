import React from 'react';
import {AppRegistry, asset, Pano, View} from 'react-vr';

import IntroBox from './components/introduction/IntroBox';

export default class IteraGame extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('space.jpg')}/>
        <IntroBox/>
      </View>
    );
  }
};

AppRegistry.registerComponent('IteraGame', () => IteraGame);
