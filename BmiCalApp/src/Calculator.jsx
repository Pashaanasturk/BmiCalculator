import { useState } from "react";

export default function Calculator()
{
  const [weight, setWeight]= useState(0);
  const [height, setHeight]= useState(0);
  const [bmiVal, setBmiVal]= useState("");
  const [message, setMessage]= useState("");


  //logic to find bmi and shows the meessages
  const calculateBmi= (e)=> {
    e.preventDefault();
    // console.log("Its working");
    if(weight===0 || height===0)
      {
        alert("Please enter a valid weight and height");
      }
      else
      {
        let bmi= (weight/(height*height)*703);
        setBmiVal(bmi.toFixed(1));

        if(bmi<25)
          {
            setMessage("you are under weight test");
          }
          else if(bmi>=25 && bmi<=30)
            {
              setMessage("you are healthy weight");
            }
            else
            {
              setMessage("You are over weight");
            }
      }
  }


  return (
    <>
    <div className='bg-yellow-300 w-full h-screen flex flex-col justify-center text-center'>
      <form onSubmit={calculateBmi} className='bg-white flex flex-col justify-center text-center mx-12 m-auto rounded-xl'>

        <div className='flex flex-row justify-center text-center'>
          <label className='my-3' htmlFor="">Weight(ibs)</label>
          <input className='mx-3 p-1 rounded-md my-2 font-bold border border-slate-400' type="text"
           placeholder='Enter your Weight' 
           value={weight}
           onChange={(event)=> setWeight(event.target.value)}/>
        
        </div>

        <div className='flex flex-row justify-center '>
          <label htmlFor="">Height(in)</label>
          <input className='ml-2.5 p-1 rounded-md font-bold border border-slate-400' type="text"
           placeholder='Enter your Height'
           value={height}
           onChange={(event)=> setHeight(event.target.value)}
           />
        </div>

        <div>
          <button type='submit'
           className='bg-green-600 p-1.5 my-3 rounded-lg'>
            Calculate
          </button >
        </div>
          <div>
            <h1 className='font-bold'>Your Bmi is :{bmiVal} </h1>
            <p>{message}</p>
          </div>
      </form>

      
    </div>
    </>
  )
}