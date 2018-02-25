import React from 'react';

let timer;

// A simple textbox overlay that takes over the screen and displays some text.
// The component will get its props via the DOMOverlayModule and use those to render
// the content.
class StickyHeader extends React.Component {

  constructor(props) {
    super(props);

    this.updateTime = this.updateTime.bind(this);

    this.state = {
      time: props.time
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps, this.props);
    if (nextProps.round !== this.props.round) {
      this.updateTime(true);
    }
  }

  componentDidMount() {
    this.updateTime();
  }

  updateTime(resetTimer=false) {
    const {time} = this.state;
    const shouldReset = time <= 0 || resetTimer;
    if (time > 0) {
      this.setState({time: time - 1});
    }
    if (shouldReset) clearInterval(timer);
    timer = setTimeout(this.updateTime, 1000);
    if(shouldReset) this.setState({time: this.props.time});
  }

  render() {
    const {time} = this.state;
    const {score, round} = this.props;
    return (
      <div className="container">
        <div className="content">
          <div className="score">Poeng: {score}</div>
          <div className="time">Tid: {time} s</div>
          <div className="round">Runde: {round}</div>
        </div>
      </div>
    );
  }
};

export default StickyHeader;
