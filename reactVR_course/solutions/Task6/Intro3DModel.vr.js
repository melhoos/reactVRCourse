import React from 'react';
import {
    Model,
    Animated,
    VrButton,
    asset
} from 'react-vr';

import { Easing } from 'react-native';

import { getRandomCoordinates } from '../game/ShapeGenerator';

export default class Intro3DModel extends React.Component {
    constructor() {
        super();
        this.state = {
            spin: new Animated.Value(0),
            coordinates: [0, 0, -3]
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

    onClickDeathStar() {
        const {coordinates} = this.state;
        this.setState({
            coordinates: getRandomCoordinates(1, 5)
        })
    }


  render() {
    const AnimatedModel = Animated.createAnimatedComponent(Model);
    const {spin, coordinates} = this.state;
    const spinYVale = this.state.spin.interpolate(
        {
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        }
    )
    return (
        <VrButton
            onClick={() => this.onClickDeathStar()}
            onClickSound={{
                mp3: asset('Laser_Blasts.mp3')
              }}
        >
            <AnimatedModel
                wireframe={false}
                source={{
                    obj: asset('death-star.obj'),
                }}
                style={{
                    transform: [
                        {translate: coordinates},
                        {rotateY: spinYVale}
                    ]
                }}
                texture={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/827672/death-star.png"}
            />
        </VrButton>
    );
  }
};
