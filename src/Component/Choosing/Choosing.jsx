import React from "react";
import socailmediacoosing from "../../assets/socailmediacoosing.png"
import security from "../../assets/security.png"
import merchant from "../../assets/merchant.png"
import merchantcard from "../../assets/merchantcard.png"
import paid from "../../assets/paid.png"
const Choosing = () => {
  return (
    <div className="container">
      <div className="my-[35px]">
        <h2 className="font-jost font-semibold md:text-[45px] md:mb-[25px] sm:text-[25px] text-base text-center text-[#B5B5B5]">
          Why it is
        </h2>
        <h2 className="font-jost font-semibold md:text-[45px] sm:text-[25px] text-base text-center text-[#B5B5B5]">
          Worth Choosing <span className="text-primary">PrimePay.</span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-[15px] mb-[50px]">
        <div className="flex items-center justify-evenly bg-[#e4e4e450] rounded-xl">
          <div className="md:w-[340px] sm:w-[260px] w-[180px]  md:py-[10px] sm:py-[8px] pl-[10px]">
            <h3 className="font-jost font-medium md:text-[30px] sm:text-[20px] text-[15px] text-primary">Integration other</h3>
            <p className="font-openSans font-medium md:text-[15px] sm:text-[10px] text-[6px] text-[#4E4E4E]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt Laoreet non curabitur gravida sagittis
              aliquam bibendum.
            </p>
          </div>
            <img className="md:w-[35%] sm:w-[30%] w-[30%]" src={socailmediacoosing} alt="Socail Media" />
        </div>
        <div className="lg:w-[348px] md:w-[300px] sm:w-[250px] w-[120px] bg-[#e4e4e450] sm:p-[25px] p-[15px] rounded-xl"> 
            <img src={security} alt="image" />
            <h3 className="font-jost font-medium md:text-[30px] sm:text-[20px] text-[12px] text-primary my-[6px]">Safe & Security</h3>
            <p className="font-openSans font-normal  md:text-[18px] sm:text-[14px] text-[6px] text-[#4E4E4E]">Easily integrate with all your need favorite tools through and APIsing including automatic </p>
        </div>
        <div className="lg:w-[348px] md:w-[300px] sm:w-[250px] w-[120px] bg-[#e4e4e450] sm:p-[25px] p-[15px] rounded-xl"> 
            <img src={merchant} alt="image" />
            <h3 className="font-jost font-medium md:text-[30px] sm:text-[20px] text-[10px] text-primary my-[6px]">Merchant account</h3>
            <p className="font-openSans font-normal md:text-[18px] sm:text-[14px] text-[6px] text-[#4E4E4E]">Easily integrate with all your need favorite tools through and APIsing including automatic </p>
        </div>
        <div className="lg:w-[348px] md:w-[300px] sm:w-[250px] w-[120px] bg-[#e4e4e450] sm:p-[25px] p-[15px] rounded-xl"> 
            <img src={merchantcard} alt="image" />
            <h3 className="font-jost font-medium md:text-[30px] sm:text-[20px] text-[10px] text-primary my-[6px]">Merchant account</h3>
            <p className="font-openSans font-normal md:text-[18px] sm:Text-[14px] text-[6px] text-[#4E4E4E]">Easily integrate with all your need favorite tools through and APIsing including automatic </p>
        </div>
        <div className="lg:w-[348px] md:w-[300px] sm:w-[250px] w-[120px] bg-[#e4e4e450] sm:p-[25px] p-[15px] rounded-xl"> 
            <img src={paid} alt="image" />
            <h3 className="font-jost font-medium md:text-[30px] sm:text-[20px] text-[10px] text-primary my-[6px]">Fast get paid</h3>
            <p className="font-openSans font-normal md:text-[18px] sm:text-[14px] text-[6px] text-[#4E4E4E]">Easily integrate with all your need favorite tools through and APIsing including automatic </p>
        </div>
      </div>
    </div>
  );
};

export default Choosing;
