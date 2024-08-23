'use client'
import Link from "next/link";
import Navbar from "./_components/navbar";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathName = usePathname();

  return (
    <>
      <h1>hi piyu</h1>
      <Link href={'/auth/registration'}><h1>registration</h1></Link>
      <Navbar />
      <h1>{pathName}</h1>
    </>
  );
}
