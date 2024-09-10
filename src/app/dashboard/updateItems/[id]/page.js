'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const UpdateFoodItems = (props) => {
    const id = props.params.id
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [error, setError] = useState(false);
    const router = useRouter();

    const returnToDashboard = () => {
        router.push('/dashboard')
    }
    const editFoodItems = async () => {
        const response = await axios.get(`http://localhost:3000/api/foodItems/edit/${id}`);
        console.log(response)
        if (response.data.success) {
            setName(response.data.result.name)
            setDescription(response.data.result.description)
            setPrice(response.data.result.price)
            setImage(response.data.result.image)
        }
    }

    const handleEdit = async () => {
        alert("Edit item successfully")
        console.log(name, description, price, image);
        const response = await axios.put(`http://localhost:3000/api/foodItems/edit/${id}`, {
            name, description, price, image
        })
        console.log(response)
        if (response.data.success) {
            router.push('/dashboard')
        }
    }

    useEffect(() => {
        editFoodItems();
    }, [])



    return (
        <>
            <div className='flex items-center justify-center h-[80vh] mt-[40px] shadow-2xl w-[80%] mx-auto'>
                <div className=" bg-[#ffffffe0] h-[90%] flex flex-col w-[60%] ">
                    <div className=" justify-center w-[80%] mx-auto flex flex-col mt-[60px] gap-1">
                        <h1 className=" text-4xl font-semibold">Update Food <span className='text-[#f8b421]'>Items</span></h1>
                        {/* <p className=' ml-[5px]'>Login Here</p> */}
                    </div>
                    <div className=" w-[80%] h-[75%] mx-auto flex flex-col gap-4 justify-center items-center ">
                        <div className=' w-[80%] mx-auto'>
                            {
                                error && (!name || !price || !description || !image) && <span className='text-red-600'>Fill all the imformation !!</span>
                            }
                        </div>
                        {/* Product Name */}
                        <div className=" w-[80%] flex flex-col ">
                            <input
                                className={error && !name ? "mx-auto w-[100%] h-[30px] border-2 p-4  border-[#e84465] rounded-sm" : "mx-auto w-[100%] h-[30px] border-2 p-4  border-[#gdfgg] rounded-sm"}
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className=" w-[80%] flex flex-col ">
                            <input
                                className={error && !description ? "mx-auto w-[100%] h-[30px] border-2 p-4  border-[#e84465] rounded-sm" : "mx-auto w-[100%] h-[30px] border-2 p-4  border-[#gdfgg] rounded-sm"}
                                type="text"
                                name="description"
                                placeholder="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className=" w-[80%] flex flex-col ">
                            <input
                                className={error && !price ? "mx-auto w-[100%] h-[30px] border-2 p-4  border-[#e84465] rounded-sm" : "mx-auto w-[100%] h-[30px] border-2 p-4  border-[#gdfgg] rounded-sm"}
                                type="text"
                                name="price"
                                placeholder="Price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div className=" w-[80%] flex flex-col ">
                            <input
                                className={error && !image ? "mx-auto w-[100%] h-[30px] border-2 p-4  border-[#e84465] rounded-sm" : "mx-auto w-[100%] h-[30px] border-2 p-4  border-[#gdfgg] rounded-sm"}
                                type="url"
                                name="image"
                                placeholder="Image"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                        </div>
                        <button onClick={handleEdit} className="border-2 border-white w-[80%] h-[36px] rounded-md bg-[#e84465] mt-[5px] text-[#ffffff] ">
                            Update Items
                        </button>
                        <button onClick={returnToDashboard} className="border-2 border-white w-[80%] h-[36px] rounded-md bg-[#e84465] mt-[5px] text-[#ffffff] ">
                            Dashboard
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}



export default UpdateFoodItems
