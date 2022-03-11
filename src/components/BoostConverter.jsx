import React from 'react';
import { Button } from 'react-bootstrap';
import {calculateBoostComps} from "../converters/converters";

  

export default class BoostConverter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bvin: 5,
            bvout: 12,
            bripple: 0.01,
            bfreq: 25000,
            bres: 50,
            bsafety: 1.2,
            htmlID: {
                vin:"bvin",
                vout: "bvout",
                ripple: "bripple",
                freq: "bfreq",
                res: "bres",
                safety: "bsafety"
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        
    }

    handleChange(e){
        // var regEx = /\d+/gi;
        console.log(e.target);
        this.setState({ ...this.state, [e.target.id]: e.target.value });   
    }

    componentWillUnmount(){
        console.log("unmount");  
    }

    componentDidUpdate(){
        console.log(this.state);        
    }
    handleClick(){
        
        this.setState({
            ...this.state,
            bvin: parseFloat(this.state.bvin),
            bvout: parseFloat(this.state.bvout),
            bripple: parseFloat(this.state.bripple),
            bfreq: parseFloat(this.state.bfreq),
            bres: parseFloat(this.state.bres)
        });
        var arr = calculateBoostComps(this.state.bvin, this.state.bvout, this.state.bripple, this.state.bfreq, this.state.bres, this.state.bsafety);
        if(this.state.bvin > this.state.bvout){
            console.log("wrong input!!");
        }else{
            
            console.log(arr);
        }
        
    }

    render(){
        return(
            <div>
                 <p>
                    <label htmlFor={this.state.htmlID.vin}>Vin</label>
                    <input id={this.state.htmlID.vin} onChange={this.handleChange} value={this.state.bvin}/>
                </p>
                <p>
                    <label htmlFor={this.state.htmlID.vout}>Vout</label>
                    <input id={this.state.htmlID.vout} onChange={this.handleChange} value={this.state.bvout}/>
                </p>
                <p>
                    <label htmlFor={this.state.htmlID.ripple}>Ripple</label>
                    <input id={this.state.htmlID.ripple} onChange={this.handleChange} value={this.state.bripple}/>
                </p>
                <p>
                    <label htmlFor={this.state.htmlID.freq}>Freq</label>
                    <input id={this.state.htmlID.freq} onChange={this.handleChange} value={this.state.bfreq}/>
                </p>
                <p>
                    <label htmlFor={this.state.htmlID.res}>Res</label>
                    <input id={this.state.htmlID.res} onChange={this.handleChange} value={this.state.bres}/>
                </p>
                <p>
                    <label htmlFor={this.state.htmlID.safety}>Safety %</label>
                    <input id={this.state.htmlID.safety} onChange={this.handleChange} value={this.state.bsafety}/>
                </p>
                <Button  variant="primary" onClick={this.handleClick}>Calculate</Button>   
            </div>
        );
    }
}