'use client'
import React from 'react'
//typescript error : Error
const error = ({error}:{error: Error}) => {
    console.log('tam error',error)
  return (
    <div>error นะจร้าาา</div>
  )
}

export default error