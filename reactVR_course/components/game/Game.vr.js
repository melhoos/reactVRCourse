import React from 'react'
import {Animated, View, NativeModules} from 'react-vr'

import Shape from './Shape'
import DeathStar from './DeathStar.vr.js';

import {getRandomCoordinates, randomComponents} from '../../helpers/ComponentGenerator';

const NUM_COMPONENTS = 10;
const Y_POSITION = 8;
const GAME_TIME = 30;

export default class Game extends React.Component {
  constructor() {
    super();

    this.startAnimation = this.startAnimation.bind(this);
    this.getShapesNextState = this.getShapesNextState.bind(this);
    this.resetDeathStarState = this.resetDeathStarState.bind(this);
    this.onShootShape = this.onShootShape.bind(this);

    this.state = {
      globalYPosition: new Animated.Value(Y_POSITION),
      globalTimer: GAME_TIME,
      components: randomComponents(NUM_COMPONENTS),
      deathStarPosition: getRandomCoordinates(-Y_POSITION, Y_POSITION),
      score: 0,
      round: 0
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

    return {
      components: randomComponents(NUM_COMPONENTS)
    };
  }

  resetDeathStarState() {
    return {
      deathStarPosition: getRandomCoordinates(-Y_POSITION, Y_POSITION)
    }
  }

  onShootShape(clickPoint, resetOnClick=false) {
    return () => {
      const resetState = resetOnClick ? this.resetDeathStarState(): {};
      this.setState({score: this.state.score + clickPoint, ...resetState});
    }
  }

  render() {
    const {globalYPosition, globalTimer, components, deathStarPosition, score} = this.state;
    NativeModules.DomOverlayModule.openOverlay({time: globalTimer, score: score});
      return (
        <View>
          {
            components.map((componentConf, index) => {
              const {component, xPosition, zPosition, componentProps} = componentConf;
              return (
                <Shape
                  key={index}
                  component={component}
                  componentProps={componentProps}
                  onClick={this.onShootShape(-1)}
                  xPosition={xPosition}
                  yPosition={globalYPosition}
                  zPosition={zPosition}
                />
              );
            })
          }
          <DeathStar coordinates={deathStarPosition} onClick={this.onShootShape(1, true)}/>
        </View>
      );
  }
}
