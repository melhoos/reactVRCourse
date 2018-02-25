import React from 'react';
import {AppRegistry, asset, Pano, View, NativeModules} from 'react-vr';

import IntroText from './components/introduction/IntroText';
import ShapeGenerator from './components/game/ShapeGenerator'

export default class IteraGame extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
      </View>
    );
  }
};

// export default class IteraGame extends React.Component {
//   render() {
//     // Use the DOM overlay module to display time and score
//     NativeModules.DomOverlayModule.openOverlay({time: 20, score: 1000});
//     return (
//       <View>
//         <Pano source={asset('space.jpg')}/>
//         <ShapeGenerator/>
//       </View>
//     );
//   }
// };

AppRegistry.registerComponent('IteraGame', () => IteraGame);
