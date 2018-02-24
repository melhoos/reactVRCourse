import React from 'react';
import {AppRegistry, asset, Pano, View} from 'react-vr';
import IntroText from './components/introduction/IntroText';
import IntroBox from './components/introduction/IntroBox';

export default class IteraGame extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('island-garden.jpg')}/>
        <IntroText/>
        <IntroBox/>
      </View>
    );
  }
};

AppRegistry.registerComponent('IteraGame', () => IteraGame);
