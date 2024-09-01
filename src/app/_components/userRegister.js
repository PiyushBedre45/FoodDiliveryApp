"use client";
import axios from 'axios';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';

import Link from 'next/link';
import Navbar from '../_components/navbar';

const UserRegister = () => {

    // All useState hooks
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(false)

    // Navigation
    const router = useRouter();

    // Pathname 
    const pathname = usePathname();

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password || !name) {
            setError(true)
            return false;
        }
        else {
            setError(false)
        }
        const userData = {
            name,
            email,
            password
        }

        const response = await axios.post(`http://localhost:3000/api/users`, userData);
        if (response.data.success) {
            const { result } = response.data
            delete result.password
            console.log("resutl", result)
            localStorage.setItem("userDetails", JSON.stringify(result))
            router.push('/')
        }
    };
    return (
        <>
            <Navbar />
            <div className=" w-full h-[100vh] flex items-center justify-center ">
                <div className=" bg-[#fefef4] w-[70%] h-[80%] flex shadow-2xl">
                    <div className="border-2 border-white w-full mx-auto h-[100%] flex flex-col gap-3 items-center justify-center">
                        <img
                            className="w-full h-full object-cover"
                            src="https://img.freepik.com/free-vector/hand-drawn-flat-design-people-eating-collection_23-2149209802.jpg?t=st=1724761498~exp=1724765098~hmac=e6e30aa773938bce21de9d4e1442bd0cc5cd0d9eab56a0db40378909d7441a62&w=740"
                            alt=""
                        />
                    </div>
                    {/* Form */}
                    <form onSubmit={handleSubmit} className="  bg-[#ffffffe0] h-[100%] w-full flex flex-col">
                        <div className=" justify-center w-[80%] mx-auto flex flex-col mt-[40px] gap-1">
                            <h1 className=" text-4xl font-semibold">Welcome To <span className='text-[#f8b421]'>RestoName</span></h1>
                            <p className=' ml-[5px]'>Complete your registration process</p>
                        </div>
                        <div className=" w-[80%] h-[75%] mx-auto flex flex-col gap-4 justify-center items-center ">

                            <div className=' w-[80%] mx-auto'>
                                {
                                    error && (!email || !password || !name) && <span className='text-red-600'>Fill all the imformation !!</span>
                                }
                            </div>


                            {/* Name */}
                            <div className=" w-[80%] flex flex-col ">
                                <input
                                    className={error && !name ? "mx-auto w-[100%] h-[30px] border-2 p-4  border-[#e84465] rounded-sm" : "mx-auto w-[100%] h-[30px] border-2 p-4  border-[#gdfgg] rounded-sm"}
                                    type="name"
                                    name="name"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}

                                />
                            </div>
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

                            <button type='submit' className="border-2 border-white w-[80%] h-[36px] rounded-md bg-[#e84465] mt-[5px] text-[#ffffff] ">
                                Register
                            </button>
                            <h1 className='mt-[10px]'>
                                If you have an Account!
                                <Link href={'/auth/login'}><span className="text-[#11a58d]"> Login</span></Link>
                            </h1>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default UserRegister;