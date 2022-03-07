import React from 'react';

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
                vin:"v-in",
                vout: "v-out",
                ripple: "ripple",
                freq: "freq",
                res: "res"
            }
        }

        
        // this.handleChange = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        var regEx = /\d+/gi;
        console.log(e.target);
        if(e.target.id == this.state.htmlID.vin){
            // if(regEx.test(e.target.value)){            
            //     this.setState({vin: parseFloat(e.target.value)});
            // }
            this.setState({...this.state, vin: e.target.value});
        }else if(e.target.id == this.state.htmlID.vout){
            this.setState({vout: e.target.value});
        }else if(e.target.id == this.state.htmlID.ripple){
            this.setState({ripple: e.target.value});
        }else if(e.target.id == this.state.htmlID.freq){
            this.setState({freq: e.target.value});
        }else if(e.target.id == this.state.htmlID.res){
            this.setState({res: e.target.value});
        }else{

        }

        
    }

    // handleClick(e){
        
    //     this.setState({
    //         ...this.state,
    //         vin: parseFloat(this.state.vin),
    //         vout: parseFloat(this.state.vout),
    //         ripple: parseFloat(this.state.ripple),
    //         freq: parseFloat(this.state.freq),
    //         res: parseFloat(this.state.res)
    //     });
    //     console.log(this.state);
    // }

    showMe(){
        this.setState({
            ...this.state,
            vin: parseFloat(this.state.vin),
            vout: parseFloat(this.state.vout),
            ripple: parseFloat(this.state.ripple),
            freq: parseFloat(this.state.freq),
            res: parseFloat(this.state.res)
        });
       
        console.log(this.state);
    }

    componentWillUnmount(){
        console.log("unmount");  
    }

    componentDidUpdate(){
        console.log("updated");
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
                
                <button onClick={()=>{this.showMe()}}>Calculate</button>
            </div>
        )
    }

}

