import { createContext, useState, useEffect } from "react";

export const apiContext = createContext();

export const DataProvider = ({children}) => {
    const [apiData, setApiData] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/users')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setApiData(data)
        })
        .catch(err => console.log(err))
    }, [])
    return(
        <apiContext.Provider value={apiData}>
            {children}
        </apiContext.Provider>
    )
}
