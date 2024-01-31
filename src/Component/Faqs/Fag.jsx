import React, { useState } from 'react'
import { BsArrowRightCircle } from "react-icons/bs";


const Fag = ({elem}) => {
    const [click,setClick]=useState(false);
  return (
    <div>
        <div className=' max-w-[70%] mx-auto '>
            <a href={elem.organiser}>
                <div 
                onClick={()=>setClick(prev=>!prev)}
                className='text-4xl flex justify-between items-center group cursor-pointer rounded-full bg-gray-600 hover:bg-gray-700 p-6 px-8'>
                    <h2 className='group-hover:ml-4 duration-300'>{elem.subject? elem.subject :elem.Ques}</h2>
                    <div className='mr-5 group-hover:rotate-45 duration-300 text-5xl'>
                        <BsArrowRightCircle/>
                    </div>
                </div>
            </a>
            
            <div className={`mx-8 mt-2 ${click ? 'block' : 'hidden'}`}>
                {
                    elem.Ans ? elem.Ans :""
                }
            </div>
        </div>
        
    </div>
  )
}

export default Fag