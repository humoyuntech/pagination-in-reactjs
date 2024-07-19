import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'

import './App.css'

function App() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setcurrentPage] = useState(1)
  const [countriesPerPage] = useState(10)

  useEffect(() => {
   const getCountries = async () => {
    setLoading(true)
    const res = await axios.get('https://restcountries.com/v3.1/all')
    setCountries(res.data)
    setLoading(false)
   } 
   getCountries()
  }, [])

  return (
    <div className='container mt-5'>
      <h1 className="text-primary">Countries</h1>
      <Countries countries={countries} loading={loading}/>
    </div>
  )
}

export default App
