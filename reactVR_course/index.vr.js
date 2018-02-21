import React from 'react';
import {AppRegistry, asset, LiveEnvCamera, Text, Pano, View} from 'react-vr';

import ShapeGenerator from './components/game/ShapeGenerator'
import IntroText from './components/introduction/IntroText'

export default class IteraGame extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('space.jpg')}/>
        <ShapeGenerator />
      </View>
    );
  }
};

AppRegistry.registerComponent('IteraGame', () => IteraGame);
