import { useState } from "react"
import navlogo from "../../assets/Logo.svg"
import { VscThreeBars } from "react-icons/vsc";
import { GiSplitCross } from "react-icons/gi";

const Navbar = () => {
  const [barshow , setBarshow] = useState(true)

  const handleBar = () =>{
    setBarshow(!barshow)
  }
  return (
    <>
    <div className="container">
        <div className="flex items-center sm:justify-around justify-between py-[20px]">
        <img className="lg:w-[150px] md:w-[110px] sm:w-[90px] w-[90px]" src={navlogo} alt="Logo" />
        <div onClick={handleBar} className={`sm:hidden border-2 rounded duration-300 ${barshow ? "border-[#8F9CFF]" : "border-[#DE85C8]"}`}>
         {
          barshow ?
          <VscThreeBars className="text-[#DE85C8]"/>
          :
          <GiSplitCross className="text-[#8F9CFF]"/>
         }
         </div>
            <ul className={`sm:flex sm:static absolute bg-[#c7c7c74a] sm:backdrop-blur-none backdrop-blur-xl sm:rounded-none rounded-xl sm:p-0 p-[40px] sm:w-fit w-[310px] ${barshow ? "top-[-350px]" : "top-[60px]"} sm:h-0 h-[350px] duration-300 sm:z-0 z-10 sm:top-0 top-[60px] sm:items-center lg:gap-[40px] md:gap-[25px] sm:gap-[12px]  sm:text-start text-center text-primary font-inter lg:text-[15px] md:text-[11px] sm:text-[10px] text-[13px] font-medium`}>
                <li className="sm:pb-0 pb-[40px]"><a href="">About Us</a></li>
                <li className="sm:pb-0 pb-[40px]"><a href="">Features</a></li>
                <li className="sm:pb-0 pb-[40px]"><a href="">Pricing</a></li>
                <li className="sm:pb-0 pb-[50px]"><a href="">Blog</a></li>
                <a className="lg:ml-[80px] md:ml-[50px] sm:ml-[40px] lg:py-[10px] md:py-[6px] sm:py-[5px] py-[6px] lg:px-[28px] md:px-[15px] sm:px-[10px] px-[15px] border-[2px] border-primary rounded-full text-white bg-primary hover:text-primary hover:bg-white hover:border-[2px] hover:border-primary hover:font-inter hover:font-medium lg:text-[15px] md:text-[11px] sm:text-[9px] text-[12px] duration-300" href="">LOGIN</a>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar