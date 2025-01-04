import { NextResponse } from "next/server"
//middleware จะใช้เป็นตัวกลาง ทุก page
export const middleware =(req:Request) =>{
    console.log('Hello middleware')
    return NextResponse.redirect(new URL('/',req.url))    
}

export const config = {
    matcher: ['/info/:path*','/imagepage/:path*' ]
}