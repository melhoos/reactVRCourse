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
          source={{
            obj: asset('three.obj'),
          }}
          style={{
            transform: [{translate: [-1, 1, -5]}]
          }}
        />

        <Model 
          source={{obj: asset('Tree.obj')}}
          style={{
            transform: [{translate: [-1, 1, -5]}]
          }}
          />
      </View>
    );
  }
};

AppRegistry.registerComponent('Basics', () => Basics);
