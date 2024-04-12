import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Banner from '../../Component/Banner/Banner'
import About from '../../Component/About/About'
import Paymenteasily from '../../Component/Paymenteasily/Paymenteasily'
import Choosing from '../../Component/Choosing/Choosing'
import Goodbye from '../../Component/Goodbye/Goodbye'
import Best from '../../Component/Best/Best'
import Protection from '../../Component/Protection/Protection'
import Banking from '../../Component/Banking/Banking'
import PaymentServices from '../../Component/PaymentServices/PaymentServices'
import Footer from '../../Component/Footer/Footer'

const FirstPage = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <About/>
        <Paymenteasily/>
        <Choosing/>
        <Goodbye/>
        <Best/>
        <Protection/>
        <Banking/>
        <PaymentServices/>
        <Footer/>
    </div>
  )
}

export default FirstPage