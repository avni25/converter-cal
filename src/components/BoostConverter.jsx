import React from 'react';
import { Button } from 'react-bootstrap';
import {calculateBuckComps} from "../converters/converters";


export default class BoostConverter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            vin: 12,
            vout: 5,
            ripple: 0.05,
            freq: 40000,
            res: 10,
            safety: 1.25,
            htmlID: {
                vin:"boost-vin",
                vout: "boost-vout",
                ripple: "boost-ripple",
                freq: "boost-freq",
                res: "boost-res",
                safety: "boost-safety"
            }
        }
    }



    render(){
        return(
            <div>
                <h1>qweqwe</h1>
            </div>
        );
    }
}