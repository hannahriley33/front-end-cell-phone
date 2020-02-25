import React, { Component } from 'react'
import request from 'superagent';

export default class PhoneForm extends Component {
    
        state = {
            name: '',
            type: [],
            image_url: '',
            year: '',
            brand: '',
            color: '',
            is_touchScreen: true,
        };
    
        componentDidMount = async () => {
            const type = await request.get('https://tranquil-spire-02113.herokuapp.com/cell_phones/');
            
            this.setState({ type: type.body });
        }
        handleTypeChange = (e) => {
            this.setState({ type: e.target.value })
        }
    
        handleNameChange = (e) => {
            
            this.setState({ name: e.target.value })
        }
    
        handleYearChange = (e) => {
            this.setState({ year: Number(e.target.value) })
        }
    
        handleBrandChange = (e) => {
            this.setState({ brand: e.target.value })
        }
    
        handletouchScreenChange = (e) => {
            const actualBool = e.target.value === 'false' 
                ? false 
                : true
    
            this.setState({ is_touchScreen: actualBool })
        }
    
        handleImageChange = (e) => {
            this.setState({ image_url: e.target.value })
        }
    
        handleSubmit = async (e) => {
            e.preventDefault();
    
            const newPhone = {
                name: this.state.name,
                type: this.state.type,
                url: this.state.image_url,
                year: this.state.year,
                brand: this.state.brand,
                color: this.state.color,
                is_touchScreen: this.state.is_touchScreen,
            }
    
            const dbPhone = await request.post('https://tranquil-spire-02113.herokuapp.com/cell_phones', newPhone);
    
    
           
    
            this.props.history.push('/');
        }
    
        render() {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        Make your own phone
                        <br/>
                        <label>
                            Name: 
                            <input onChange={this.handleNameChange} />
                        </label>
                        <br/>
                        <label>
                            Type: 
                            <select onChange={ this.handleTypeChange }>
                                { this.state.type.map(type => <option value={type.id}> 
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
                    <button>Submit</button>
                    </form>
                </div>
            )
        }
    }
