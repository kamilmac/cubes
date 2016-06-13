import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Services} from '../services';

@observer
export class CubePreview extends Component {
    clearPreview() {
        Services.ui.setActivePreview('');
    }
    render() {
        let src = Services.ui.activePreview;
        return (
            <div className='cubePreview' 
                onClick={this.clearPreview}
                style={ {display: (src.length) ? 'block' : 'none'} }>
                <div className='cubePreview__img' style={ {backgroundImage: 'url(' + src + ')'} }></div>
            </div>
        );
    }
};
