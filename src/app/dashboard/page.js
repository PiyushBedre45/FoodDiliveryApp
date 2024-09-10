'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
    const [items, setItems] = useState([]);
    const router = useRouter();
    const getRestoItems = async () => {
        const restoId = JSON.parse(localStorage.getItem("restoDetails"));
        const response = await axios.get(`http://localhost:3000/api/foodItems/${restoId._id}`);
        setItems(response.data.result)
    }

    const deleteItem = async (itemId) => {
        console.log(itemId);
        const response = await axios.delete(`http://localhost:3000/api/foodItems/${itemId}`)
        if (response.data.success) {
            getRestoItems();
        }
        console.log(response)
    }
    useEffect(() => {
        getRestoItems();
    }, [])
    return (
        <>
            <div className='border border-red-600 w-[80%] mx-auto mt-[40px]'>

                <table className='border border-black border-collapse w-[80%] mx-auto'>
                    <thead className='border border-black border-collapse'>
                        <tr >
                            <th className='border border-black p-2'>SrNo.</th>
                            <th className='border border-black p-2'>Name</th>
                            <th className='border border-black p-2'>Description</th>
                            <th className='border border-black p-2'>Price</th>
                            <th className='border border-black p-2'>Image</th>
                            <th className='border border-black p-2'>Operation</th>
                        </tr>
                    </thead>
                    <tbody className='border border-black'>

                        {
                            items.map((item, index) => (
                                <tr key={index} className='border-collapse'>
                                    <td className='border border-black p-2 text-center '>{index + 1}</td>
                                    <td className='border border-black p-2 text-center'>{item.name}</td>
                                    <td className='border border-black p-2 text-center'>{item.description}</td>
                                    <td className='border border-black p-2 text-center'>{item.price}</td>
                                    <td className='border border-black'>
                                        <img src={item.image} className='p-2 text-center w-[100px] h-[100px] mx-auto rounded-xl' />
                                    </td>
                                    <td className='border border-black p-2 text-center '>
                                        <div className='flex gap-4 items-center justify-center'>
                                            <button onClick={() => deleteItem(item._id)}>Delete</button>
                                            <button onClick={() => router.push(`/dashboard/updateItems/${item._id}`)}>Edit</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Dashboard;
