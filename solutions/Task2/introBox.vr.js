import React from 'react';
import {
  Box,
} from 'react-vr';

export default class IntroBox extends React.Component {
  render() {
    return (
        <Box
        dimWidth={0.2}
        dimHeight={0.2}
        dimDepth={0.2}
        wireframe = {true}
        style={{
          transform: [
              {translate: [0, 2, -3]},  // x = 0, y=2, z= -3
              {translateY: 0},
              {translateX: 1},
              {rotateZ: 45},
              {rotateY: 45}
          ]
      }}
      />
    );
  }
};