import React from 'react'
import {Animated, View} from 'react-vr'

import Shape from './Shape'
import DeathStar from './DeathStar.vr.js';

import {getRandomCoordinates, randomComponents} from '../../helpers/ComponentGenerator';

const NUM_COMPONENTS = 10;
const Y_POSITION = 10;

export default class ShapeGenerator extends React.Component {
  constructor() {
    super();

    this.startAnimation = this.startAnimation.bind(this);
    this.shapeOnExit = this.shapeOnExit.bind(this);
    this.shapeOnEnter = this.shapeOnEnter.bind(this);

    this.state = {
      globalYPosition: new Animated.Value(Y_POSITION),
      components: randomComponents(NUM_COMPONENTS),
      scoreFunction: () => {},
      score: 0
    }
  }

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation() {
    Animated.timing(this.state.globalYPosition, {
      duration: 20000,
      toValue: -Y_POSITION
    }).start((o) => {
      if (o.finished) {
        this.state.globalYPosition.setValue(Y_POSITION);
        this.setState({components: randomComponents(NUM_COMPONENTS)});
        this.startAnimation();
      }
    });
  }

  shapeOnEnter() {
    this.setState({scoreFunction: () => {
      this.setState({score: this.state.score + 1});
    }});
  }

  shapeOnExit() {
    this.setState({scoreFunction: () => {}});
  }

  render() {
    const {globalYPosition, components, score} = this.state;
    console.log(score);
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
                xPosition={xPosition} yPosition={globalYPosition} zPosition={zPosition}
              />
            );
          })
        }

        <DeathStar coordinates={getRandomCoordinates(-Y_POSITION, Y_POSITION)}/>
      </View>
    );
  }
}
