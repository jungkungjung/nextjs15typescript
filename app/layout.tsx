import "./globals.css";
import React, {FC} from 'react'
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata:Metadata ={
  title:'my metada',
  description:'NextJs15',
  keywords:'dev, camping, party'

}

const layout = ({ children, ...props } : any) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

export default layout
