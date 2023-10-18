const Item = ({ name, quantity, category }) => {
  return (
    <div className="bg-yellow-300 p-4 m-2 rounded border-2 border-gray-400 flex flex-col justify-center items-center">
      <div className="text-xl font-bold list-none">{name}</div>
      <div className="text-lg">Buy {quantity} in {category}</div>
    </div>
  );
};
 
export default Item;
