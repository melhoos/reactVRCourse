import React from 'react';
import {
  asset,
  Model,
  VrButton,
  Animated
} from 'react-vr';
import { Easing } from 'react-native';

export default class DeathStar extends React.Component {
  constructor() {
    super();
    this.state = { 
      spin: new Animated.Value(0)
    };
  }

  componentDidMount() {
    this.spinAnimation();
  }

  spinAnimation() {
    this.state.spin.setValue(0);
    Animated.timing(
      this.state.spin,
      {
       toValue: 1,
       duration: 10000,
       easing: Easing.linear
      }
    ).start( () => this.spinAnimation());
  }

  render() {
    const spin = this.state.spin.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    const {coordinates} = this.props; 
    const AnimatedModel = Animated.createAnimatedComponent(Model);
    return (
      <VrButton onClickSound={{
        mp3: asset('Laser_Blasts.mp3')
      }}>
      <AnimatedModel
        wireframe={false}
        source={{
          obj: asset('death-star.obj'),
        }}
        style={{
          transform: [
            {translate: coordinates},
            {rotateY: spin}
          ]
        }}
        texture={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/827672/death-star.png"}
      />
      </VrButton>
    );
  }
};
