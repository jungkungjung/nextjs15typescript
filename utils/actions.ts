'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { title } from 'process'
import React from 'react'

export const createCamp = async (prevState:any, formData: FormData) => {
    //const title = formData.get('title')
    //const location = formData.get('location')
    //console.log(title,location)

    const rawData = Object.fromEntries(formData)    
    console.log(rawData)
    // prisma.camp.create()

    //revalidatePath('/camp') //refresh ข้อมูล
    //redirect('/') //redirect page
    return 'create camp success!!!!'

}

export const fetchCamp = async()=>{
    // prisma.camp.findMany({})
    const camps = [
        { id:1 , title: 'โคราช'},
        { id:2 , title: 'นครสวรรค์'},
        { id:3 , title: 'นนทบุรี'}
    ]
    return camps
}
