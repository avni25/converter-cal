import './App.css';
import React from 'react';
import BuckConverter from "./components/BuckConverter";
import BoostConverter from './components/BoostConverter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


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
        <Tabs>
          <TabList>
            <Tab id="tab-buck">BUCK</Tab>
            <Tab>BOOST</Tab>
          </TabList>

          <TabPanel>
            <div id="buck-container">
              <BuckConverter />
            </div>
          </TabPanel>

          <TabPanel>
            <div id="boost-container">
              <BoostConverter />
            </div>
          </TabPanel>
        </Tabs>
        
      </div>
    );
  }
}

export default App;
