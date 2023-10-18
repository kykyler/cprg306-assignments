import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');
  
  // Sort items based on sortBy state
  let sortedItems = [...itemsData];
  if (sortBy === 'name') {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'category') {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }
  // If you're doing the extra challenge, you would also handle the grouping here

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
