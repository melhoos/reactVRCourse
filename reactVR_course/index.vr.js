import React from 'react';
import {AppRegistry, asset, Pano, View, Text} from 'react-vr';

//import IntroText from './components/introduction/IntroText';

export default class IteraGame extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -6]}],
          }}>
          Velkommen til ReactVR kurs! 
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('IteraGame', () => IteraGame);
