import React from 'react';
import {
  Box,
} from 'react-vr';

export default class IntroBox extends React.Component {
  render() {
    return (
        <Box
          dimWidth={0.5}
          dimHeight={0.5}
          dimDepth={0.5}
          wireframe={true}
          style={{
            transform: [
                {translate: [2,2,-3]},
                {translateY: -2},
                {translateX: -2},
                {translateZ: 1},
                {rotateX: 45},
                {rotateZ: 45}            
              ]
        }}
        />
    );
  }
};