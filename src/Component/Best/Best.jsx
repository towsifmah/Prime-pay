import React from 'react'
import bestselling from "../../assets/bestselling.png"
import spring from "../../assets/spring.png"
import { IoIosStar } from "react-icons/io";

const Best = () => {
  return (
    <div className='container'>
      <div className='flex items-center justify-between md:my-[80px] sm:my-[40px] my-[20px]'>
        <div className='flex items-cente justify-center md:gap-[45px] sm:gap-[30px] gap-[18px] bg-[#c3c3c36a] rounded-xl lg:px-[50px] md:px-[30px] sm:px-[20px] px-[15px] lg:py-[25px] md:py-[15px] sm:py-[10px] py-[8px]'>
            <img className='lg:w-[200px] md:w-[120px] sm:w-[100px] w-[60px]' src={bestselling} alt="Best selling" />
            <img className='lg:w-[190px] md:w-[120px] sm:w-[100px] w-[60px]' src={spring} alt="logo" />
        </div>
        <div>
            <h2 className='font-jost font-semibold lg:text-[60px] md:text-[40px] sm:text-[20px] text-[14px] text-center text-primary'>4.5/5</h2>
            <div className='flex items-center justify-center lg:gap-[5px] md:gap-[3px] sm:gap-[1.5px] gap-[1px] lg:text-[34px] md:text-[24px] sm:text-[14px] text-[8px] text-[#FFB545] mb-[10px]'>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
            </div>
            <p className='font-openSans font-medium text-center lg:text-[20px] md:text-[13px] sm:text-[10px] text-[6px] text-primary '>On the iOS App Store</p>
        </div>
        <div>
            <h2 className='font-jost font-semibold lg:text-[60px] md:text-[40px] sm:text-[20px] text-[14px] text-center text-primary'>4.8/5</h2>
            <div className='flex items-center justify-center lg:gap-[5px] md:gap-[3px] sm:gap-[1.5px] gap-[1px] lg:text-[34px] md:text-[24px] sm:text-[14px] text-[8px] text-[#FFB545] mb-[10px]'>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
            </div>
            <p className='font-openSans font-medium text-center lg:text-[20px] md:text-[13px] sm:text-[10px] text-[6px] text-primary '>On the Android Play Store.</p>
        </div>
      </div>
    </div>
  )
}

export default Best