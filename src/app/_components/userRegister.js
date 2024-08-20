"use client";
import React from 'react'

const UserRegister = () => {
    const onSubmit = async (event) => {
        event.preventDefault()
        console.log("hi piyusd")

    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" name='name' />
                <input type="email" name='email' />
                <button type="submit">click</button>
            </form>


        </>
    )
}

export default UserRegister
