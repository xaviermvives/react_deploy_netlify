import React from 'react'
import ItemList from './ItemList'
 
const Content = ({items, deleteItem, checkItem}) => {
    const handleCheck = id => {
        checkItem(id)
    }

    const handleDelete = id => {
        deleteItem(id)
    }

    
    return (
        <main>
            {
                items.length ? (
                   <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete} /> 
                ) : (
                    <p style={{marginTop:"2rem"}}>Your list is empty</p>
                )
            }
        </main>
    )
}

export default Content
