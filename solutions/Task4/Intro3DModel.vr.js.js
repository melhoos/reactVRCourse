import React from 'react';
import {
    Model, 
    Animated,
    asset
} from 'react-vr';

import {Easing} from 'react-native';

export default class Intro3DModel extends React.Component {
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
    const AnimatedModel = Animated.createAnimatedComponent(Model);
    const {spin} = this.state;
    const spinYVale = this.state.spin.interpolate(
        {
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        }
    )
    return (
        <AnimatedModel
            wireframe={false}
            source={{
                obj: asset('death-star.obj'),
            }}
            style={{
                transform: [
                    {translate: [0, 0, -3]},  // x = 0, y=2, z= -3
                    {rotateY: spinYVale}
                ]
            }}
            texture={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/827672/death-star.png"}
        />
    );
  }
};