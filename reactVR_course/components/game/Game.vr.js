import React from 'react'
import {Animated, View, NativeModules} from 'react-vr'

import Shape from './Shape'
import DeathStar from './DeathStar.vr.js';

import {getRandomCoordinates, randomComponents} from '../../helpers/ComponentGenerator';

const NUM_COMPONENTS = 10;
const Y_POSITION = 8;
const TIME_PER_ROUND = 15;

export default class ShapeGenerator extends React.Component {
  constructor() {
    super();

    this.startAnimation = this.startAnimation.bind(this);
    this.getNextRoundState = this.getNextRoundState.bind(this);
    this.onShootShape = this.onShootShape.bind(this);

    this.state = {
      globalYPosition: new Animated.Value(Y_POSITION),
      globalTimer: TIME_PER_ROUND,
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
      duration: TIME_PER_ROUND * 1000,
      toValue: -Y_POSITION
    }).start((o) => {
      if (o.finished) {
        this.setState(this.getNextRoundState());
      }
    });
  }

  getNextRoundState() {
    this.state.globalYPosition.setValue(Y_POSITION);

    this.startAnimation();

    return {
      components: randomComponents(NUM_COMPONENTS),
      deathStarPosition: getRandomCoordinates(-Y_POSITION, Y_POSITION),
      round: this.state.round + 1
    };
  }

  onShootShape(clickPoint, resetOnClick=false) {
    return () => {
      const resetState = resetOnClick ? this.getNextRoundState() : {};
      this.setState({score: this.state.score + clickPoint, ...resetState});
    }
  }

  render() {
    const {globalYPosition, globalTimer, components, deathStarPosition, score, round} = this.state;
    NativeModules.DomOverlayModule.openOverlay({time: globalTimer, score: score, round: round + 1});
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
