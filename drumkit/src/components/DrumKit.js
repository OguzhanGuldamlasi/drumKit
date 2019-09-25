import React from 'react'

class DrumKit extends React.Component{
    constructor(props){
        super(props);
        this.playSound=this.playSound.bind(this);//We need different methods for each of drumkits.
        window.addEventListener('keydown',this.playSound);
        this.audio=new Audio(this.props.audio);
    }
    playSound(event){
        if(event.keyCode===this.props.code||event.type==='click'){
            this.audio.play();
        }
    }
    render(){

        return (

            <button onClick={this.playSound}>
            </button>
        )
    }
}
export default DrumKit;