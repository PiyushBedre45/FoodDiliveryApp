'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Navbar = () => {

    const [details, setDetails] = useState();

    const router = useRouter();
    // const pathName = usePathname();
    // const data = localStorage.getItem("userDetails")

    // useEffect(() => {
    //     if (!data && pathName == '/') {
    //         router.push('/auth/registration')
    //     }
    //     else if (data && pathName == "/auth/registration") {
    //         router.push("/")

    //     }
    //     else {
    //         setDetails(JSON.parse(data));
    //     }
    // }, [])

    const handleLogout = () => {
        localStorage.removeItem("userDetails");
        router.push('/auth/registration')
    }

    return (
        <>
            <div className='border border-red-600 w-[100%] h-[70px]'>
                <div className='w-[90%] m-auto flex justify-between items-center  gap-4'>
                    <div className='flex items-center justify-center border border-red-600 h-[70px]'>LOGO</div>
                    <div className='  flex items-center justify-center border border-red-600 h-[70px]'>
                        <div className='flex list-none gap-4 '>
                            <li className='text-xl'>Home</li>
                            <li className='text-xl'>About</li>
                            <li className='text-xl'>Items</li>
                            <li className='text-xl'>Help</li>
                        </div>
                    </div>
                    <div className='flex items-center justify-center border border-red-600 h-[70px] '>
                        {/* <div className='flex items-center justify-center gap-3'>
                            <Link href={'/auth/userLogin'}>
                                <p>login</p>
                            </Link>
                            <Link href={'/auth/userRegister'}>
                                <p>Register</p>
                            </Link>
                        </div> */}
                        <div className='flex justify-center items-center gap-3'>
                            <Link href={'#'}>
                                <p>Profile</p>
                            </Link>
                            <button onClick={handleLogout}>logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
