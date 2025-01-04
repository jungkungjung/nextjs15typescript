import Link from 'next/link'
import React from 'react'

//สร้าง folder component เพื่อสร้าง componect ขึ้นมาใช้เอง เช่น navbar

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between text-1xl">
        <div className="flex gap-4">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/info"}>Info</Link>
          <Link href={"/fletdata"}>data</Link>
          <Link href={"/imagepage"}>image</Link>
          <Link href={"/camp"}>camp</Link>
        </div>

        <div className="flex gap-4">
          <Link href={"/login"}>Login</Link>
          <Link href={"/register"}>Register</Link>
        </div>
      </nav>
      <hr className="mb-2"/>
    </>
  )
}

export default Navbar