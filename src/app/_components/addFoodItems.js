
import axios from 'axios';
import React, { useState } from 'react'

const AddFoodItems = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [error, setError] = useState(false);

    const addItems = async (e) => {
        e.preventDefault();
        if (!name || !description || !price || !image) {
            setError(true);
            return false;
        }
        else {
            setError(false)
        }
        let resto_id;
        const restaurentData = JSON.parse(localStorage.getItem("restoDetails"));
        console.log(restaurentData)
        if (restaurentData) {
            resto_id = restaurentData._id;
        }
        const foodData = {
            name, description, price, image, resto_id
        }
        console.log(name, description, price, image)
        const response = await axios.post('http://localhost:3000/api/foodItems', foodData);
        console.log("res :", response);
        if (response.data.success) {
            alert("food item added succesfully");
        }
    }

    return (
        <>
            <div>
                <div>
                    <label>Name</label>
                    <input type="text" name="fooditem" value={name} onChange={(e) => setName(e.target.value)} />
                    {
                        error && !name && <span className='text-red-600'>Enter Name</span>
                    }
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    {
                        error && !description && <span className='text-red-600'>Enter Description</span>
                    }
                </div>
                <div>
                    <label>Price</label>
                    <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                    {
                        error && !price && <span className='text-red-600'>Enter Price</span>
                    }
                </div>
                <div >
                    <label>Image</label>
                    <input type="url" name="image" value={image} onChange={(e) => setImage(e.target.value)} />
                    {
                        error && !image && <span className='text-red-600'>Enter Image</span>
                    }
                </div>

                <button onClick={addItems}>Add Items</button>
            </div>
        </>
    )
}

export default AddFoodItems;
