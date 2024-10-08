import React from 'react'

const page = () => {
    return (
        <>
            {/* <div className="w-full h-[100vh] flex justify-center items-center">
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
            </div> */}
            {/* Heading */}
            <div className="w-full">
                <div className="border border-black w-[90%] mx-auto h-[80px] flex items-center justify-center">
                    <h1 id="resto-heading" className="text-4xl font-semibold">KFC MENU</h1>
                </div>
            </div>
            {/* Cadr 2 */}
            <div className="w-full h-full mt-[40px] ">
                <div className="w-[93%] mx-auto h-full  flex flex-wrap items-center gap-7 ">
                    {/* {regulars.map((regular, index) => ( */}
                    <div className=" shadow-md border border-[#929292] w-[350px] h-[440px] rounded-md">
                        <div className=" w-[350px] h-[300px] flex flex-col gap-3 " >
                            <img
                                className="w-[90%] mx-auto h-full object-cover mt-[20px] rounded-md"
                                src="https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
                                alt="loading"
                            />
                            <div className=" flex flex-col w-[90%] mx-auto gap-2">
                                {/* <p className="text-red-800 ">Bestseller</p> */}
                                <div className="w-full flex justify-between items-center h-[55px]">
                                    <h1 id="itemName" className="borderfont-semibold text-lg w-[70%] h-full ">fgsd fgsddf  fasdfa sdfa sdf asdf  </h1>
                                    <h1 id="price" className="borderfont-semibold text-lg w-[30%] h-full pl-3">₹ 42423</h1>
                                </div>
                                {/* <p className="text-gray-400 ">dsfgsdfgsfgsdf gsdg d dfgsdfgsdfgsfdgsf gdfg sdfg </p> */}
                                <button className=" bg-[#f98d8d] rounded-sm w-[50%] h-[30px] text-white text-[18px] font-semibold">Add</button>
                            </div>
                        </div>
                    </div>
                    {/* ))} */}
                </div>
            </div>

        </>
    )
}

export default page
