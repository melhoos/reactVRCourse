import React from 'react';
import {
    Model, 
    asset
} from 'react-vr';

export default class Intro3DModel extends React.Component {
  render() {
    return (
        <Model
            wireframe={false}
            source={{
                obj: asset('death-star.obj'),
            }}
            style={{
                transform: [
                    {translate: [0, 2, -3]},  // x = 0, y=2, z= -3
                    {rotateZ: 45},
                    {rotateY: 45}
                ]
            }}
            texture={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/827672/death-star.png"}
        />
    );
  }
};