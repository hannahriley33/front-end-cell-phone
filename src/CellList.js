import React, { Component } from 'react';
import CellCard from './CellCard.js';




export default class CellList extends Component {


    render() {
        const cellDeck = this.props.phoneData
        console.log("PROPS!",this.props);
        return (

        
        <div>

            {cellDeck.map((object) => {
            return <CellCard phoneData={object}/> 

        })}
        </div>

        );
    }
}
