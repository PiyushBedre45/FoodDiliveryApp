import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AllRestaurent = () => {
    const [restaurents, setRestaurents] = useState([]);

    const allRestaurent = async () => {
        const response = await axios.get(`http://localhost:3000/api/customer`)
        setRestaurents(response.data.result);
        console.log(response.data.result)
    }

    useEffect(() => {
        allRestaurent();
    }, [])
    return (
        <>
            <div className=' w-full mt-[40px]'>
                <div className='  w-[95%] mx-auto flex gap-8'>
                    {
                        restaurents.map((resto, index) => (
                            <>
                                <div className=' bg-[#ffcaca]'>
                                    <h1>{resto.name}</h1>
                                    <h2>{resto.phone}</h2>
                                    <h2>{resto.city}</h2>
                                    <h2>{resto.address}</h2>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default AllRestaurent
