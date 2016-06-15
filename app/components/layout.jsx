import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {CubeListView} from './cubeList';
import {CubePreview} from './cubePreview';

@observer
export class Layout extends Component {
    render() {
        return (
            <div>
                <div className='header'>
                    <a href='https://www.linkedin.com/in/kamil-macinski-56b68941' target='_blank'>LINKEDIN</a>
                    <a href='https://github.com/kamilmac' target='_blank'>GITHUB</a>
                    <span>K.MACINSKI</span>
                </div>
                <div className='hero'>
                    <div className='hero__about'>
                        <Compute text='CUBES AND SQUARES' />
                    </div>
                </div>
                <div className='aboutCubes'>
                    <div>
                        <div className='aboutCubes__header'>3d abstract pretty things</div>
                        <div className='aboutCubes__desc'>My 3d works modelled with Blender + Octane Lua procedural scripting.</div>
                    </div>
                </div>
                <CubeListView/>
                <CubePreview/>
            </div>
        );
    }
};

export class Compute extends Component {
    constructor(props) {
        super(props);
        this.state = {txt: ''};
    }
    componentWillMount() {
        let finalText = this.props.text,
            chars = finalText.split('').filter(char => char!=' ').concat('#','$','%','&','0'),
            txt = finalText.split('').map(char => ' ');
            this.setState({txt: txt.join('')});
        setTimeout(()=>{
            let compute = setInterval(() => {
                for(let i = 0, l = finalText.length; i < l; i++) {
                    if(txt[i] != finalText[i] && finalText[i] != ' ') {
                        txt[i] = chars[Math.floor(Math.random() * chars.length)];
                    }
                }
                this.setState({txt: txt.join('')});
                if(finalText == txt.join('')) {
                    clearInterval(compute);
                }
            }, 60);
        }, 600);
    };
    render() {
        return (
            <span>
                {this.state.txt}
            </span>
        )
    }
}