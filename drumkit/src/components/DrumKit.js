import '../styles/DrumKit.css';
import React from 'react';
import PropTypes from 'prop-types';

class DrumKit extends React.Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
    this.endSound = this.endSound.bind(this);
    this.state = {
      playing: false,
      className: 'simpleButton',
      module: null,
    };
    window.addEventListener('keydown', this.playSound);

    this.audioName = this.props.ring;
        import(`../sounds/${this.audioName}` + '.wav').then((module) => this.setState({ module }));
  }

  endSound() {
    this.setState({
      playing: false,
    });
  }

  playSound(event) {
    if (event.keyCode === this.props.code || event.type === 'click') {
      new Audio(this.state.module.default).play();
    } else {
      return;
    }
    this.setState({
      playing: true,
    });
  }

  render() {
    const playing = this.state.playing ? 'isRinging' : '';
    return (
      <div>
        <button
          onTransitionEnd={this.endSound}
          className={this.state.className}
          id={playing}
          onClick={this.playSound}
        >
          <kbd>{this.props.letter}</kbd>
          <span className="sound">{this.props.ring}</span>
        </button>
      </div>
    );
  }
}
DrumKit.propTypes = {
  ring: PropTypes.string,
  letter: PropTypes.string,
  code: PropTypes.number,
};
export default DrumKit;
