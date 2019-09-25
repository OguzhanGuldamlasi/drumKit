import '../styles/HomePage.css'
import React from 'react'
import DrumKit from "./DrumKit";
import clap from '../sounds/clap.wav';
import hihat from '../sounds/hihat.wav';
import kick from '../sounds/kick.wav';
import openhat from '../sounds/openhat.wav';
import boom from '../sounds/boom.wav';
import ride from '../sounds/ride.wav';
import snare from '../sounds/snare.wav';
import tom from '../sounds/tom.wav';
import tink from '../sounds/tink.wav';
class HomePage extends React.Component{//Container Component
    render(){
        return(
            <div className='container'>
                <DrumKit letter='A' ring='clap' audio={clap} code={65}/>
                <DrumKit letter='S' ring='hihat' audio={hihat} code={83}/>
                <DrumKit letter='D' ring='kick' audio={kick} code={68}/>
                <DrumKit letter='F' ring='openhat' audio={openhat} code={70}/>
                <DrumKit letter='G' ring='boom' audio={boom} code={71}/>
                <DrumKit letter='H' ring='ride' audio={ride} code={72}/>
                <DrumKit letter='J' ring='snare' audio={snare} code={74}/>
                <DrumKit letter='K' ring='tom' audio={tom} code={75}/>
                <DrumKit letter='L' ring='tink' audio={tink} code={76}/>
            </div>
        )
    }
}

export default HomePage;