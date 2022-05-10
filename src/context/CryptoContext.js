import {useState, useEffect, createContext} from 'react'
import axios from 'axios'

const CryptoContext = createContext()

export const CryptoProvider = ({children}) => {
    const [searchResults, setSearchResults] = useState([])
    const [coins, setCoins] = useState([])
    const [input, setInput] = useState('')

    const [currentPage, setCurrentPage] = useState(1)
    const [resultsPerPage] = useState(10)
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    const totalResults = coins.length



    const searchCoins = () => {
        axios.get(`https://api.coingecko.com/api/v3/search?query=${input}`)
        .then((res) => setSearchResults(res.data))
    }

    const getCoins = async() => {
        await axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then((res) => setCoins(res.data))
    }

    return <CryptoContext.Provider value={{
        coins,
        input,
        searchResults,
        setSearchResults,
        setCoins,
        setInput,
        searchCoins,
        getCoins,
        currentPage,
        setCurrentPage,
        resultsPerPage,
        totalResults,
        paginate,
    }}>
        {children}
    </CryptoContext.Provider>
}

export default CryptoContext