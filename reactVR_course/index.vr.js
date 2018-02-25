import React from 'react';
import {AppRegistry, asset, Pano, View} from 'react-vr';
import Game from './components/game/Game';

export default class IteraGame extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('IteraGame', () => IteraGame);
