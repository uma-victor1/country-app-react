import React from 'react'
import {useState, useEffect} from "react"
import { findRenderedDOMComponentWithTag } from 'react-dom/cjs/react-dom-test-utils.development'

function Home() {

    const [countries, setCountries] = useState([])

    useEffect(() => {
       fetchCountries()
    }, [])

   const fetchCountries = async () => {
        const countries = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await countries.json()
        setCountries(data)
    }
    console.log(countries);
    return (
        <div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
            
        </div>
    )
}

export default Home
