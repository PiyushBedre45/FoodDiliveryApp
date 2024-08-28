"use client";
import axios from 'axios';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';


const RestoRegister = () => {

    // All useState hooks
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false)

    // Handle form submission
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError(true)
            return false;
        }
        else {
            setError(false)
        }
        const restaurantData = {
            email,
            password,
            login: true
        };
        const response = await axios.post(`http://localhost:3000/api/registerRestaurant`, restaurantData);
        console.log(response)
        if (response.data.success) {
            alert("Login successful");
            const { result } = response.data;
            delete result.password;
            localStorage.setItem("restoDetails", JSON.stringify(result));
            console.log(result)
        } else {
            alert("Login failed");
        }
    };
    return (
        <>
            <div className=" w-full h-[100vh] flex items-center justify-center ">
                <div className=" bg-[#fefef4] w-[70%] h-[80%] flex shadow-2xl">
                    <div className="border-2 border-white w-full mx-auto h-[100%] flex flex-col gap-3 items-center justify-center">
                        <img
                            className="w-full h-full object-cover"
                            src="https://img.freepik.com/free-vector/hand-drawn-flat-design-people-eating-collection_23-2149209801.jpg?t=st=1724761487~exp=1724765087~hmac=2d97803419c6b752fdfb485b40326c52f8c37dc8e93c2c233e88b4ef92e4a981&w=740"
                            alt=""
                        />
                    </div>
                    {/* Form */}
                    <form onSubmit={handleOnSubmit} className="  bg-[#ffffffe0] h-[100%] w-full flex flex-col">
                        <div className=" justify-center w-[80%] mx-auto flex flex-col mt-[40px] gap-1">
                            <h1 className=" text-4xl font-semibold">Welcome To <span className='text-[#f8b421]'>RestoName</span></h1>
                            <p className=' ml-[5px]'>Login Here</p>
                        </div>
                        <div className=" w-[80%] h-[75%] mx-auto flex flex-col gap-4 justify-center items-center ">

                            <div className=' w-[80%] mx-auto'>
                                {
                                    error && (!email || !password) && <span className='text-red-600'>Fill all the imformation !!</span>
                                }
                            </div>
                            {/* Owner Name */}
                            {/* <div className="w-[80%] flex flex-col ">

                                <input
                                    className={error && !ownerName ? "mx-auto w-[100%] h-[30px] border-2 p-4  border-[#e84465] rounded-sm" : "mx-auto w-[100%] h-[30px] border-2 p-4  border-[#gdfgg] rounded-sm"}
                                    type="text"
                                    name="name"
                                    placeholder="Restaurent Owner Name"
                                    value={ownerName}
                                    onChange={(e) => setOwnerName(e.target.value)}

                                />
                            </div> */}
                            {/* Resto Name
                            <div className=" w-[80%] flex flex-col ">

                                <input
                                    className={error && !restaurantName ? "mx-auto w-[100%] h-[30px] border-2 p-4  border-[#e84465] rounded-sm" : "mx-auto w-[100%] h-[30px] border-2 p-4  border-[#gdfgg] rounded-sm"}
                                    type="name"
                                    name="name"
                                    placeholder="Restaurent Name"
                                    value={restaurantName}
                                    onChange={(e) => setRestaurantName(e.target.value)}

                                />
                            </div> */}
                            {/* Email */}
                            <div className=" w-[80%] flex flex-col ">
                                <input
                                    className={error && !email ? "mx-auto w-[100%] h-[30px] border-2 p-4  border-[#e84465] rounded-sm" : "mx-auto w-[100%] h-[30px] border-2 p-4  border-[#gdfgg] rounded-sm"}
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}

                                />
                            </div>
                            {/* Password */}
                            <div className=" w-[80%] flex flex-col ">

                                <input
                                    className={error && !password ? "mx-auto w-[100%] h-[30px] border-2 p-4  border-[#e84465] rounded-sm" : "mx-auto w-[100%] h-[30px] border-2 p-4  border-[#gdfgg] rounded-sm"}
                                    type="password"
                                    name="psssword"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}

                                />
                            </div>
                            {/* Phone */}
                            {/* <div className=' flex w-[80%] gap-2  ' > */}

                            {/* <div className="flex flex-col">

                                    <input
                                        className={error && !phone ? "mx-auto w-[100%] h-[30px] border-2 p-4  border-[#e84465] rounded-sm" : "mx-auto w-[100%] h-[30px] border-2 p-4  border-[#gdfgg] rounded-sm"}
                                        type="text"
                                        name="mobileNo"
                                        placeholder="Mobile No"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}

                                    />
                                </div> */}
                            {/* Address */}
                            {/* <div className="flex flex-col">

                                    <input
                                        className={error && !address ? "mx-auto w-[100%] h-[30px] border-2 p-4  border-[#e84465] rounded-sm" : "mx-auto w-[100%] h-[30px] border-2 p-4  border-[#gdfgg] rounded-sm"}
                                        type="name"
                                        name="city"
                                        placeholder="Address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}

                                    />
                                </div> */}
                            {/* </div> */}
                            <button type='submit' className="border-2 border-white w-[80%] h-[36px] rounded-md bg-[#e84465] mt-[5px] text-[#ffffff] ">
                                Register
                            </button>
                            <h1 className='mt-[10px]'>
                                If you don't have an account!
                                <Link href={'/restoAuth/register'}><span className="text-[#11a58d]"> Register</span></Link>
                            </h1>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default RestoRegister;