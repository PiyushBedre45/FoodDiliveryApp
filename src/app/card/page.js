import React from 'react'

const page = () => {
    return (
        <>
            <div className="w-full h-[100vh] flex justify-center items-center">
                <div className="relative border border-[#929292] shadow-xl w-[280px] h-[330px] flex justify-center items-center rounded-md">
                    <div className="top-[-15%] absolute  w-[220px] h-[200px]">
                        <img className="w-full h-full object-cover rounded-md" src="https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    </div>
                    <div className="bottom-0 absolute  w-[220px] h-[160px] flex flex-col gap-2">
                        <div>
                            <h1 id="itemName" className="text-xl font-semibold">Chicken Box</h1>
                            <h1 className="text-[16px] ">Crisp chicken with Coke</h1>
                        </div>
                        <h1 className="text-xl font-semibold ">200 ₹</h1>
                        <button className=" bg-[#f98d8d] rounded-sm w-[50%] h-[30px] text-white text-[18px] font-semibold">Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
