import {Box, Sphere, Cylinder} from 'react-vr';

const SHAPES = [
  {component: Box, defaultProps: {dimWidth: 0.6, dimHeight:0.6, dimDepth: 0.6}},
  {component: Sphere, defaultProps: {radius: 0.5, widthSegments: 20, heightSegments: 12}},
  {component: Cylinder, defaultProps: {radiusTop: 0.5, radiusBottom: 0.5, dimHeight: 2, segments: 12}}
];

const COLORS = [
  'red',
  'blue',
  'green',
  'purple',
  'yellow'
];

function getRandomNumber(min, max) {
  return Math.round( Math.random() * (max - min) + min);
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function randomXZPosition() {
    return {
      zPosition: getRandomNumber(-7, 7),
      xPosition: getRandomNumber(-7, 7)
    }
}

export function getRandomCoordinates(min, max) {
  const randomCoordinates = [0,0,0];
  randomCoordinates.forEach( (coor, i) => {
    randomCoordinates[i] = getRandomNumber(min, max);
  })
  return randomCoordinates;
}

export function randomComponents(num) {
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
      ...randomXZPosition()
    });
  }
  return components;
}
