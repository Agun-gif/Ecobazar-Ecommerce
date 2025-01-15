import React  from 'react'
import Banner from './homeComponents/Banner'
import Delivary from './homeComponents/Delivary'
import FutureProduct from './homeComponents/FutureProduct'
import TopCategory from './homeComponents/TopCategory'
import Trusted from './homeComponents/Trusted'
import Rating from './homeComponents/Rating'
import OfferBanner from './homeComponents/OfferBanner'
import BestSallerProduct from './homeComponents/BestSallerProduct'
import Seller from './homeComponents/Seller'
import LatestNews from './homeComponents/LatestNews'
import Customer from './homeComponents/Customer'
import CompanyLogo from './homeComponents/CompanyLogo'
import Contact from './homeComponents/Contact'



const HomePage = () => {
  return (
    <div>
      <Banner/>
      <Delivary/>
      <FutureProduct/>
      <TopCategory/>
      <Trusted/>
      <Rating/>
      <OfferBanner/>
      <BestSallerProduct/>
      <Seller/>
      <LatestNews/>
      <Customer/>
      <CompanyLogo/>
      <Contact/>
     
    </div>
  )
}

export default HomePage
