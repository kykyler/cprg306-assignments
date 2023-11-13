"use client";
import { useState } from 'react';

const NewItem = ({ onAddItem }) => { // 1. Add the onAddItem prop
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      name,
      quantity,
      category,
    };

    // 2. Use the onAddItem prop to send the new item details
    onAddItem(item);

    // Clear the form fields
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="number" min="1" max="99" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} required />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="produce">Produce</option>
        {/* might add other options here */}
      </select>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default NewItem;
