import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Model,
  Box, Cylinder
} from 'react-vr';

export default class Basics extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <Model 
          source={{obj: asset('Tree.obj')}}
          style={{
            transform: [{
              translate: [0,-1,-3]
            }]
          }}
          />
      </View>
    );
  }
};

AppRegistry.registerComponent('Basics', () => Basics);
