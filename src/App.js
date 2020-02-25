import React, { Component } from 'react';
import CellList from './CellList.js'
import request from 'superagent';
import Header from './Header.js';
import CellDetail from './CellDetail.js'
import PhoneForm from './PhoneForm.js'
import UpdatePhone from './UpdatePhone.js'
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
   
     
      <Router>
      <CellList phoneData = {this.state.cellState} />
          <div>
            <Route exact path="/cell_phone/add" component={ PhoneForm }/>
            <Route exact path="/cell_phone" component={App} />
            <Route exact path="/cell_phone/:phoneName" component={CellDetail} />
            <Route exact path='/cell_phone/:updatePhone' component={UpdatePhone} />
          </div>
      </Router>
 

 </>
  );
}}
