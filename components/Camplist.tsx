import React from 'react'
import { fetchCamp } from '@/utils/actions'

const Camplist = async() => {
    const camps = await fetchCamp();
    console.log(camps);
  return (/*<div>Camplist</div> */
    <div>
    {
        camps.map((item, index)=>{
            return <li key={index}>{item.title}</li>
        })
    }        
    </div>
  ); 
};

export default Camplist