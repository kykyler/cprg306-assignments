"use client";
import { useState } from 'react';

const NewItem = () => {
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

    console.log(item);
    alert(`Added: ${name}, Quantity: ${quantity}, Category: ${category}`);
    
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
        {/* Add other options here */}
      </select>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default NewItem;
