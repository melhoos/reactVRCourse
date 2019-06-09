import React from 'react'
import {View, NativeModules, Animated, DirectionalLight, AmbientLight} from 'react-vr'

import Intro3DModel from '../introduction/Intro3DModel.vr.js';
import ComponentGenerator from '../../helpers/ComponentGenerator';

const NUM_COMPONENTS = 10;
const Y_POSITION = 8;

export default class Game extends React.Component {
  constructor() {
    super();

    const yPosition = new Animated.Value(Y_POSITION);
    this.state = {
      score: 0,
      globalYPosition: yPosition,
      Obstacles: () => <ComponentGenerator numberOfComponents={NUM_COMPONENTS} />
    };
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

  onShootShape(point) {
    const {score} = this.state;
    this.setState({
      score: score + point
    })
  }

  render() {
    const {score, globalYPosition} = this.state;
    NativeModules.DomOverlayModule.openOverlay({score: score})
      return (
        <View>
          <DirectionalLight intensity={2} style={{transform: [{translateY: 10}]}}/>
          <AmbientLight intensity={0.5}/>
          <Intro3DModel onClick={() => this.onShootShape(1)}/>
          <ComponentGenerator
            yPosition={globalYPosition}
            numberOfComponents={10}
            onClick={() => {
              this.onShootShape(-1)
            }}
          />
        </View>
      );

  }
}
