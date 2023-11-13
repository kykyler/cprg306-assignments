function Item({ name, quantity, category }) {
    return (
        <li>
            {name} - {quantity} - {category}
        </li>
    );
}
export default Item;
