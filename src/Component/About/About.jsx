import React from 'react'
import account from "../../assets/aboutaccount.png"
import bank from "../../assets/aboutbank.png"
import doller from "../../assets/aboutdoller.png"
const About = () => {
  return (
    <div className='container'>
        <div className='bg-scondery rounded-xl'>
            <div className='mt-[45px] flex justify-around md:pt-[300px] sm:pt-[220px] pt-[90px] sm:pb-[65px] pb-[30px]'>
                <div className='xl:w-[350px] lg:w-[300px] md:w-[260px] sm:w-[180px] w-[150px] text-center'>
                    <img className='md:w-[110px] sm:w-[90px] w-[45px] m-auto' src={account} alt="icon" />
                    <h3 className='font-jost font-medium text-primary lg:text-[25px] md:text-[18px] sm:text-[15px] text-[10px]'>Creat an account</h3>
                    <p className='font-openSans font-medium text-[#4E4E4E] xl:text-[15px] lg:text-[14px] md:text-[10px] sm:text-[9px] text-[6px]'>Aspernatur sit adipisci quaerat unde Redug Lagre dolor sit amets consectetus. Agencies define their new business</p>
                </div>
                <div className='xl:w-[350px] lg:w-[300px] md:w-[260px] sm:w-[180px] w-[150px] text-center'>
                    <img className='md:w-[110px] sm:w-[90px] w-[45px]  m-auto' src={bank} alt="icon" />
                    <h3 className='font-jost font-medium text-primary lg:text-[25px] md:text-[18px] sm:text-[15px] text-[10px]'>Attach bank accounts</h3>
                    <p className='font-openSans font-medium text-[#4E4E4E] xl:text-[15px] lg:text-[14px] md:text-[10px] sm:text-[9px] text-[6px]'>Aspernatur sit adipisci quaerat unde Redug Lagre dolor sit amets consectetus. Agencies define their new business</p>
                </div>
                <div className='xl:w-[350px] lg:w-[300px] md:w-[260px] sm:w-[180px] w-[150px] text-center'>
                    <img className='md:w-[110px] sm:w-[90px] w-[45px] m-auto' src={doller} alt="icon" />
                    <h3 className='font-jost font-medium text-primary lg:text-[25px] md:text-[18px] sm:text-[15px] text-[10px]'>Send money</h3>
                    <p className='font-openSans font-medium text-[#4E4E4E] xl:text-[15px] lg:text-[14px] md:text-[10px] sm:text-[9px] text-[6px]'>Aspernatur sit adipisci quaerat unde Redug Lagre dolor sit amets consectetus. Agencies define their new business</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About