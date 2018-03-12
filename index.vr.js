import React from 'react';
import {AppRegistry, asset, Pano, View} from 'react-vr';

import Game from './components/game/Game.vr';

export default class IteraGame extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('space.jpg')}/>
        <Game/>
      </View>
    );
  }
};

AppRegistry.registerComponent('IteraGame', () => IteraGame);
