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
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomCoordinate(min, max) {
  let randomCoordinate = 0
  // we want to avoid objects being placed on top of ourselves
  while (Math.abs(randomCoordinate) <= 1) {
    randomCoordinate = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return randomCoordinate;
}

function randomXZPosition() {
    return {
      zPosition: getRandomCoordinate(-7, 7),
      xPosition: getRandomCoordinate(-7, 7)
    }
}

export function getRandomCoordinates(min, max) {
  const randomCoordinates = [0,0,0];
  randomCoordinates.forEach( (coor, i) => {
    randomCoordinates[i] = getRandomCoordinate(min, max);
  })
  return randomCoordinates;
}

export function randomComponents(num) {
  var components = [];
  for (var i = 0; i < num; i++) {
    const {component, defaultProps} = SHAPES[getRandomNumber(0, SHAPES.length-1)]
    components.push({
      component,
      componentProps: {
        ...defaultProps,
        style: {
          color: COLORS[getRandomNumber(0, COLORS.length-1)]
        }
      },
      ...randomXZPosition()
    });
  }
  return components;
}
