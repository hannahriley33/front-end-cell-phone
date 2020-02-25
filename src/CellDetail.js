import React, { Component } from 'react'
import request from 'superagent'
import CellCard from './CellCard.js'
import App from './App.js'


export default class Detail extends Component {
    state = { phoneChosen: {} }
    
    async componentDidMount() {
        const data = await request.get(`https://tranquil-spire-02113.herokuapp.com/cell_phones/${this.props.match.params.phoneName}`)

        if (data.body.results) {
            this.setState({ phoneChosen: data.body.results[0] })
        }
    }
    render() {
        const { phoneChosen } = this.state;
        
        return (
            <div>
                 {phoneChosen ?  <CellCard phoneData={phoneChosen} /> : <h2>No such phone</h2>}
            </div>
        )
    }
}
