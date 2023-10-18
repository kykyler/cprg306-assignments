"use client";
// Import required dependencies and hooks
import React, { useState } from 'react';

export default function NewItem() {
  // Initializing the state variables
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent default form submission

    // Create an item object with current state values
    const item = {
      name,
      quantity,
      category,
    };
    
    console.log(item);  // Log the item object to the console

    // Alert with current state
    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

    // Reset the state variables
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <div className="p-4 rounded border">
      <form onSubmit={handleSubmit}>

        {/* Name Field */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">Item Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Quantity Field */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">Quantity</label>
          <input 
            type="number" 
            min="1" 
            max="99" 
            value={quantity} 
            onChange={(e) => setQuantity(Number(e.target.value))} 
            required 
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Category Field */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Item
        </button>

      </form>
    </div>
  );
}
