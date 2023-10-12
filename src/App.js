import React from 'react'
import NavbarMain from './compnents/NavbarMain'
import MainCard from './compnents/MainCard'

const App = () => {
  return (
    <>
    <NavbarMain/>
    <h1>GMC AFRICA</h1>
    <div className='main-div'>
    <MainCard src='https://shorturl.at/ruAP2' title='front-end'/>
    <MainCard src='https://shorturl.at/S0179' title='back-end'/>
    <MainCard src='https://shorturl.at/bzL19' title='full-stack'/>
    </div>
    
    </>
  )
}

export default App