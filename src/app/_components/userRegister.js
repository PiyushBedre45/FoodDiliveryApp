"use client";
import axios from 'axios';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Navbar from './navbar';


const UserRegister = () => {
    // All useState hooks

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Navigation

    const router = useRouter();

    // Pathname 

    const pathname = usePathname();

    const onSubmit = async (event) => {
        console.log(name, email, password)
        event.preventDefault()
        const response = await axios.post(`http://localhost:3000/api/users`, {
            name, email, password
        });
        if (response.data.success) {
            const { result } = response.data
            delete result.password
            console.log("resutl", result)
            localStorage.setItem("userDetails", JSON.stringify(result))
            router.push('/')
        }

    }
    return (
        <>
            <Navbar />
            <form onSubmit={onSubmit}>
                <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">click</button>
            </form>

            <h1>{pathname}</h1>

        </>
    )
}

export default UserRegister
