import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

function Details() {
    const [mode, setMode] = useState(true)
    const [toggleBtn, setToggleBtn] = useState('<i class="far fa-sun"></i> light Mode')

    let (state) = useLocation()
    let history = useHistory()

    const goHome = ()=> {
        history.push("/")
    }
    return (
        <div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
            <div className="flex container mx-auto">
                    <h1 className="font-bold text-xl">Where in the World?</h1>
                    <div className="ml-auto font-medium">
                        <button onClick={()=> toggleDarkMode()} dangerouslySetInnerHTML={{__html: toggleBtn}}></button>
                    </div>
                </div>
                <div className="container mx-auto mb-16">
                    <button className="px-8 py-2 bg-white text-gray-600 shadow-md rounded-lg dark:bg-gray-700 dark:text-white"
                    onClick={()=> {goHome()}}
                    >
                    <i class="fa fa-arrow-left"></i> Back
                    </button>
                </div>
        </div>
    )
}

export default Details
