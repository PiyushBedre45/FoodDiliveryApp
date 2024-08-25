"use client";
import axios from 'axios';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Navbar from './navbar';

const RestoRegister = () => {


    // All useState hooks
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // Restaurant registration fields
    const [restaurantName, setRestaurantName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [ownerName, setOwnerName] = useState('');

    // Navigation
    const router = useRouter();

    // Pathname 
    const pathname = usePathname();

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(password)
        const restaurantData = {
            name: restaurantName,
            address,
            phone,
            email,
            ownerName,
            password,
            registrationDate: new Date()
        };
        console.log(restaurantData);
        const response = await axios.post('http://localhost:3000/api/registerRestaurant', restaurantData);
        if (response.data.success) {
            const { result } = response.data;
            delete result.password;
            localStorage.setItem("restoDetails", JSON.stringify(result))
        }
    };

    return (
        <div>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Restaurant Name:</label>
                    <input
                        type="text"
                        value={restaurantName}
                        onChange={(e) => setRestaurantName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Address:</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Phone:</label>
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
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
                <div>
                    <label>Owner Name:</label>
                    <input
                        type="text"
                        value={ownerName}
                        onChange={(e) => setOwnerName(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Register Restaurant</button>
            </form>
        </div>
    );
};

export default RestoRegister;