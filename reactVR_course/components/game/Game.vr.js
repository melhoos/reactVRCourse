import React from 'react';
import {asset, Pano, View, NativeModules} from 'react-vr';
import ShapeGenerator from './ShapeGenerator'

export default class Game extends React.Component {
   render() {
     // Use the DOM overlay module to display time and score
     NativeModules.DomOverlayModule.openOverlay({time: 20, score: 1000});
     return (
        <View>
            <ShapeGenerator/>
        </View>
        );
    }
};