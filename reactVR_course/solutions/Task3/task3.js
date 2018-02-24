import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  View,
  Model
} from 'react-vr';

export default class IteraGame extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('space.jpg')}/>
        <Model
          wireframe={false}
          source={{
            obj: asset('death-star.obj'),
          }}
          texture={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/827672/death-star.png"}
          style={{
            transform: [
              {translate: [2,0,-4]}
            ]
          }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('IteraGame', () => IteraGame);
