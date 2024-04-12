import React, { useState } from 'react'
import protection1 from "../../assets/protection1.png"
import protection2 from "../../assets/protection2.png"
import protection3 from "../../assets/protection3.png"
const Protection = () => {
    const [dark , setDark] = useState();
    const [light , setLight] = useState(1);
    const handleDark = ()=>{
        setDark(true)
        setLight(false)
        localStorage(true)
    }
    const handleLight = () =>{
        setLight(true)
        setDark(false)
        localStorage(true)
       
    }
  return (
    <div className={`${dark?"bg-[#303030]":light ? "bg-[#ffff]" : "bg-[#ffff]"} py-[50px]`}>
    <div className="container">
        <h2 className='lg:w-[700px] md:w-[500px] sm:w-[300px] w-[200px] m-auto font-jost font-semibold text-center lg:text-[50px] md:text-[35px] sm:text-[20px] text-[14px] text-[#8C8C8C] lg:pt-[35px] md:pt-[-30px]'>Feels great in low-light Mood for your <span className='text-primary'>eye Protection</span></h2>
        <div className='flex items-center justify-center'>
            <img className='w-[40%] ' src={protection1} alt="phone" />
            <img className='w-[40%] lg:mx-[-110px] md:mx-[-70px] sm:mx-[-60px] mx-[-30px]' src={protection2} alt="phone" />
            <img className='w-[40%] ' src={protection3} alt="phone" />
        </div>
        <div className='flex items-center justify-between sm:mt-[-45px] mt-[-15px]'>
            <p className={`lg:w-[640px] md:w-[350px] sm:w-[250px] w-[180px] font-openSans font-medium lg:text-[18px] md:text-[11px] sm:text-[9px] text-[6px] ${dark ? "text-[#fff]" : "text-[#4E4E4E]"} `}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt dolore magna aliqua.</p>
            <div className='flex items-center justify-center gap-[10px] border-[2px] border-[#7171718f] lg:py-[5px] md:py-[3px] py-[1px] lg:px-[8px] md:px-[5px] sm:px-[2px] px-[2px] rounded-full'>
                <h4 onClick={handleDark} className={`${dark ? "bg-[#FFC173] lg:py-[4px] md:py-[2px] sm:py-[1.5px] py-[1.3px] lg:px-[10px] md:px-[5px] sm:px-[4px] px-[3px] rounded-full text-[#000]":"text-[#7D5FFF]"} font-openSens font-semibold lg:text-[14px] md:text-[10px] sm:text-[9px] text-[8px]`}>Dark</h4>
                <h4 onClick={handleLight} className={`${light? "bg-[#FFC173] lg:py-[4px] md:py-[2px] sm:py-[1.5px] py-[1.3px] lg:px-[10px] md:px-[5px] sm:px-[4px] px-[3px] rounded-full text-[#000000]" : "text-[#7D5FFF] bg-transparent"} font-openSans font-semibold lg:text-[14px] md:text-[10px] sm:text-[9px] text-[8px]`}>Light</h4>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Protection
