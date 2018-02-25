import React from 'react';

// A simple textbox overlay that takes over the screen and displays some text.
// The component will get its props via the DOMOverlayModule and use those to render
// the content.
const StickyHeader = props => {
  return (
    <div className="container">
      <div className="content">
        <div className="score">{props.score}</div>
        <div className="time">Tid: {props.time} s</div>
      </div>
    </div>
  );
};

export default StickyHeader;
