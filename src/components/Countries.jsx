import React from 'react'

const Countries = ({countries, loading}) => {

  if (loading) {
    return <h2>Loading...</h2>
  }

  // console.log(countries.data);
  return (
    <ul className='list-group mb-2'>
      {
        countries.map((country, i) =>(
          <li className='list-group-item' key={i}>
            {country.name}
            <img src={country.flag} alt="flag" className='ml-2' />
          </li>
        ))
      }
    </ul>
  )
}

export default Countries