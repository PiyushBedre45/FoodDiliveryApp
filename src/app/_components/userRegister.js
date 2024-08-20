"use client";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'


const UserRegister = () => {
    // All useState hooks

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Navigation

    const router = useRouter();

    const onSubmit = async (event) => {
        console.log(name, email, password)
        event.preventDefault()
        const response = await axios.post(`http://localhost:3000/api/users`, {
            name, email, password
        });
        console.log(response.data);
        if (response.data.success) {
            const { data } = response
            delete data.users.password
            console.log("success trueeeeee")
            localStorage.setItem("userDetails", JSON.stringify(data))
            router.push('/')
        }

        console.log("hi piyusd")

    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">click</button>
            </form>


        </>
    )
}

export default UserRegister
