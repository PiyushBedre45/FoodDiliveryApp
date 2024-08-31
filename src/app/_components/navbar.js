'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Navbar = () => {

    const [details, setDetails] = useState();

    const router = useRouter();
    const pathName = usePathname();
    const data = localStorage.getItem("userDetails")

    useEffect(() => {
        if (!data && pathName == '/') {
            router.push('/auth/registration')
        }
        else if (data && pathName == "/auth/registration") {
            router.push("/")

        }
        else {
            setDetails(JSON.parse(data));
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("userDetails");
        router.push('/auth/registration')
    }

    return (
        <>
            <div className='w-[100%] h-[70px] bg-[#ebfbff] text-[#e84465] font-semibold shadow-md'>
                <div className='w-[90%] m-auto flex justify-between items-center  gap-4'>
                    <div className='flex items-center justify-center w-[10%]  h-[70px] text-xl'>LOGO</div>
                    <div className=' w-[40%]  flex items-center justify-center  h-[70px]'>
                        <div className='flex list-none gap-7 '>
                            <li className='text-xl cursor-pointer'>Home</li>
                            <li className='text-xl cursor-pointer'>About</li>
                            <li className='text-xl cursor-pointer'>Items</li>
                            <li className='text-xl cursor-pointer'>Help</li>
                        </div>
                    </div>
                    <div className='flex items-center justify-center  h-[70px] '>
                        {/* <div className='flex items-center justify-center gap-3'>
                            <Link href={'/auth/userLogin'}>
                                <p>login</p>
                            </Link>
                            <Link href={'/auth/userRegister'}>
                                <p>Register</p>
                            </Link>
                        </div> */}
                        <div className='flex justify-center items-center gap-4 text-xl'>
                            <Link href={'#'}>
                                <p>Profile</p>
                            </Link>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
