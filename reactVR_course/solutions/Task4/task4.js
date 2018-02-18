import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  View,
  Model,
  Animated
} from 'react-vr';

import { Easing } from 'react-native';

export default class reactVR_course extends React.Component {
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
       duration: 5000,
       easing: Easing.linear
      }
    ).start( () => this.spinAnimation());
  }

  render() {
    const spin = this.state.spin.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    const AnimatedModel = Animated.createAnimatedComponent(Model);
    return (
      <View>
        <Pano source={asset('space.jpg')}/>
        <AnimatedModel
          wireframe={false}
          source={{
            obj: asset('death-star.obj'),
          }}
          style={{
            transform: [
              {translate: [2,0,-4]},
              {rotateY: spin}
            ]
          }}
          texture={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/827672/death-star.png"}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('reactVR_course', () => reactVR_course);
