import React from 'react';
import { Button } from 'react-bootstrap';
import {calculateBoostComps, calculateBuckComps} from "../converters/converters";


const style_btn = {
    backgroundColor: "E24F30"
};


export default class BuckConverter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            vin: 12,
            vout: 5,
            ripple: 0.01,
            freq: 40000,
            res: 10,
            htmlID: {
                vin:"vin",
                vout: "vout",
                ripple: "ripple",
                freq: "freq",
                res: "res"
            }
        }

        
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        // var regEx = /\d+/gi;
        console.log(e.target);
        this.setState({ ...this.state, [e.target.id]: e.target.value });   
    }

    handleClick(){
        
        this.setState({
            ...this.state,
            vin: parseFloat(this.state.vin),
            vout: parseFloat(this.state.vout),
            ripple: parseFloat(this.state.ripple),
            freq: parseFloat(this.state.freq),
            res: parseFloat(this.state.res)
        });
        console.log(this.state.ripple * 20);

        console.log(calculateBuckComps(this.state.vin, this.state.vout, this.state.ripple, this.state.freq, thisstate.res));


    }

    showMe(){        
        
        this.setState({
            ...this.state,
            vin: parseFloat(this.state.vin),
            vout: parseFloat(this.state.vout),
            ripple: parseFloat(this.state.ripple),
            freq: parseFloat(this.state.freq),
            res: parseFloat(this.state.res)
        });
    }

    componentWillUnmount(){
        console.log("unmount");  
    }

    componentDidUpdate(){
        console.log("updated");
        console.log(this.state);
        
    }


    render(){
        return(
            <div>
                <style type="text/css">
                    {`
                        .btn-calc {
                        background-color: purple;
                        color: white;
                        margin-left: 50px;
                        width: 100px;
                        }`
                    }
                </style>
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
                
                <Button  variant="calc" onClick={this.handleClick}>Calculate</Button>
            </div>
        )
    }

}

