import React from 'react'
import minibackground from "../../assets/minibackground.png"
import player from "../../assets/player.png"
import { IoIosArrowRoundForward } from "react-icons/io";
import paymentphone from "../../assets/paymentphone.png"

const Paymenteasily = () => {
  return (
    <div className='container'>
        <div className=' sm:mt-[80px] mt-[40px] sm:px-[30px] sm:pt-[45px] lg:pb-[200px] md:pb-[120px] sm:pb-[90px] pb-[50px] border-b-[1px] border-b-[#d8d8d8b3]'>
        <div className='flex'>
            <div className='lg:w-[550px] md:w-[450px] sm:w-[440px] w-[420px]'>
                <h2 className='font-jost font-semibold lg:text-[45px] md:text-[30px] sm:text-[20px] text-[14px] text-[#B5B5B5] lg:leading-[45px] md:leading-[30px] sm:leading-[25px] leading-[18px]'>Send and receive <span className='text-primary'>payments</span> easily</h2>
                <p className='font-openSans font-medium text-[#4E4E4E] lg:text-[17px] md:text-[14px] sm:text-[11px] text-[8px] xl:mt-[18px] lg:mt-[14px] md:mt-[9px] sm:mt-[6px] mt-[2px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                <p className='font-openSans font-medium text-[#4E4E4E] lg:text-[14px] md:text-[11px] sm:text-[8px] text-[5px] xl:mt-[30px] lg:mt-[15px] md:mt-[10px] sm:mt-[5px] mt-[2px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className='flex items-center xl:mt-[25px] lg:mt-[15px] md:mt-[8px] sm:mt-[4px]'>
                    <img className='lg:w-[95px] md:w-[60px] sm:w-[45px] w-[30px]' src={player} alt="logo" />
                    <div>
                        <h4 className='lg:text-[18px] md:text-[14px] sm:text-[9px] text-[5px] font-bold font-openSans text-primary '>Lorem ipsum dolor sit</h4>
                        <div className='flex items-center lg:gap-[10px] md:gap-[5px] sm:gap-[3px] gap-[2px]'>
                        <a className='font-openSans lg:text-[14px] md:text-[11px] sm:text-[8px] text-[4px] font-medium text-[#7D5FFF]' href="">amet, consectetur</a>
                        <IoIosArrowRoundForward className='lg:text-[25px] md:text-[18px] sm:text-[15px] text-[7px] text-[#7D5FFF]'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex relative justify-end items-center'>
                <img className='lg:w-[86%] md:w-[90%] sm:w-[85%] w-[90%] rounded-3xl' src={minibackground} alt="background" />
                <img className='absolute xl:top-[50px] lg:top-[90px] md:top-[90px] sm:top-[50px] top-[55px] sm:right-[36px] right-[25px] md:w-[70%] sm:w-[60%] w-[60%]' src={paymentphone} alt="phone" />
            </div>
        </div>
        <div className='xl:mt-[35px] lg:mt-[25px] bg-scondery md:p-[45px] sm:p-[25px] p-[15px] rounded-2xl'>
           <div className='lg:px-[15px] md:px-[2px] sm:px-[4px] px-[3px] border-r-[1.5px] inline-block border-r-[#D8D8D8]'>
            <h3 className='font-jost font-semibold lg:text-[30px] md:text-[23px] sm:text-[15px] text-[12px] text-primary'>12.000 +</h3>
            <p className='font-openSans font-medium lg:text-[12px] md:text-[8px] sm:text-[7px] text-[6px] text-[#4E4E4E]'>Downloaded</p>
            </div> 
           <div className='lg:px-[30px] md:px-[12px] sm:px-[9px] px-[7px] border-r-[1.5px] inline-block border-r-[#D8D8D8]'>
            <h3 className='font-jost font-semibold lg:text-[30px] md:text-[23px] sm:text-[15px] text-[12px] text-primary'>$10 M</h3>
            <p className='font-openSans font-medium lg:text-[12px] md:text-[8px] sm:text-[7px] text-[6px] text-[#4E4E4E]'>Transactions</p>
            </div> 
           <div className='lg:px-[30px] md:px-[12px] sm:px-[9px] px-[7px] inline-block'>
            <h3 className='font-jost font-semibold lg:text-[30px] md:text-[23px] sm:text-[15px] text-[12px] text-primary'>1.000 +</h3>
            <p className='font-openSans font-medium lg:text-[12px] md:text-[8px] sm:text-[7px] text-[6px] text-[#4E4E4E]'>Feedback</p>
            </div> 
        </div>
        </div>
        
    </div>
  )
}

export default Paymenteasily