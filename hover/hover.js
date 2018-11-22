import React, {Component} from 'react';
import './hover.css';

export default class hover extends Component {
    constructor(props){
        super(props);
        this.state = {
            x: 0,
            y: 0
        }
    }

    onMouseMove = (e) => {
        this.setState({
            x: e.clientX + 15,
            y: e.clientY + 10
        })
    }

    render() {
        const { children="", panel="", panelStyle={}, wrapperStyle={}, wrapperClass='hoverWrapper',panelClass='hoverPanel' } = this.props;
        const { x, y } = this.state;
        return (
            <div onMouseMove={this.onMouseMove} className={wrapperClass} style={wrapperStyle}>
                {children}

                <div className={panelClass} style={{position:'fixed', left: x, top: y, ...panelStyle}}>{panel}</div>
            </div>
        )
    }
} 
