import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {CubeListView} from './cubeList';
import {CubePreview} from './cubePreview';
import {ComputeText} from './computeText';

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
                        <ComputeText text='CUBES AND SQUARES' />
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
