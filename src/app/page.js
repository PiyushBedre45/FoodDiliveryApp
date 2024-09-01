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

      <button onClick={() => setSelect(!select)}>
        {
          select ? "Dashboard" : "Add product"
        }
      </button>
      {
        select ? (<AddFoodItems />) : (<Dashboard />)
      }

      {/* <RestoRegister /> */}
    </>
  );
}
