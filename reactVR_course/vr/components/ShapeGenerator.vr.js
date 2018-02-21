import React from 'react'
import {Animated, View, Box, Sphere, Cylinder} from 'react-vr'

import Shape from './Shape'

function getRandomNumber(min, max) {
  return Math.round( Math.random() * (max - min) + min);
}
  
function randomBetween(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function randomShapeXZ() {
    return {
      zPosition: getRandomNumber(-7, 7),
      xPosition: getRandomNumber(-7, 7)
    }
}

function randomComponents(num) {
  var components = [];
  for (var i = 0; i < num; i++) {
    const {component, defaultProps} = SHAPES[randomBetween(0, SHAPES.length)]
    components.push({
      component,
      componentProps: {
        ...defaultProps,
        style: {
          color: COLORS[randomBetween(0, COLORS.length)]
        }
      },
      ...randomShapeXZ()
    });
  }
  return components;
}

const SHAPES = [
  {component: Box, defaultProps: {dimWidth: 0.6, dimHeight:0.6, dimDepth: 0.6, wireframe: true}},
  {component: Sphere, defaultProps: {radius: 0.5, widthSegments: 20, heightSegments: 12, wireframe: true}},
  {component: Cylinder, defaultProps: {radiusTop: 0.5, radiusBottom: 0.5, dimHeight: 2, segments: 12, wireframe: true}}
];

const COLORS = [
  'red',
  'blue',
  'green',
  'purple',
  'yellow'
];

const NUM_COMPONENTS = 10;
const Y_POSITION = 10;

export default class ShapeGenerator extends React.Component {
  constructor() {
    super();

    this.startAnimation = this.startAnimation.bind(this);

    this.state = {
      globalYPosition: new Animated.Value(Y_POSITION),
      components: randomComponents(NUM_COMPONENTS)
    }
  }

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation() {
    Animated.timing(this.state.globalYPosition, {
      duration: 10000,
      toValue: -Y_POSITION
    }).start((o) => {
      if (o.finished) {
        this.state.globalYPosition.setValue(Y_POSITION);
        this.setState({components: randomComponents(NUM_COMPONENTS)});
        this.startAnimation();
      }
    });
  }

  render() {
    const {globalYPosition, components} = this.state;
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
              />);
          })
        }
      </View>
    );
  }
}
