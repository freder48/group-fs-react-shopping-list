// imports
import React, { Component } from 'react';

// class
class AddItem extends Component{
    render(){
        return(
        <>
            
                <h2>Add an Item</h2>
                <label>Item:</label>
                <input type="text"/>

                <label>Quantity:</label>
                <input type="number"/>

                <label>Unit:</label>
                <input type="text"/>

                <button>Save</button>
            
        </> 
        ) // end return
    } // end render
} // end class

// export 
export default AddItem;