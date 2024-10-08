'use client'
import axios from 'axios';
import { React, useEffect, useState } from 'react';


const RestoExlore = (props) => {
    // Props
    const name = props.params.name;
    const id = props.searchParams.id

    // Use States
    const [restaurentDetails, setRestaurentDetails] = useState([]);
    const [foodDetails, setFoodDetails] = useState([]);

    // Function
    const loadRestaurentDetails = async () => {
        const response = await axios.get(`http://localhost:3000/api/customer/${id}`)
        console.log(response)
        setRestaurentDetails(response.data.restoDetails);
        setFoodDetails(response.data.foodDetails);
    }
    // Use Effect
    useEffect(() => {
        loadRestaurentDetails();
    }, [])
    return (
        <>
            <div className="w-full h-[500px] mt-10">
                <div className="w-[95%] mx-auto h-full relative flex items-center justify-center">
                    <div className="absolute bg-[#2b2b2b6a] rounded-md w-full h-full" ></div>
                    <div className=" w-[60%] h-[50px] flex items-center justify-center absolute ">
                        {/* Any for the Center */}
                        <h1 className="absolute font-bold text-white text-5xl"> {decodeURI(name)}</h1>
                    </div>
                    <img
                        src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        className="w-full h-full object-cover rounded-md"
                    /> {/* Background Image */}
                </div>
            </div>

            <div className="w-full">
                <div className="w-[95%] mx-auto">
                    <h1>{restaurentDetails.name}</h1>
                    <h1>{restaurentDetails.email}</h1>
                    <h1>{restaurentDetails.phone}</h1>
                    <h1>{restaurentDetails.address}</h1>
                </div>
            </div>
            {/* Heading */}
            <div className="w-full mt-[20px]">
                <div className=" w-[90%] mx-auto h-[80px] flex items-center justify-center">
                    <h1 id="resto-heading" className="text-4xl font-semibold">{restaurentDetails.name} MENU</h1>
                </div>
            </div>
            {/* Food Items Maped */}
            <div className="w-full h-full mt-[20px] ">
                <div className="w-[95%] mx-auto h-full  flex flex-wrap items-center gap-3 ">
                    {foodDetails.map((foodItem, index) => (
                        <div className=" shadow-md border border-[#929292] w-[350px] h-[440px] rounded-md">
                            <div className=" w-[350px] h-[300px] flex flex-col gap-3 " >
                                <img
                                    className="w-[90%] mx-auto h-full object-cover mt-[20px] rounded-md"
                                    src={foodItem.image}
                                    alt="loading"
                                />
                                <div className=" flex flex-col w-[90%] mx-auto gap-2">
                                    {/* <p className="text-red-800 ">Bestseller</p> */}
                                    <div className="w-full flex justify-between items-center h-[55px]">
                                        <h1 id="itemName" className="text-lg w-[70%] h-full ">{foodItem.name}  </h1>
                                        <h1 id="price" className=" font-semibold text-lg w-[30%] h-full pl-10">₹ {foodItem.price}</h1>
                                    </div>
                                    {/* <p className="text-gray-400 ">dsfgsdfgsfgsdf gsdg d dfgsdfgsdfgsfdgsf gdfg sdfg </p> */}
                                    <button className=" bg-[#f98d8d] rounded-sm w-[50%] h-[30px] text-white text-[18px] font-semibold">Add</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default RestoExlore
