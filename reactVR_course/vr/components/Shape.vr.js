import React from 'react'
import {View, Text, Animated} from 'react-vr'

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
    const {opacity} = this.state;

    const props = {...componentProps, style: { opacity: opacity}};
    return (
      <View
        style={{
          transform: [
            {translate: [xPosition, yPosition, zPosition]}
          ]
        }}
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
    </View>
  );
  }
}

export default Animated.createAnimatedComponent(Shape);
