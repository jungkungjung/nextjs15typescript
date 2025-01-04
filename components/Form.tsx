'use client'
import { createCamp } from "@/utils/actions";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

//const SubmitButton = ()=>{
 //const { pending } = useFormStatus()
 //return <button type="submit" disabled={ pending }> 
  //{ pending 
  //? 'Submitting.....'
  //: 'Submit'
  //}
 //</button>
//}



const Form = () => {
const [message, formAction] = useActionState(createCamp,null)

  return (
    <>
    {message && <h1>{message}</h1>}
  <form action={formAction}>
    Form
    <input 
        placeholder="Camping Name"
        name="title"
        className="border"   
        defaultValue="Korat Rjoute 3060" 
    />
    <br/>

    <input 
        placeholder="location"
        name="location"
        className="border"   
        defaultValue="Korat"
    />
    <br/>
    <button type="submit">Submit</button>


    </form>
    </>
  );
};
export default Form;
