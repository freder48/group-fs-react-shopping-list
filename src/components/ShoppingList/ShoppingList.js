import React, { Component } from 'react';
import axios from 'axios';
import './ShoppingList.css';


class ShoppingList extends Component { 
  
             
  updateItem = (id) => { 
    console.log('updating item', id); 
    axios
     .put(`/list/${id}`)
     .then((response) => {
        console.log('getting all items');
        this.props.getAllGroceries(); 
     })
  }

  deleteItem = (id) => {
    console.log('deleting', id); 
    axios
     .delete(`/list/${id}`)
     .then((response) => {
        console.log('getting all items');
        this.props.getAllGroceries(); 
     })
  }

  render() {
    return (
      <div className="shoppingList"> 
              <button onClick={this.props.deleteAll}>Clear</button> 
              <p></p>    
            {
              this.props.groceryList.map((item, pos) => 
              <div className="divFood" key={pos}> 
                <div>name: {item.food_name},</div>
                <div>units: {item.unit},</div>   
                <div>quantity: {item.quantity}</div> 
                <div><button onClick={() => this.updateItem(item.id)}>Buy</button>
                <button onClick={() => this.deleteItem(item.id)}>Remove</button>
                </div>
              </div>)
            }
      </div>
    );
  }
}

export default ShoppingList;