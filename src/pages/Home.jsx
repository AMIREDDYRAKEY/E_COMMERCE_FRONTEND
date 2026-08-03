import React from 'react'
import Navbar from '../components/Navbar'
import Menuitems from '../components/Menuitems'
import Slider from '../components/Slider'
import Cards from '../components/Cards'
import Bikeslider from '../components/Bikeslider'
import Fashionslider from '../components/Fashionslider'
import Cardsprice from '../components/Cardsprice'
import Contact from '../components/Contact'

import Header from '../Mobileview/Header'
import Searchbar from '../Mobileview/Searchbar'
import Deliverbox from '../Mobileview/Deliverbox'
import Bottomnav from '../Mobileview/Bottomnav'
import Mobileslider from '../Mobileview/Mobileslider'
import Featurebar from '../Mobileview/Featurebar'
import Aplications from '../Mobileview/Applications'
import Offers from '../Mobileview/Offers'
import Watchoffers from '../Mobileview/Watchoffers'
import Bluetooth from '../Mobileview/Bluetooth'
import Slippers from '../Mobileview/Slippers'

const Home = () => {
  return (
    <div className='bg-[#E3E6E6]'>
      {/* ========== DESKTOP VIEW (lg and above) ========== */}
      <div className='hidden lg:block'>
        <Navbar />
        <Menuitems />
        <Slider />
        <Cards />
        <div className='pb-[20px]'><Bikeslider /></div>
        <div className='pb-[20px]'><Fashionslider /></div>
        <Cardsprice />
        <div className='pb-[20px]'><Fashionslider /></div>
        <Contact />
      </div>

      {/* ========== MOBILE VIEW (below lg) ========== */}
      <div className="lg:hidden w-full overflow-y-auto bg-gray-100">
        <Header />
        <Searchbar />
        <div className='bg-gradient-to-b from-red-400 to-red-400 mt-[-10px] pb-2'>
          <Deliverbox />
        </div>
        <div className='bg-white pb-[20px]'><Mobileslider /></div>
        <div className='bg-white pb-[20px]'><Featurebar /></div>
        <div className='bg-white pb-[30px]'><Aplications /></div>
        <div className='bg-white pb-[10px]'><Offers /></div>
        <div className='bg-white'><Watchoffers /></div>
        <div className='bg-white'><Bluetooth /></div>
        <div className='bg-white'><Slippers /></div>
        <Bottomnav />
      </div>
    </div>
  )
}

export default Home