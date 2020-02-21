import React, { Component } from 'react';

export default class CellCard extends Component {
  
    render() {
        const cell_phones = this.props.phoneData;
        
    return ( 
         <div class="itemCard">
            <img src={cell_phones.image_url} height="200" width="200" alt=""></img>
            <h3>{cell_phones.name}</h3>
            <p>{cell_phones.type}</p>
            <p>{cell_phones.brand}</p>
            <p>{cell_phones.year}</p>
            <p>{cell_phones.color}</p>
            <p>{cell_phones.is_touchscreen}</p>

        </div>

        );
    }}