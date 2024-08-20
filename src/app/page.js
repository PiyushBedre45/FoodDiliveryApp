import Link from "next/link";

export default function Home() {
  return (

    <>
      <h1>hi piyu</h1>
      <Link href={'/auth/registration'}><h1>registration</h1></Link>
    </>
  );
}
