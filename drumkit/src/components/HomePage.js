import '../styles/HomePage.css';
import React from 'react';
import DrumKit from './DrumKit';

// eslint-disable-next-line react/prefer-stateless-function
class HomePage extends React.Component {
  render() {
    return (
    // eslint-disable-next-line react/jsx-filename-extension
      <div className="container">
        <DrumKit letter="A" ring="clap" code={65} />
        <DrumKit letter="S" ring="hihat" code={83} />
        <DrumKit letter="D" ring="kick" code={68} />
        <DrumKit letter="F" ring="openhat" code={70} />
        <DrumKit letter="G" ring="boom" code={71} />
        <DrumKit letter="H" ring="ride" code={72} />
        <DrumKit letter="J" ring="snare" code={74} />
        <DrumKit letter="K" ring="tom" code={75} />
        <DrumKit letter="L" ring="tink" code={76} />
      </div>
    );
  }
}

export default HomePage;
