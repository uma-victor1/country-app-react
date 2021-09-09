import React from 'react'
import {useState} from 'react'
import { useHistory, useLocation } from 'react-router-dom'

function Details() {
    const [mode, setMode] = useState(true)
    const [toggleBtn, setToggleBtn] = useState('<i class="far fa-sun"></i> light Mode')

    let {state} = useLocation()
    let history = useHistory()

    const goHome = ()=> {
        history.push("/")
    }
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
                <div className="container pl-4 mx-auto mb-16">
                    <button className="px-8 py-2 bg-white text-gray-600 shadow-md rounded-lg dark:bg-gray-700 dark:text-white"
                    onClick={()=> {goHome()}}
                    >
                    <i class="fa fa-arrow-left"></i> Back
                    </button>
                </div>
                <div className="container flex flex-col md:flex-row mx-auto p-8 pl-0 pr-0">
                    <img src={state.flag} className="md:w-1/2 w-full p-4 md:pr-8" alt={state.name}></img>
                    <div className="md:p-8 pl-0">
                        <div className="grid grid-cols-2 p-4 gap-x-20 gap-y-4">
                        <p>Native Name: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.nativeName}</span></p>
                        <p>Population: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.population}</span></p>
                        <p>Region: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.region}</span></p>
                        <p>Sub Region: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.subregion}</span></p>
                        <p>Capital: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.capital}</span></p>
                        <p>Top Level Domain: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.topLevelDomain[0]}</span></p>
                        <p>Currencies: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.currencies.map(cur => cur.name)}</span></p>
                        <p>Languages: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.languages.map(lang => lang.name+', ')}</span></p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Details
