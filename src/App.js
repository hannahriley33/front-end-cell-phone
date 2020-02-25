import React, { Component } from 'react';
import CellList from './CellList.js'
import request from 'superagent';
import Header from './Header.js';
import CellCard from './CellCard.js'
import './App.css';
import CellDetail from './CellDetail.js'
import PhoneForm from './PhoneForm.js'
import { 
  Route, 
  Link,
  BrowserRouter as Router, 
} from 'react-router-dom';
//



export default class App extends Component {
  
state = {
  cellState: [],
}

// append 
async componentDidMount() {
  const cellData = await request.get(`https://tranquil-spire-02113.herokuapp.com/cell_phones`);

  // console.log(this.state.cellState);
  this.setState({ cellState: cellData.body })

  
};


  render() {

    return (
      <>
      <Header 
     title="Cell Phones"   />
   

      <CellList phoneData = {this.state.cellState} />
      <PhoneForm />
      <Router>
          <div>
            
            <Link to ="/">Home</Link>
            <Route exact path="/cell_phones" component={App} />
           
            <Route exact path="/cell_phones/:phoneName" component={CellDetail} />
          </div>
      </Router>
 

 </>
  );
}}
