
import Image from 'next/image';
import React from 'react'

const url = "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU";
const imagepage = () => {
  return (
    <div>
        Image page

      <hr/>
       <Image
      src={url}
      width={400}
      height={400}
      alt="tam roitai"
      priority
      />
    </div>
  )
}

export default imagepage