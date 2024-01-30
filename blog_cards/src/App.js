import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Cards from './components/Cards/Cards'

const App = () => {
  return (
    <>
      <Navbar/>
      <Cards/>
      {/* <Cards datas={datas.slice(0,3)} />
      <Cards datas={datas.slice(4,6)} /> */}

    </>
  )
}

export default App