import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Box, Cylinder
} from 'react-vr';

export default class Basics extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('starry-sky.jpg')}/>
        <Box
          dimWidth={0.5}
          dimHeight={0.5}
          dimDepth={0.5}
          wireframe={true}
          style={{
            color: '#dd2222',
            transform: [
              {translate: [2, 0, -3]},
              {translateY: 1},
              {translateX: -0.5},
              {rotateY: 45},
              {rotateZ: 45}
            ]
          }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('Basics', () => Basics);
