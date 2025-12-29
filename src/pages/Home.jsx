import React from 'react'
import Navbar from '../components/Navbar'
import About from './About'
import Menuitems from '../components/Menuitems'
import Header from '../Mobileview/Header'
import Searchbar from '../Mobileview/Searchbar'
import Deliverbox from '../Mobileview/Deliverbox'
import Bottomnav from '../Mobileview/Bottomnav'
import Mobileslider from '../Mobileview/Mobileslider'
import Cards from '../components/Cards'
 
import Featurebar from '../Mobileview/Featurebar'
import Aplications from '../Mobileview/Applications'
import Offers from '../Mobileview/Offers'
import Watchoffers from '../Mobileview/Watchoffers'
import Bluetooth from '../Mobileview/Bluetooth'
import Slippers from '../Mobileview/Slippers'
const Home = () => {
  return (
    <div className='bg-[#E3E6E6]'>
        <div className=' hidden lg:block'><Navbar/></div>
        <div className='hidden lg:block '><Menuitems/></div>
        {/* Mobile view */}
        <div className="w-full  overflow-y-auto bg-gray-100">
        <div className='lg:hidden block'><Header/></div>
          <div className='lg:hidden block'><Searchbar/></div>
           <div className='lg:hidden block bg-gradient-to-b from-red-400 to-red-400 mt-[-10px] pb-2'><Deliverbox/></div>
            <div className='lg:hidden block bg-[#fffff] pb-[20px]'><Mobileslider/></div>
            <div className='lg:hidden block bg-[#fffff] pb-[20px]'><Featurebar/></div>
             <div className='lg:hidden block bg-[#fff] pb-[30px]'><Aplications /></div>
               <div className='lg:hidden block bg-[#fff] pb-[10px]'><Offers /></div>
            <div className='lg:hidden block bg-[#fff]' ><Watchoffers/></div>
             <div className='lg:hidden block bg-[#fff]' ><Bluetooth/></div>
             <div className='lg:hidden block bg-[#fff]' ><Slippers/></div>
           <div className='lg:hidden block'><Bottomnav/></div>
           </div>
        <div><About/></div>
    </div>
  )
}

export default Home