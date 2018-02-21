import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  View,
  Image,
  VrButton
} from 'react-vr';
import DeathStar from './vr/components/deathStar.js';

export default class reactVR_course extends React.Component { 

  generateRandomCoordinate() {
    const coordinates = [0,0,0];
    coordinates.forEach( (coor,i) => {
      coordinates[i] = this.getRandomNumber(-5, 5);
    })
    return coordinates
  }

  getRandomNumber(min, max) {
    return Math.round( Math.random() * (max - min) + min);
  }

  render() {
    return (
        <View>
        <Pano source={asset('space.jpg')}/>
          <DeathStar coordinates={this.generateRandomCoordinate()}/>
        </View>
    );
  }
};

AppRegistry.registerComponent('reactVR_course', () => reactVR_course);
