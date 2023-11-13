"use client";
import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items }) => {
    const [sortBy, setSortBy] = useState('name');
    
    let sortedItems = [...items];
    if (sortBy === 'name') {
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'category') {
        sortedItems.sort((a, b) => a.category.localeCompare(b.category));
    }

    return (
        <div>
            <button onClick={() => setSortBy('name')} 
                    style={{backgroundColor: sortBy === 'name' ? 'lightblue' : 'white'}}>
                Sort by Name
            </button>
            <button onClick={() => setSortBy('category')} 
                    style={{backgroundColor: sortBy === 'category' ? 'lightblue' : 'white'}}>
                Sort by Category
            </button>
            <ul>
                {sortedItems.map(item => (
                    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                ))}
            </ul>
        </div>
    );
}

export default ItemList;
