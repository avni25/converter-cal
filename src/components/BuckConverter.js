import React from 'react';

export default class BuckConverter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            vin: 12,
            vout: 5,
            ripple: 0.01,
            freq: 40000,
            res: 10
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        var regEx = /\d+/gi;
        console.log(e);
        if(e.target.id == "v-in"){
            if(regEx.test(e.target.value)){            
                this.setState({vin: parseFloat(e.target.value)});
            }
            
        }else if(e.target.id == "v-out"){

        }
        console.log(this.state);
    }

    showMe(){
        console.log();
    }

    componentWillUnmount(){
        console.log("unmount");  
    }



    render(){
        return(
            <div>
                <label htmlFor="v-in">Vin</label>
                <input id="v-in" onChange={this.handleChange} value={this.state.vin}/>
                <label htmlFor="v-out">Vout</label>
                <input id="v-out" onChange={this.handleChange} value={this.state.vout}/>
                <label htmlFor="ripple">Ripple</label>
                <input id="ripple" onChange={this.handleChange} value={this.state.ripple}/>
                <label htmlFor="freq">Freq</label>
                <input id="freq" onChange={this.handleChange} value={this.state.freq}/>
                <label htmlFor="res">Res</label>
                <input id="res" onChange={this.handleChange} value={this.state.res}/>
                <button onClick={()=>{this.showMe()}}>Calculate</button>
            </div>
        )
    }

}

