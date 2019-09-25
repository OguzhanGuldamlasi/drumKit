import '../styles/DrumKit.css'
import React from 'react'

class DrumKit extends React.Component{
    constructor(props){
        super(props);
        this.playSound=this.playSound.bind(this);//We need different methods for each of drumkits.
        this.endSound=this.endSound.bind(this);
        this.state={
            playing:false,
            className:'simpleButton'
        };
        window.addEventListener('keydown',this.playSound);
        this.audio=new Audio(this.props.audio);
    }
    endSound(){
        this.setState({
            playing:false
        })
    }
    playSound(event){
        if(event.keyCode===this.props.code||event.type==='click'){
            this.audio.play();
        }
        else{
            return ;
        }
        this.setState({
            playing:true
        });
    }
    render(){
        const playing=this.state.playing? "isRinging" : "";
        return (
            <div>
                <button
                     onTransitionEnd={this.endSound}
                     className={this.state.className}
                     id={playing}
                     onClick={this.playSound}>
                    <kbd>{this.props.letter}</kbd>
                    <span className='sound'>{this.props.ring}</span>
                </button>
            </div>
        )
    }
}
export default DrumKit;