import React from 'react';
import {AppRegistry, asset, Pano, View, Text} from 'react-vr';

//import IntroText from './components/introduction/IntroText';

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
