import React from 'react'
import {VrButton, Text, Animated, asset} from 'react-vr'

class Shape extends React.Component {
  constructor() {
    super();

    this.state = {
      opacity: 1
    }
  }

  render() {
    const {yPosition, zPosition, xPosition, component, componentProps} = this.props;
    const Component = component;

    const {color, opacity} = this.state;
    const props = {...componentProps, style: { color: color ? color : componentProps.style.color, opacity: opacity}};
    return (
      <VrButton
        style={{
          transform: [
            {translate: [xPosition, yPosition, zPosition]}
          ]
        }}
        onClick={this.props.onClick}
        onClickSound={{mp3: asset('Laser_Blasts.mp3')}}
        onEnter={() => {
          this.setState({
            opacity: 0.2
          });
        }}
        onExit={() => {
          this.setState({
            opacity: 1
          });
        }}
      >
        <Component {...props}/>
    </VrButton>
  );
  }
}

export default Animated.createAnimatedComponent(Shape);
