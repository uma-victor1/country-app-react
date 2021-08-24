import React from 'react'
import {useState, useEffect} from 'react'

function Home() {
    const [countries, setCountries] = useState([])
    const [mode, setMode] = useState(true)
    const [toggleBtn, setToggleBtn] = useState('<i class="far fa-sun"></i> light Mode')

    useEffect(() => {
       fetchCountries()
    }, [])

   const fetchCountries = async () => {
        const countries = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await countries.json()
        setCountries(data)
    }
    console.log(countries);
    //toggle dark mode
    const toggleDarkMode = () => {
        if(mode) {
            document.documentElement.classList.add('dark')
            setToggleBtn('<i class="far fa-moon"></i> Dark Mode')
            setMode(current => current = !current)
        }
        if(!mode){
            document.documentElement.classList.remove('dark')
            setToggleBtn('<i class="far fa-sun"></i> Light Mode')
            setMode(current => current = !current)
        }
    }
    return (
        <div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
            <div className="w-screen shadow-md py-8 px-3 bg-white dark:bg-gray-700 dark:text-white mb-16">
                <div className="flex container mx-auto">
                    <h1 className="font-bold text-xl">Where in the World?</h1>
                    <div className="ml-auto font-medium">
                        <button onClick={()=> toggleDarkMode()} dangerouslySetInnerHTML={{__html: toggleBtn}}></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
