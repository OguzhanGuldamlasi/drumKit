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
                <div>
                    <DrumKit audio={clap} code={65}/>
                    <DrumKit audio={hihat} code={83}/>
                    <DrumKit audio={kick} code={68}/>
                    <DrumKit audio={openhat} code={70}/>
                    <DrumKit audio={boom} code={71}/>
                    <DrumKit audio={ride} code={72}/>
                    <DrumKit audio={snare} code={74}/>
                    <DrumKit audio={tom} code={75}/>
                    <DrumKit audio={tink} code={76}/>
                </div>
            )
        }
}

export default HomePage;