'use client'
import Link from "next/link";
import Navbar from "./_components/navbar";
import { usePathname } from "next/navigation";
import AddFoodItems from "./_components/addFoodItems";
import RestoRegister from "./_components/restoRegister";

export default function Home() {
  const pathName = usePathname();

  return (
    <>
      <Navbar />
      <AddFoodItems />
      {/* <RestoRegister /> */}
    </>
  );
}
