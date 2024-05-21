import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Result from './components/Result'

// URL for countries
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all/'

// Main app
const App = () => {
  const [countries, setCountries] = useState([])
  const [newSearch, setNewSearch] = useState('')

  // Getting country data 
  useEffect(() => {
    axios.get(baseUrl).then(response => {setCountries(response.data)}).catch(error => console.log(error))
  }, [])

  // Search
  const handleSearchChange = event => setNewSearch(event.target.value)

  return (
    <>
    <div>
      <Filter
        newSearch={newSearch}
        handleSearchChange={handleSearchChange}/>
    </div>

    <div>
      <Result countries={countries} filter={newSearch}/>
    </div>
    </>
  )
}

export default App