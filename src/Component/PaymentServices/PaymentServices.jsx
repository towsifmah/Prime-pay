import React from 'react'
import basic from "../../assets/basic.png"
import standard from "../../assets/standard.png"
import premium from "../../assets/premium.png"
const PaymentServices = () => {
  return (
    <div className='container'>
        <h2 className='lg:w-[550px] md:w-[450px] sm:w-[350px] w-[320px] mt-[55px] font-jost font-semibold md:leading-[55px] sm:leading-[40px] leading-[30px] lg:text-[50px] md:text-[45px] sm:text-[35px] text-[30px] text-center text-[#B5B5B5] m-auto'>Our payment services <span className='text-[#231656]'>world wide</span></h2>
        <div className='sm:flex sm:justify-center xl:gap-[20px] lg:gap-[11px] md:gap-[8px] sm:gap-[5px] py-[50px] sm:pl-0 pl-[10px]'>
            <div className='xl:w-[438px] lg:w-[320px] md:w-[300px] sm:w-[250px] w-[280px] flex justify-center'>
              <div className='bg-[#F2F2F2] xl:p-[25px]  md:p-[15px] sm:p-[13px] p-[18px] rounded-xl'>
              <img className='xl:w-full lg:w-[250px] md:w-[220px] sm:w-[180px] w-[280px]'  src={basic} alt="image" />
                <div className='flex items-center xl:gap-[190px] lg:gap-[120px] md:gap-[110px] sm:gap-[100px] gap-[130px] mt-[10px]'>
                    <h4 className='font-jost font-medium xl:text-[30px] lg:text-[25px] md:text-[20px] sm:text-[15px] text-[25px] text-primary'>$10.00</h4>
                    <p className='font-jost font-medium xl:text-[18px] lg:text-[16px] md:text-[14px] sm:text-[11px] text-[17px] text-primary'>Month</p>
                </div>
                    <div className='bg-[#ffff] xl:p-[40px] lg:p-[26px] md:p-[20px] sm:p-[16px] p-[30px] rounded-xl '>
                    <h6 className='font-openSans font-normal xl:text-[20px] lg:text-[16px] md:text-[15px] sm:text-[11px] text-[16px] text-[#4E4E4E] md:mb-[8px] sm:mb-[3px] mb-[5px]'>Modern Design</h6>
                    <h6 className='font-openSans font-normal xl:text-[20px] lg:text-[16px] md:text-[15px] sm:text-[11px] text-[16px] text-[#4E4E4E] md:mb-[8px] sm:mb-[3px] mb-[5px]'>Easy to Customize</h6>
                    <h6 className='font-openSans font-normal xl:text-[20px] lg:text-[16px] md:text-[15px] sm:text-[11px] text-[16px] text-[#4E4E4E] md:mb-[8px] sm:mb-[3px] mb-[5px]'>Quickly Set Up A Website</h6>
                    <h6 className='font-openSans font-normal xl:text-[20px] lg:text-[16px] md:text-[15px] sm:text-[11px] text-[16px] text-[#4E4E4E] md:mb-[8px] sm:mb-[3px] mb-[5px]'>Another Feature</h6>
                    <h6 className='font-openSans font-normal xl:text-[20px] lg:text-[16px] md:text-[15px] sm:text-[11px] text-[16px] text-[#4E4E4E]'>24/7 Customer Support</h6>
                    </div>
                <a className=' flex justify-center py-[10px] rounded-full mt-[15px] font-inter font-semibold lg:text-[18px] md:text-[14px] sm:text-[12px] text-[14px] text-primary bg-[#D7D7D7] hover:bg-primary hover:text-[#D7D7D7] duration-300' href="">Get Started</a>
              </div>
            </div>

            <div className='xl:w-[438px] lg:w-[320px] md:w-[300px] sm:w-[250px] w-[280px] flex justify-center sm:my-0 my-[14px]'>
              <div className='bg-[#F2F2F2] xl:p-[25px] md:p-[15px] sm:p-[13px] p-[18px] rounded-xl'>
              <img className='mt-[-20px] xl:w-full lg:w-[250px] md:w-[220px] sm:w-[180px] w-[280px]'  src={standard} alt="image" />
                <div className='flex items-center xl:gap-[190px] lg:gap-[120px] md:gap-[110px] sm:gap-[100px] gap-[130px] mt-[10px]'>
                    <h4 className='font-jost font-medium xl:text-[30px] lg:text-[25px] md:text-[20px] sm:text-[15px] text-[25px] text-primary'>$19.00</h4>
                    <p className='font-jost font-medium xl:text-[18px] lg:text-[16px] md:text-[14px] sm:text-[11px] text-[17px] text-primary'>Month</p>
                </div>
                    <div className='bg-[#ffff] xl:p-[40px] lg:p-[26px] md:p-[21px] sm:p-[16px] p-[30px] rounded-xl '>
                    <h6 className='font-openSans font-normal xl:text-[20px] lg:text-[16px] md:text-[15px] sm:text-[11px] text-[16px] text-[#4E4E4E] md:mb-[8px] sm:mb-[3px] mb-[5px]'>Modern Design</h6>
                    <h6 className='font-openSans font-normal xl:text-[20px] lg:text-[16px] md:text-[15px] sm:text-[11px] text-[16px] text-[#4E4E4E] md:mb-[8px] sm:mb-[3px] mb-[5px]'>Easy to Customize</h6>
                    <h6 className='font-openSans font-normal xl:text-[20px] lg:text-[16px] md:text-[15px] sm:text-[11px] text-[16px] text-[#4E4E4E] md:mb-[8px] sm:mb-[3px] mb-[5px]'>Quickly Set Up A Website</h6>
                    <h6 className='font-openSans font-normal xl:text-[20px] lg:text-[16px] md:text-[15px] sm:text-[11px] text-[16px] text-[#4E4E4E] md:mb-[8px] sm:mb-[3px] mb-[5px]'>Another Feature</h6>
                    <h6 className='font-openSans font-normal xl:text-[20px] lg:text-[16px] md:text-[15px] sm:text-[11px] text-[16px] text-[#4E4E4E]'>24/7 Customer Support</h6>
                    </div>
                <a className=' flex justify-center py-[10px] rounded-full mt-[15px] font-inter font-semibold lg:text-[18px] md:text-[14px] sm:text-[12px] text-[14px] text-primary bg-[#D7D7D7] hover:bg-primary hover:text-[#D7D7D7] hover:font-inter hover:font-semibold duration-300' href="">Get Started</a>
              </div>
            </div>

            <div className='xl:w-[438px] lg:w-[320px] md:w-[300px] sm:w-[250px] w-[280px] flex justify-center'>
              <div className='bg-[#F2F2F2] xl:p-[25px] md:p-[15px] sm:p-[13px] p-[18px] rounded-xl'>
              <img className='xl:w-full lg:w-[250px] md:w-[220px] sm:w-[180px] w-[280px]'  src={premium} alt="image" />
                <div className='flex items-center xl:gap-[190px] lg:gap-[120px] md:gap-[110px] sm:gap-[100px] gap-[130px] mt-[10px]'>
                    <h4 className='font-jost font-medium xl:text-[30px] lg:text-[25px] md:text-[20px] sm:text-[15px] text-[25px] text-primary'>$35.00</h4>
                    <p className='font-jost font-medium xl:text-[18px] lg:text-[16px] md:text-[14px] sm:text-[11px] text-[17px] text-primary'>Month</p>
                </div>
                    <div className='bg-[#ffff] xl:p-[40px] lg:p-[26px] md:p-[21px] sm:p-[16px] p-[30px] rounded-xl '>
                    <h6 className='font-openSans font-normal xl:text-[20px] lg:text-[16px] md:text-[15px] sm:text-[11px] text-[16px] text-[#4E4E4E] md:mb-[8px] sm:mb-[3px] mb-[5px]'>Modern Design</h6>
                    <h6 className='font-openSans font-normal xl:text-[20px] lg:text-[16px] md:text-[15px] sm:text-[11px] text-[16px] text-[#4E4E4E] md:mb-[8px] sm:mb-[3px] mb-[5px]'>Easy to Customize</h6>
                    <h6 className='font-openSans font-normal xl:text-[20px] lg:text-[16px] md:text-[15px] sm:text-[11px] text-[16px] text-[#4E4E4E] md:mb-[8px] sm:mb-[3px] mb-[5px]'>Quickly Set Up A Website</h6>
                    <h6 className='font-openSans font-normal xl:text-[20px] lg:text-[16px] md:text-[15px] sm:text-[11px] text-[16px] text-[#4E4E4E] md:mb-[8px] sm:mb-[3px] mb-[5px]'>Another Feature</h6>
                    <h6 className='font-openSans font-normal xl:text-[20px] lg:text-[16px] md:text-[15px] sm:text-[11px] text-[16px] text-[#4E4E4E]'>24/7 Customer Support</h6>
                    </div>
                <a className=' flex justify-center py-[10px] rounded-full mt-[15px] font-inter font-semibold lg:text-[18px] md:text-[14px] sm:text-[12px] text-[14px] text-primary bg-[#D7D7D7] hover:bg-primary hover:text-[#D7D7D7] hover:font-inter hover:font-semibold duration-300' href="">Get Started</a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default PaymentServices