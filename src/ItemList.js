import React from 'react'
import LineItem from './LineItem'


const ItemList = ({items, handleDelete, handleCheck}) => {
    return (
        <ul>
            {
                items.map(item => (
                    <LineItem 
                        item={item} 
                        handleDelete={handleDelete} 
                        handleCheck={handleCheck} 
                        key={item.id} 
                    />
                    ))
            }
        </ul>
    )
}

export default ItemList
