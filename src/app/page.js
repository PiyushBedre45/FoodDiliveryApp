'use client'
import Link from "next/link";
import Navbar from "./_components/navbar";
import { usePathname } from "next/navigation";
import AddFoodItems from "./_components/addFoodItems";
import RestoRegister from "./_components/restoRegister";
import Dashboard from "./_components/dashboard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const pathName = usePathname();
  // const [select, setSelect] = useState(false);

  // Location Select Box
  const [location, setLocation] = useState([]);
  const [selectLocation, setSelectLocation] = useState('');
  const [showLocations, setShowLocations] = useState(false);
  const [restaurents, setRestaurents] = useState([]);

  const searchLocation = async () => {
    const response = await axios.get(`http://localhost:3000/api/customer/location`)
    setLocation(response.data.result);
  }

  const handleListItem = (item) => {
    setSelectLocation(item)
    setShowLocations(false)
    allRestaurent({ location: item })
  }


  const allRestaurent = async (params) => {
    let url = `http://localhost:3000/api/customer`;
    if (params?.location) {
      url = url + "?location=" + params.location;
      console.log(url)
    }
    else if (params?.restaurent) {
      url = url + "?restaurent=" + params.restaurent;
    }
    const response = await axios.get(url);
    setRestaurents(response.data.result);
    console.log(response.data.result);
  }

  useEffect(() => {
    searchLocation();
    allRestaurent();
  }, [])

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
            <input onClick={() => setShowLocations(!showLocations)} className="w-[35%] h-full pl-10 rounded-md" type="text"
              placeholder="Select Place"
              value={selectLocation}
              onChange={(e) => setSelectLocation(e.target.value)} />
            <ul className="absolute left-2 top-[60px] bg-white rounded-sm ">
              {
                showLocations && location.map((item) => (
                  <li onClick={() => handleListItem(item)} className="w-[290px] h-[30px] pl-6 rounded-sm cursor-pointer border border-b-gray-300 flex items-center">{item}</li>

                ))
              }
            </ul>
            <input className="w-[65%] h-full pl-10 rounded-md" type="text" placeholder="Select Food Items"
              onChange={(e) => allRestaurent({ restaurent: e.target.value })} />
          </div>
          <img
            src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            className="w-full h-full object-cover rounded-md"
          /> {/* Background Image */}
        </div>
      </div>

      {/* All Restaurent */}
      <div className=' w-full mt-[40px]'>
        <div className='  w-[95%] mx-auto flex gap-8'>
          {
            restaurents.map((resto, index) => (
              <>
                <div className=' bg-[#ffcaca]'>
                  <h1>{resto.name}</h1>
                  <h2>{resto.phone}</h2>
                  <h2>{resto.city}</h2>
                  <h2>{resto.address}</h2>
                </div>
              </>
            ))
          }
        </div>
      </div>


    </>
  );
}
