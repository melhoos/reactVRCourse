import React from 'react'
import {Animated, View, NativeModules} from 'react-vr'

import Intro3DModel as DeathStar from '../introduction/Intro3DModel.vr.js';

import ComponentGenerator, {getRandomCoordinates, randomComponents} from '../../helpers/ComponentGenerator';

export default class ShapeGenerator extends React.Component {
  constructor() {
    super();
  }

  render() {
      return (
        <View>
          <DeathStar/>
        </View>
      );
  }
}
