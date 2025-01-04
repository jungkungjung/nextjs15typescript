//rfc แบบปกติ return ค่่าเดียว
//rafce แบบ arrow function
//rfce แบบปกติ

import React from 'react'

async function about() {
  await new Promise((resolve)=>setInterval(resolve,1000))
  //await new Promise888((resolve)=>setInterval(resolve,1000)) //test error

//javascrip
  return (
    <>
      <div>about9999</div>
    </>
  )
}

export default about