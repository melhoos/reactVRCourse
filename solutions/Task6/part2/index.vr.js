import React from 'react';
import {AppRegistry, asset, Pano, View} from 'react-vr';

import Intro3DModel from './components/introduction/Intro3DModel';

export default class IteraGame extends React.Component {
  render() {
    NativeModules.DomOverlayModule.openOverlay({time: globalTimer, score: score});
    return (
      <View>
        <Pano source={asset('space.jpg')}/>
        <Intro3DModel/>
      </View>
    );
  }
};

AppRegistry.registerComponent('IteraGame', () => IteraGame);
