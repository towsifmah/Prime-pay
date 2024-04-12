import React from 'react'
import craditcard from "../../assets/craditcard.png"
import tick from "../../assets/tick.png"
const Banking = () => {
  return (
    <div className='bg-[#303030]'>
        <div className='container'>
            <div className='flex items-center justify-evenly sm:gap-[20px] sm:p-[60px] p-[30px]'>
                <div className='lg:w-[540px] md:w-[450px] sm:w-[350px] w-[250px]'>
                    <h5 className='font-jost font-semibold text-[#8C8C8C] xl:text-[50px] lg:text-[40px] md:text-[25px] sm:text-[20px] text-[11px] xl:leading-[60px] lg:leading-[45px] md:leading-[35px] sm:leading-[18px] leading-[12px]'>Credit is the Fastest Mobile <span className='text-[#fff]'>Banking Solution.</span></h5>
                    <p className='font-openSans font-normal xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[9px] text-[6px] text-[#fff]'>Feels great in low-light Mood for your eye Protection Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                    <div className='flex xl:mt-[20px] md:mt-[13px] sm:mt-[5px] mt-[2px]'>
                        <div>
                        <div className='flex items-center xl:gap-[8px] md:gap-[5px] sm:gap-[3px] gap-[2px]'>
                            <img className='xl:w-[25px] lg:w-[18px] md:w-[16px] sm:w-[12px] w-[6px]' src={tick} alt="tick" />
                            <h5 className='font-openSans font-medium xl:text-[16px] md:text-[10px] sm:text-[7px] text-[4px] text-[#ffff]'>All your transaction</h5>
                        </div>
                        <div className='flex items-center xl:gap-[8px] md:gap-[5px] sm:gap-[3px] gap-[2px] md:my-[10px] sm:my-[5px] my-[2.5px]'>
                            <img className='xl:w-[25px] lg:w-[18px] md:w-[16px] sm:w-[12px] w-[6px]' src={tick} alt="tick" />
                            <h5 className='font-openSans font-medium xl:text-[16px] md:text-[10px] sm:text-[7px] text-[4px] text-[#ffff]'>Receipts transaction</h5>
                        </div>
                        <div className='flex items-center xl:gap-[8px] md:gap-[5px] sm:gap-[3px] gap-[2px]'>
                            <img className='xl:w-[25px] lg:w-[18px] md:w-[16px] sm:w-[12px] w-[6px]' src={tick} alt="tick" />
                            <h5 className='font-openSans font-medium xl:text-[16px] md:text-[10px] sm:text-[7px] text-[4px] text-[#ffff]'>Experience Smart App</h5>
                        </div>
                        </div>
                        <div>
                        <div className='flex items-center xl:gap-[8px] md:gap-[5px] gap-[3px] mb-[10px]'>
                            <img className='xl:w-[25px] lg:w-[18px] md:w-[16px] sm:w-[12px] w-[6px]' src={tick} alt="tick" />
                            <h5 className='font-openSans font-medium xl:text-[16px] md:text-[10px] sm:text-[7px] text-[4px] text-[#ffff]'>Control your Budget</h5>
                        </div>
                        <div className='flex items-center xl:gap-[8px] md:gap-[5px] gap-[3px]'>
                            <img className='xl:w-[25px] lg:w-[18px] md:w-[16px] sm:w-[12px] w-[6px]' src={tick} alt="tick" />
                            <h5 className='font-openSans font-medium xl:text-[16px] md:text-[10px] sm:text-[7px] text-[4px] text-[#ffff]'>Find your expenses</h5>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='lg:w-[600px] md:w-[500px] sm:w-[400px] w-[300px]' src={craditcard} alt="card" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banking