import React from 'react'
import {View, Text, Animated} from 'react-vr'

class Shape extends React.Component {
  constructor() {
    super();

    this.state = {
      color: ''
    }
  }

  render() {
    const {yPosition, zPosition, xPosition, component, componentProps} = this.props;
    const Component = component;
    const {color} = this.state;

    const props = {...componentProps, style: { color: color ? color : componentProps.style.color}};
    return (
      <View
        style={{
          transform: [
            {translate: [xPosition, yPosition, zPosition]}
          ]
        }}
        onEnter={() => {
          this.setState({color: 'white'});
        }}
        onExit={() => {
          this.setState({color: ''});
        }}
      >
        <Component {...props}/>
    </View>
  );
  }
}

export default Animated.createAnimatedComponent(Shape);
