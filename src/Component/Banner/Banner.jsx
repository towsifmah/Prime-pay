import React from 'react'
import bannerphone from "../../assets/bannerphone.png"
const Banner = () => {
  return (
    <div className='container'>
        <div className='bg-banner object-cover bg-no-repeat bg-center flex justify-center rounded-xl'>
            <div className='sm:pt-[60px] pt-[30px] md:pb-[300px] sm:pb-[200px] pb-[110px] relative'>
          <h1 className='lg:w-[55%] md:w-[60%] sm:w-[55%] w-[65%] m-auto md:text-[40px] sm:text-[29px] text-[18px] font-jost font-semibold text-primary text-center'>Ready To Launch Your Online <span className='text-white'>Payment</span> App</h1>
          <p className='md:text-[13px] sm:text-[9px] text-[7px] font-openSans font-semibold flex justify-center text-primary lg:my-[25px] md:my-[16px] sm:my-[12px] my-[5px]'>A simple yet modern solution to showcase your app</p>
          <a className='md:py-[10px] sm:py-[8px] py-[4px] md:px-[30px] sm:px-[20px] px-[10px] ml-[40%] rounded-full text-white md:text-[15px] sm:text-[12px] text-[6px]  font-inter font-semibold bg-primary hover:text-primary hover:bg-[#ffffff00] hover:border-[2px] hover:border-primary hover:font-inter duration-300' href="">Get Started</a>
          <img className='absolute lg:top-[265px] md:top-[260px] sm:top-[200px] lg:right-[38px] md:right-[15px] sm:right-[46px] right-[37px] lg:w-[90%] md:w-[95%] sm:w-[85%] w-[80%]' src={bannerphone} alt="phone" />
            </div>
        </div>
    </div>
  )
}

export default Banner