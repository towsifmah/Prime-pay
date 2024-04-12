import React from 'react'
import footerlogo from "../../assets/footerlogo.png"
import { BiLogoInstagram } from "react-icons/bi";
import { MdFacebook } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <>
    <div className='md:mt-[-400px] sm:mt-[-240px] mt-[-110px]'>
        <div className='container lg:translate-y-[330px] md:translate-y-[280px] sm:translate-y-[120px] translate-y-[70px]'>
            <div className='sm:p-[90px] p-[20px]'>
            <div className='bg-controlbackground object-cover bg-cover bg-no-repeat rounded-xl'>
                <div className='lg:p-[60px] md:p-[20px] sm:p-[15px] p-[14px] sm:flex sm:items-center sm:justify-center'>
                    <h3 className='xl:w-[500px] font-jost font-semibold xl:text-[40px] lg:text-[26px] sm:text-[13px] text-[20px] xl:leading-[50px]
                    lg:leading-[30px] md:leading-[20px] sm:leading-[15px] leading-[24px] text-primary'>Take control of your personal <span className='text-[#fff]'>finances today</span></h3>
                    <div className='flex items-center lg:gap-[15px] md:gap-[9px] sm:gap-[4px] gap-[2px] sm:pt-0 pt-[9px]'>
                        <input className='lg:py-[15px] md:py-[10px] sm:py-[4px] py-[5px] lg:px-[14px] md:px-[9px] sm:px-[5px] px-[5px] outline-none rounded-full font-openSans font-medium md:text-[15px] sm:text-[11px] text-[12px] text-primary placeholder:font-openSans placeholder:font-medium md:placeholder:text-[16px] sm:placeholder:text-[11px] placeholder:text-[12px]'  type="email" placeholder='Enter your email' />
                        <button className='lg:py-[14px] md:py-[9px] sm:py-[5px] py-[4px] lg:px-[25px] md:px-[18px] sm:px-[11px] px-[9px] bg-primary rounded-full font-openSans font-semibold md:text-[15px] sm:text-[8px] text-[10px] text-[#fff] hover:bg-[#efefef] hover:text-primary duration-300'>Subscribe</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
        
        <div className='container'>
            <div className='bg-[#F5F5F5] rounded-xl lg:mt-[140px] md:mt-[150px] mb-[20px] px-[65px] lg:pt-[150px] md:pt-[90px] sm:pt-[80px] pt-[60px] lg:pb-[100px] md:pb-[50px] sm:pb-[35px] pb-[25px]'>
                <div className='flex justify-center'>
                    <div className='lg:w-[445px] md:w-[365px] sm:w-[265px] w-[200px] xl:pr-[20px] lg:pr-[16px] md:pr-[14px] sm:pr-[10px] pr-[7px] border-r-[2px] border-r-[#4e4e4e7f]'>
                        <img className='xl:w-[150px] md:w-[110px] sm:w-[90px] w-[50px]' src={footerlogo} alt="logo" />
                        <p className='font-openSans font-normal xl:text-[18px] lg:text-[14px] md:text-[12px] sm:text-[9px] text-[6px] text-[#4E4E4E] sm:my-[15px] my-[8px]'>Lorem ipsum dolor sitonsecteturadipisicing elit sed do eiusmod temporincididunt Laoreet non sagittis aliquam bibendum.</p>
                        <div className='flex items-center md:gap-[15px] sm:gap-[9px] gap-[4px]'>
                            <BiLogoInstagram className='md:text-[25px] sm:text-[21px] text-[14px]'/>
                            <MdFacebook className='md:text-[25px] sm:text-[21px] text-[13px]'/>
                            <FaSquareXTwitter className='md:text-[20px] sm:text-[18px] text-[12px]'/>
                            <FaLinkedin className='md:text-[20px] sm:text-[18px] text-[12px]'/>
                            <AiFillYoutube className='md:text-[25px] sm:text-[21px] text-[16px]'/>
                        </div>
                    </div>
                    <div className='xl:pl-[50px] md:pl-[25px] sm:pl-[12px] pl-[6px]'>
                        <h4 className='font-jost font-medium xl:text-[30px] md:text-[24px] sm:text-[17px] text-[13px] text-primary'>Menu</h4>
                        <div className='flex flex-col md:gap-y-[9px] sm:gap-y-[4px] gap-y-[2px] mt-[10px]'>
                        <a className='font-openSans font-normal lg:text-[18px] md:text-[14px] sm:text-[9px] text-[6px] text-[#4E4E4E] hover:text-primary duration-300' href="">About</a>
                        <a className='font-openSans font-normal lg:text-[18px] md:text-[14px] sm:text-[9px] text-[6px] text-[#4E4E4E] hover:text-primary duration-300' href="">Features</a>
                        <div className='flex items-center md:gap-[5px] sm:gap-[3px] gap-[2px]'>
                        <a className='font-openSans font-normal lg:text-[18px] md:text-[14px] sm:text-[9px] text-[6px] text-[#4E4E4E] hover:text-primary duration-300' href="">Pricing</a>
                        <h5 className='lg:px-[7px] md:px-[4px] sm:px-[3px] px-[2.5px] bg-[#2FCF3F] font-openSans font-medium lg:text-[11px] md:text-[8px] sm:text-[5px] text-[4px] text-[#fff] rounded-full uppercase'>Offer</h5>
                        </div>
                        <a className='font-openSans font-normal lg:text-[18px] md:text-[14px] sm:text-[9px] text-[6px] text-[#4E4E4E] hover:text-primary duration-300' href="">Blog</a>
                        <a className='font-openSans font-normal lg:text-[18px] md:text-[14px] sm:text-[9px] text-[6px] text-[#4E4E4E] hover:text-primary duration-300' href="">How it Work</a>
                        </div>
                    </div>
                    <div className='xl:pl-[50px] md:pl-[35px] sm:pl-[12px] pl-[5px]'>
                        <h4 className='font-jost font-medium xl:text-[26px] lg:text-[20px] md:text-[16px] text-[10px] sm:text-[15px] text-primary'>Utility pages</h4>
                        <div className='flex flex-col md:gap-y-[9px] sm:gap-y-[4px] gap-y-[2px] mt-[10px]'>
                        <a className='font-openSans font-normal lg:text-[18px] md:text-[13px] sm:text-[9px] text-[6px] text-[#4E4E4E] hover:text-primary duration-300' href="">Style guide</a>
                        <a className='font-openSans font-normal lg:text-[18px] md:text-[13px] sm:text-[9px] text-[6px] text-[#4E4E4E] hover:text-primary duration-300' href="">Password protected</a>
                        <a className='font-openSans font-normal lg:text-[18px] md:text-[13px] sm:text-[9px] text-[6px] text-[#4E4E4E] hover:text-primary duration-300' href="">404 Not found</a>
                        <a className='font-openSans font-normal lg:text-[18px] md:text-[13px] sm:text-[9px] text-[6px] text-[#4E4E4E] hover:text-primary duration-300' href="">Licenses</a>
                        <a className='font-openSans font-normal lg:text-[18px] md:text-[13px] sm:text-[9px] text-[6px] text-[#4E4E4E] hover:text-primary duration-300' href="">Changelog</a>
                        </div>
                    </div>
                    <div className='xl:pl-[60px] md:pl-[45px] sm:pl-[18px] pl-[5px]'>
                        <h4 className='font-jost font-medium xl:text-[30px] md:text-[21px] sm:text-[17px] text-[12px] text-primary'>Address</h4>
                        <div className='flex flex-col md:gap-y-[9px] sm:gap-y-[4px] gap-y-[2px] mt-[10px]'>
                            <p className='font-openSans font-medium lg:text-[14px] md:text-[12px] sm:text-[9px] text-[6px] text-[#4E4E4E] hover:text-primary duration-300'>1700 W Blancke St, kiyev</p>
                            <p className='font-openSans font-medium lg:text-[14px] md:text-[12px] sm:text-[9px] text-[6px] text-[#4E4E4E] hover:text-primary duration-300'>port south USA, America</p>
                            <h3 className='font-openSans font-medium lg:text-[14px] md:text-[12px] sm:text-[9px] text-[6px] text-[#4E4E4E] hover:text-primary duration-300 mt-[45px]'>+880 1617971644</h3>
                            <h3 className='font-openSans font-medium lg:text-[14px] md:text-[12px] sm:text-[9px] text-[6px] text-[#4E4E4E] hover:text-primary duration-300'>mahmudtarak24@gmail.com</h3>
                        <a className='font-inter md:text-base sm:text-[12px] text-[5px] flex justify-center font-medium md:py-[8px] sm:py-[5px] py-[3px] text-[#fff] rounded-full bg-[#625FFB] hover:text-[#625FFB] hover:bg-[#ffffff] duration-300' href="">Get A Quote</a>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
    <div className='container'>
        <h4 className='flex justify-center pb-[25px] font-openSans font-semibold text-primary lg:text-[20px] md:text-[15px]  sm:text-[13px] text-[8px]'>Copyright ©  <span className='font-bold'>Primarily</span> | Designed by Mahmud Hasan</h4>
    </div>
    </>
  )
}

export default Footer