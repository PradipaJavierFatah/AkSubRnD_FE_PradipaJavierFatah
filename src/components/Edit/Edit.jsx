import React, { useState } from 'react';

const App = () => {
const [items, setItems] = useState([
{ id: 1, name: 'Item 1' },
{ id: 2, name: 'Item 2' },
{ id: 3, name: 'Item 3' }
]);
const [editingItemId, setEditingItemId] = useState(null);
const [editName, setEditName] = useState('');

const handleEditClick = (itemId, itemName) => {
setEditingItemId(itemId);
setEditName(itemName);
};

const handleUpdateItem = () => {
const updatedItems = items.map(item => {
    if (item.id === editingItemId) {
    return { ...item, name: editName };
    }
    return item;
});
setItems(updatedItems);
setEditingItemId(null);
setEditName('');
};

const handleDeleteClick = itemId => {
const updatedItems = items.filter(item => item.id !== itemId);
setItems(updatedItems);
};

return (
<div>
    <h2>Items List</h2>
    <ul>
    {items.map(item => (
        <li key={item.id}>
        {editingItemId === item.id ? (
            <input
            type="text"
            value={editName}
            onChange={e => setEditName(e.target.value)}
            />
        ) : (
            <span>{item.name}</span>
        )}
        {editingItemId === item.id ? (
            <button onClick={handleUpdateItem}>Save</button>
        ) : (
            <button onClick={() => handleEditClick(item.id, item.name)}>Edit</button>
        )}
        <button onClick={() => handleDeleteClick(item.id)}>Delete</button>
        </li>
    ))}
    </ul>
</div>
);
};

export default App;