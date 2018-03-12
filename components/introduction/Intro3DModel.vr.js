import React from 'react';
import {
    asset,
    Model,
    Animated,
    VrButton
} from 'react-vr';

import { getRandomCoordinates }  from '../../helpers/ComponentGenerator';

import {Easing} from 'react-native';


export default class Intro3DModel extends React.Component {
  constructor() {
    super();
    this.state = {
      spin: new Animated.Value(0),
      coordinate: [0, 0, -3]
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

  onClickDeathStar() {
    const {coordinate} = this.state;
    this.setState({
      coordinate: getRandomCoordinates(-5,5)
    })
    this.props.onClick();
  }

  render() {
    const AnimatedModel = Animated.createAnimatedComponent(Model);
    const {coordinate} = this.state;
    const spinYValue = this.state.spin.interpolate(
      {
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      }
    )
    return (
<<<<<<< HEAD
      <VrButton onClick={() => this.onClickDeathStar()} onClickSound={{mp3: asset('Laser_Blasts.mp3')}}>
      <AnimatedModel
      source = {{
        obj: asset('death-star.obj'),
      }}
      style={{
        transform: [
          {translate: coordinate},
          {rotateY: spinYValue}
        ]
      }}
      //wireframe={true}
      texture={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/827672/death-star.png"}
      />
      </VrButton>
=======
      <View/>
>>>>>>> 1280eb018ec72754533f61a2a59fddf3d578c847
    );
  }
};
