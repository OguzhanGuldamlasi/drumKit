
import '../styles/DrumKit.css'
import React from 'react'

class DrumKit extends React.Component{
    constructor(props){
        super(props);
        this.playSound=this.playSound.bind(this);//We need different methods for each of drumkits.
        this.endSound=this.endSound.bind(this);
        this.state={
            playing:false,
            className:'simpleButton',
            module:null
        };
        window.addEventListener('keydown',this.playSound);
        this. audioName=this.props.ring;
        import(`../sounds/${this.audioName}`+'.wav').then(
            function (module) {
                window.value=module;
            }
        );


    }
    endSound(){
        this.setState({
            playing:false
        })
    }
    playSound(event){
        import(`../sounds/${this.audioName}`+'.wav').then(
            function (module) {
                window.value=module;
            }
        );
        if(event.keyCode===this.props.code||event.type==='click'){
            new Audio(window.value.default).play();
            window.value=null;
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