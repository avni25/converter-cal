import './App.css';
import React from 'react';
import BuckConverter from "./components/BuckConverter";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  
  componentDidMount(){
    document.title = "Converter"
  }

  render() {
    return (
      <div>
        <BuckConverter />
      </div>
    );
  }
}

export default App;
