import React from 'react'
import {Animated, View} from 'react-vr'

import Shape from './Shape'
import DeathStar from './DeathStar.vr.js';

import {getRandomCoordinates, randomComponents} from '../../helpers/ComponentGenerator';

const NUM_COMPONENTS = 10;
const Y_POSITION = 8;

export default class ShapeGenerator extends React.Component {
  constructor() {
    super();

    this.startAnimation = this.startAnimation.bind(this);
    this.onShootShape = this.onShootShape.bind(this);

    this.state = {
      globalYPosition: new Animated.Value(Y_POSITION),
      components: randomComponents(NUM_COMPONENTS),
      score: 0,

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
        this.state.globalYPosition.setValue(Y_POSITION);
        this.setState({components: randomComponents(NUM_COMPONENTS)});
        this.startAnimation();
      }
    });
  }

  onShootShape(hitPoint=-1) {
    return () => this.setState({score: this.state.score + hitPoint});
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
                onClick={this.onShootShape()}
                xPosition={xPosition} yPosition={globalYPosition} zPosition={zPosition}
              />
            );
          })
        }
        <DeathStar coordinates={getRandomCoordinates(-Y_POSITION, Y_POSITION)} onClick={this.onShootShape(1)}/>
      </View>
    );
  }
}
