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
        let chars = this.props.text.split('').filter(char => char!=' '),
            txt = this.props.text.split('').map(char => ' ');
            this.setState({txt: txt.join('')});
        setTimeout(()=>{
            let compute = setInterval(() => {
                let new_chars = [];
                for(let i = 0, l = this.props.text.length; i < l; i++) {
                    if(txt[i] != this.props.text[i] && this.props.text[i] != ' ') {
                        txt[i] = chars[Math.floor(Math.random() * chars.length)];
                    }
                }
                this.setState({txt: txt.join('')});
                if(this.props.text == txt.join('')) {
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