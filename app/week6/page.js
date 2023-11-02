"use client";
import React, { useState } from 'react'; // 1. Import useState
import ItemList from './item-list';
import NewItem from './new-item.js';
import itemsData from './items.json';

function Page() {
    // 2. Initialize state for items
    const [items, setItems] = useState(itemsData);

    // 3. Create an event handler for adding new items
    function handleAddItem(newItem) {
        setItems(prevItems => [...prevItems, newItem]);
    }

    return (
        <main>
            <h1>Shopping List</h1>
            <NewItem onAddItem={handleAddItem} /> {/* 4 & 5. Pass event handler as prop and render NewItem */}
            <ItemList items={items} /> {/* 4. Pass items state as prop */}
        </main>
    );
}

export default Page;
