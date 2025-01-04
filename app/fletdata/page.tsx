import React from "react";
const url = "https://jsonplaceholder.typicode.com/todos";

const fetchTodos = async () => {
await new Promise((resolve)=>setInterval(resolve,1000))

    const res = await fetch(url);
    const data = await res.json();
    //console.log(data)
    return data
};

//สร้าง type เพื่อใช้งาน typescript
//array
type Data = {
    id: string;
    completed: string;
    title: string;
    userId: string;
}

const fletdata = async () => {
    const data: Data[] = await fetchTodos();
    console.log(data);

  return <div>
    fletdata
    {
        data.map((item, index) =>{
            return <li key={index}>{item.title}</li>
        })
    }
    </div>
};

export default fletdata;
