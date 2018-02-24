import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Box,
  View,
  Cylinder
} from 'react-vr';

export default class IteraGame extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('space.jpg')}/>
        <Box
          dimWidth={0.2}
          dimHeight={0.2}
          dimDepth={0.2}
          wireframe = {true}
          style={{
            transform: [
                {translate: [0, 0, -3]},  // x = 0, y=0, z= -3
                {translateY: 0},
                {translateX: 1},
                {rotateZ: 45},
                {rotateY: 45}
            ]
        }}
        />
        <Cylinder
          dimWidth={0.2}
          dimHeight={0.2}
          dimDepth={0.2}
          wireframe = {true}
          style={{
            transform: [
                {translate: [0, 0, -3]},  // x = 0, y=0, z= -3
                {translateY: 0},
                {translateX: -1},
                {rotateZ: 45},
                {rotateY: 45}
            ]
        }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('IteraGame', () => IteraGame);
