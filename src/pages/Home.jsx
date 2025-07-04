import React from 'react'

import useStockCall from '../hook/useStockCall';
import { useEffect } from 'react';
import KpiCard from '../components/KpiCards';
import Charts from '../components/Charts';


const Home = () => {

  const {getData}=useStockCall()

useEffect(()=>{
  getData("sales")
  getData("purchases")
},[])
  return (
    <div>
      <KpiCard/>
      <Charts/>
    </div>
  )
}

export default Home