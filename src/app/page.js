'use client'
import Link from "next/link";
import Navbar from "./_components/navbar";
import { usePathname } from "next/navigation";
import AddFoodItems from "./_components/addFoodItems";
import RestoRegister from "./_components/restoRegister";
import Dashboard from "./_components/dashboard";
import { useState } from "react";

export default function Home() {
  const pathName = usePathname();
  const [select, setSelect] = useState(false);

  return (
    <>
      <Navbar />

      {/* <button onClick={() => setSelect(!select)}>
        {
          select ? "Dashboard" : "Add product"
        }
      </button>
      {
        select ? (<AddFoodItems />) : (<Dashboard />)
        }
        
        <RestoRegister /> */}
      <div className="w-full h-[500px] mt-10">
        <div className="w-[95%] mx-auto h-full relative flex items-center justify-center">
          <div className="absolute bg-[#2b2b2b6a]  w-full h-full" ></div>
          <h1 className="absolute top-[70px] font-bold text-white text-5xl">Food Delivery App</h1>
          <div className=" w-[60%] h-[50px] flex items-center justify-center absolute  gap-1">
            <input className="w-[35%] h-full pl-10 rounded-md" type="text" placeholder="Select Place" />
            <input className="w-[65%] h-full pl-10 rounded-md" type="text" placeholder="Select Food Items" />
          </div>
          <img
            src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            className="w-full h-full object-cover rounded-md"
          /> {/* Background Image */}
        </div>
      </div>
    </>
  );
}
