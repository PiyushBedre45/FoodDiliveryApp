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
            <div className="relative w-[85%] mx-auto h-[65vh] border border-black flex flex-wrap gap-3">
                {
                    foodDetails.map((foodItem, index) => (
                        <>
                            <div className="w-[280px] h-[400px] mx-auto border border-red-500 flex flex-col justify-center mt-[40px]">
                                <div className="relative border border-[#929292] shadow-xl w-[280px] h-[330px] flex justify-center items-center rounded-md mt-[40px]">
                                    <div className="top-[-15%] absolute  w-[220px] h-[200px]">
                                        <img className="w-full h-full object-cover rounded-md" src={foodItem.image} alt="" />
                                    </div>
                                    <div className="bottom-0 absolute  w-[220px] h-[160px] flex flex-col gap-2">
                                        <div>
                                            <h1 id="itemName" className="text-xl font-semibold">Chicken Box</h1>
                                            <h1 className="text-[16px] ">Crisp chicken with Coke</h1>
                                        </div>
                                        <h1 className="text-xl font-semibold ">200 ₹</h1>
                                        <button className=" bg-[#f98d8d] rounded-sm w-[50%] h-[30px] text-white text-[18px] font-semibold">Add</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                }

            </div>
        </>
    )
}

export default RestoExlore
