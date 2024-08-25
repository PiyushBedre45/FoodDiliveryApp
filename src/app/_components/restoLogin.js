"use client";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Navbar from './navbar';

const RestoLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    const handleOnSubmit = async (e) => {
        e.preventDefault();
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
        <div>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default RestoLogin;