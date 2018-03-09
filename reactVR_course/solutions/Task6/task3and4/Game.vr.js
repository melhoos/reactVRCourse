import React from 'react'
import {Animated, View, NativeModules} from 'react-vr'

import Intro3DModel from '../introduction/Intro3DModel.vr.js';

import ComponentGenerator, {getRandomCoordinates, randomComponents} from '../../helpers/ComponentGenerator';

const NUM_COMPONENTS = 10;
const Y_POSITION = 8;
const GAME_TIME = 30;

export default class Game extends React.Component {
  constructor() {
    super();

    this.startAnimation = this.startAnimation.bind(this);
    this.getShapesNextState = this.getShapesNextState.bind(this);
    this.onShootShape = this.onShootShape.bind(this);

    const yPosition = new Animated.Value(Y_POSITION);
    this.state = {
      globalYPosition: yPosition,
      time: GAME_TIME,
      Obstacles: () => <ComponentGenerator yPosition={yPosition} numberOfComponents={NUM_COMPONENTS} onClick={this.onShootShape(-1)}/>,
      score: 0
    }
  }

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation() {
    Animated.timing(this.state.globalYPosition, {
      duration: 15000,
      toValue: -Y_POSITION
    }).start((o) => {
      if (o.finished) {
        this.setState(this.getShapesNextState());
      }
    });
  }

  getShapesNextState() {
    this.state.globalYPosition.setValue(Y_POSITION);
    this.startAnimation();

    const {globalYPosition} = this.state;
    return {
      Obstacles: () => <ComponentGenerator yPosition={globalYPosition} numberOfComponents={NUM_COMPONENTS} onClick={this.onShootShape(-1)}/>,
    };
  }

  onShootShape(clickPoint) {
    return () => {
      this.setState({score: this.state.score + clickPoint});
    }
  }

  render() {
    const {Obstacles, deathStarPosition, score, globalYPosition, time} = this.state;
    NativeModules.DomOverlayModule.openOverlay({time: time, score: score});
      return (
        <View>
          <Obstacles/>
          <Intro3DModel onClick={this.onShootShape(1)}/>
        </View>
      );
  }
}
