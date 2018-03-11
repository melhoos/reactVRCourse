import React from 'react'
import {Animated, View, NativeModules, Text} from 'react-vr'

import Intro3DModel from '../introduction/Intro3DModel.vr.js';

import ComponentGenerator, {getRandomCoordinates, randomComponents} from '../../helpers/ComponentGenerator';

export default class ShapeGenerator extends React.Component {
  constructor() {
    super();
  }

  render() {
    NativeModules.DomOverlayModule.openOverlay({score: 0})
    return (
      <View>
        <Intro3DModel/>
      </View>
    );
  }
}
