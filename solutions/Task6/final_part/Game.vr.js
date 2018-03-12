import React from 'react'
import {View, NativeModules, DirectionalLight, AmbientLight} from 'react-vr'

import Intro3DModel from '../introduction/Intro3DModel.vr.js';
import ComponentGenerator from '../../helpers/ComponentGenerator';


export default class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      score: 0
    }
  }

  onClick() {
    this.setState({
      score: this.state.score + 1
    })
  }

  render() {
    const { score } = this.state
    NativeModules.DomOverlayModule.openOverlay({score: score})
    return (
      <View>
        <DirectionalLight
          intensity={2}
          style={{
            transform:[{translate:[0,10,0]}]
          }}
        />
      <AmbientLight intensity={0.5}/>
        <ComponentGenerator numberOfComponents={20}/>
        <Intro3DModel onClick={() => this.onClick()}/>
      </View>
    );
  }
}
