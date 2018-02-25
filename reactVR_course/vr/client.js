// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
// Import process.js file which contains definitions required by react-dom
// to run on the client.
import '../process';
import {VRInstance} from 'react-vr-web';
import DomOverlayModule from '../DomOverlayModule';
import WebVRPolyFill from 'webvr-polyfill';

function init(bundle, parent, options) {
  // Add polyfill to allow for VR on iOS devices
  const polyfill = new WebVRPolyFill();

  // Create a div where the overlay will be displayed in the DOM.
  const domOverlayContainer = document.createElement('div');
  domOverlayContainer.id = 'dom-overlay';
  // Create an instance of the module, to be registered below.
  const domOverlayModule = new DomOverlayModule(domOverlayContainer);

  const vr = new VRInstance(bundle, 'IteraGame', parent, {
    // Add custom options here
    /* raycasters: [{
      getType: () => "simple",
      getRayOrigin: () => [0, 0, 0],
      getRayDirection: () => [0, 0, -1],
      drawsCursor: () => true
    }],
    cursorVisibility: 'visible', */
    enableHotReload: true,
    ...options,
    // Register dom overlay module upon initialization.
    nativeModules: [domOverlayModule],
  });

  // Inject DOM overlay container to the player so that it is rendered properly.
  vr.player._wrapper.appendChild(domOverlayContainer);

  vr.render = function() {
    // Any custom behavior you want to perform on each frame goes here
  };
  // Begin the animation loop
  vr.start();
  return vr;
}

window.ReactVR = {init};
