import React, { Component } from 'react';
import CellCard from './CellCard.js';
import { 
    Link
  } from 'react-router-dom';




export default class CellList extends Component {


    render() {
        const cellDeck = this.props.phoneData
        console.log("PROPS!",this.props);
        return (

        
        <div>

            {cellDeck.map((object) => {
                //needs work
            return <Link to={`/cell_phone/${object.id}`} > <CellCard phoneData={object}/> </Link>  

        })}
        </div>

        );
    }
}
