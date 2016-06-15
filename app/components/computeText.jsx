import React, {Component} from 'react';

export class ComputeText extends Component {
    constructor(props) {
        super(props);
        this.state = {txt: ''};
    };
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