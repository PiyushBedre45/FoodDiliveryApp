
import axios from 'axios';
import React, { useState } from 'react'

const AddFoodItems = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const addItems = async (e) => {
        e.preventDefault();
        console.log(name, description, price)
        const response = await axios.post('http://localhost:3000/api/foodItems', {
            name, description, price
        });
        // const { result } = response.data;
        console.log("res :", response);
        if (response.data.success) {
            alert("food item added succesfully");
        }
    }

    return (
        <>
            <div>
                <input type="text" name="fooditem" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                <button onClick={addItems}>Add Items</button>
            </div>
        </>
    )
}

export default AddFoodItems;
