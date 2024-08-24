'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(`http://localhost:3000/api/users`, { email, password, login: true })


        if (response.data.success) {
            alert("login successfull");
            const { result } = response.data;
            delete result.password;
            localStorage.setItem("userDetails", JSON.stringify(result))
            router.push("/")
        }
        else {
            alert(" User not found , plz do register");

        }
    }

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>submit</button>
            </form>
        </>
    )
}

export default UserLogin
