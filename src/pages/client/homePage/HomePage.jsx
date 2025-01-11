import React  from 'react'
import Banner from './homeComponents/Banner'
import Delivary from './homeComponents/Delivary'
import FutureProduct from './homeComponents/FutureProduct'
import TopCategory from './homeComponents/TopCategory'
import Trusted from './homeComponents/Trusted'

const HomePage = () => {
  return (
    <div>
      <Banner/>
      <Delivary/>
      <FutureProduct/>
      <TopCategory/>
      <Trusted/>
    </div>
  )
}

export default HomePage
