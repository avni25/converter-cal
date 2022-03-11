import React from 'react';
import { Button } from 'react-bootstrap';
import {calculateBuckComps} from "../converters/converters";



export default class BuckConverter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            vin: 12,
            vout: 5,
            ripple: 0.005,
            freq: 40000,
            res: 10,
            safety: 1.25,
            resultsDisplay: false,
            results: {
                inductor: 0,
                capacitor: 0,
                irms:0,
                imax: 0,
                imin: 0,
                d:0
            },
            htmlID: {
                vin:"vin",
                vout: "vout",
                ripple: "ripple",
                freq: "freq",
                res: "res",
                safety: "safety"
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
        var arr = calculateBuckComps(this.state.vin, this.state.vout, this.state.ripple, this.state.freq, this.state.res, this.state.safety);

        this.setState({
            ...this.state,
            vin: parseFloat(this.state.vin),
            vout: parseFloat(this.state.vout),
            ripple: parseFloat(this.state.ripple),
            freq: parseFloat(this.state.freq),
            res: parseFloat(this.state.res),
            resultsDisplay: true,
            results:{
                inductor: arr[0],
                capacitor: arr[1],
                irms: arr[2],
                imax: arr[3],
                imin: arr[4],
                d: arr[5]
            }
        });        
        
        if(this.state.vin< this.state.vout){
            console.log("wrong input!!");
        }else{
            console.log(arr);
        }
        
    }


    componentWillUnmount(){
        console.log("unmount");  
    }

    componentDidUpdate(){
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
                {/* <InputGroup vin={this.state.vin} vout={this.state.vout} ripple={this.state.ripple} freq={this.state.freq} res={this.state.res} safety={this.state.safety}/> */}
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
                <Button  variant="calc" onClick={this.handleClick}>Calculate</Button>              
                <div id="buck-results-container"> 
                        { this.state.resultsDisplay ?
                            <div>
                                <h1>Results</h1>
                                <p><span>inductor: </span> {this.state.results.inductor} </p>
                                <p><span>capacitor: </span> {this.state.results.capacitor} </p>
                                <p><span>Irms: </span> {this.state.results.irms} </p>
                                <p><span>Imax: </span> {this.state.results.imax} </p>
                                <p><span>Imin: </span> {this.state.results.imin} </p>
                                <p><span>D: </span> {this.state.results.d} </p>
                            </div>                        
                         : 
                            <h1></h1> } </div>
            </div>
        )
    }

}

