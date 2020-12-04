// imports
import React, { Component } from 'react';

// class
class AddItem extends Component{
    state = {
        itemList: [],
        newItem: {
            food_name: '',
            quantity: 0,
            unit: 0
        }
    }

    handleChange = (inputValue) => (event) =>{
        this.setState({
            newItem: {
                ...this.state.newItem,
                [inputValue]: event.target.value,

            }
        })
    }

    handleSubmit = (event) => {
        this.setState({
            itemList: [...this.state.itemList, this.state.newItem]
            
        })
    }
    
    render(){
        return(
        <>
            
                <h2>Add an Item</h2>
                <label>Item:</label>
                <input  onChange={this.handleChange('food_name')} type="text"/>

                <label>Quantity:</label>
                <input onChange={this.handleChange('quantity')} type="number"/>

                <label>Unit:</label>
                <input onChange={this.handleChange('unit')} type="text"/>

                <button onClick={()=> this.props.addItem(this.state.newItem)}>Save</button>
                { JSON.stringify(this.state.newItem)}
            
        </> 
        )
        }
    }

    export default AddItem;