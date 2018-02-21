import React from 'react';
import {AppRegistry, asset, LiveEnvCamera, Text, Pano, View} from 'react-vr';

import ShapeGenerator from './vr/components/ShapeGenerator'

export default class IteraGame extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <ShapeGenerator />
      </View>
    );
  }
};

AppRegistry.registerComponent('IteraGame', () => IteraGame);
