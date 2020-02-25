import React, { Component } from 'react'
import request from 'superagent';

export default class UpdatePhone extends Component {
    state = {
        types: [],
    };

    componentDidMount = async () => {
        // can i get only the types from the url?
        
        const types = await request.get('https://tranquil-spire-02113.herokuapp.com/api/types')
        // still not sure how to isolate just types
        this.setState({ types: types.body })
console.log(this.props.match.params.updatePhone)
        const cell = await request.get(`https://tranquil-spire-02113.herokuapp.com/api/cell_phones/${this.props.match.params.updatePhone}`)
        
        const cellToUpdate = cell.body[0];

        this.setState({
                name: cellToUpdate.name,
                type: cellToUpdate.type_id,
                image_url: cellToUpdate.image_url,
                brand: cellToUpdate.brand,
                year: cellToUpdate.year,
                color: cellToUpdate.color,
                is_touchscreen: cellToUpdate.is_touchscreen
            }
        );
    }
    
    handleNameChange = (e) => {
        this.setState({ name: e.target.value })
    }
    handleTypeChange = (e) => {
        this.setState({ type: e.target.value })
    }
    handleImageChange = (e) => {
        this.setState({ image_url: e.target.value })
    }
    handleBrandChange = (e) => {
        this.setState({ brand: e.target.value })
    }
    handleYearChange = (e) => {
        this.setState({ year: Number(e.target.value) })
    }
    handleColorChange = (e) => {
        this.setState({ color: e.target.value })
    }
    handleTouchScreenChange = (e) => {
        const touchscreenBool = e.target.value === 'true'
        ? true
        : false
        this.setState({ is_touchscreen: touchscreenBool })
    }
    handleDelete = async () => {
        // await request.delete(`https://tranquil-spire-02113.herokuapp.com/api/cell_phones/${this.props.match.params.id}`)
        this.props.history.push('/');
    }
    handleSubmit = async (e) => {
        e.preventDefault();

        const newPhone = {
            name:this.state.name,
            type_id:this.state.type,
            image_url:this.state.image_url,
            brand:this.state.brand,
            year:this.state.year,
            color:this.state.color,
            is_touchscreen:this.state.is_touchscreen 
        }
        // const putPhoneInDb = await request.put('https://tranquil-spire-02113.herokuapp.com/api/cell_phones', newPhone)
        this.props.history.push('/')
    }
    render() {
        return (   
            <div>
                <form onSubmit={this.handleSubmit}>
                        Update Phones
                        <br/>
                        <label>
                            Name: 
                            <input onChange={this.handleNameChange} />
                        </label>
                        <br/>
                        <label>
                            Type: 
                            <select onChange={ this.handleTypeChange }>
                                { this.state.types.map(type => <option value={type.id}> 
                                {type.type}
                                </option>)}
                            </select>
                        </label>
                        <br/>
                        <label>
                            Year: 
                            <input type='number' onChange={this.handleYearChange} />
                        </label>
                        <br/>
                        <label>
                            Brand: 
                            <input type='string' onChange={this.handleBrandChange} />
                        </label>
                        <br/>
                        <label>
                            Image: 
                            <input onChange={this.handleImageChange} />
                        </label>
                        <br/>
    
                        <label>
                            Is it touchscreen?: 
                            <select onChange={this.handletouchScreenChange}>
                                <option value="true" >True</option>
                                <option value="false" >False</option>
                            </select>
                        </label>
                        <br />
                    <button>Update</button>
                    </form>
                    <button onClick={ this.handleDelete }>Delete Phone</button>
                    
            </div>  
        )
    }
}
