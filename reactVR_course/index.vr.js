import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  View
} from 'react-vr';
import DeathStar from './vr/components/deathStar.js';

export default class reactVR_course extends React.Component {

  render() {
    return (
      <View>
        <Pano source={asset('space.jpg')}/>
        <DeathStar/>
      </View>
    );
  }
};

AppRegistry.registerComponent('reactVR_course', () => reactVR_course);
