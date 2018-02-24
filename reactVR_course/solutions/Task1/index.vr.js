import React from 'react';
import {AppRegistry, asset, Pano, View} from 'react-vr';

export default class IteraGame extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('island-garden.jpg')}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('IteraGame', () => IteraGame);
