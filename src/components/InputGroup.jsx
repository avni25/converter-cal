import React from 'react';
import { Button } from 'react-bootstrap';
import BuckConverter from './BuckConverter';

export default class InputGroup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            vin: this.props.vin,
            vout: this.props.vout,
            ripple: this.props.ripple,
            freq: this.props.freq,
            res: this.props.res,
            safety: this.props.safety,
            htmlID: {
                vin:"vin",
                vout: "vout",
                ripple: "ripple",
                freq: "freq",
                res: "res",
                safety: "safety"
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e){
        this.setState({ ...this.state, [e.target.id]: e.target.value });  
    }

    handleClick(e){
        console.log(this.state);
        console.log(e.target);
    }


    render(){
        return(
            <div>
                 
                <p>
                    <label htmlFor={this.state.htmlID.vin}>Vin</label>
                    <input id={this.state.htmlID.vin} onChange={this.handleChange} value={this.state.vin}/>
                </p>
                <p>
                    <label htmlFor={this.state.htmlID.vout}>Vout</label>
                    <input id={this.state.htmlID.vout} onChange={this.handleChange} value={this.state.vout}/>
                </p>
                <p>
                    <label htmlFor={this.state.htmlID.ripple}>Ripple</label>
                    <input id={this.state.htmlID.ripple} onChange={this.handleChange} value={this.state.ripple}/>
                </p>
                <p>
                    <label htmlFor={this.state.htmlID.freq}>Freq</label>
                    <input id={this.state.htmlID.freq} onChange={this.handleChange} value={this.state.freq}/>
                </p>
                <p>
                    <label htmlFor={this.state.htmlID.res}>Res</label>
                    <input id={this.state.htmlID.res} onChange={this.handleChange} value={this.state.res}/>
                </p>
                <p>
                    <label htmlFor={this.state.htmlID.safety}>Safety %</label>
                    <input id={this.state.htmlID.safety} onChange={this.handleChange} value={this.state.safety}/>
                </p>
            </div>
        );
    };
}