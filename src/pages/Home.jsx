import React, { useContext } from 'react'
import CoinData from '../components/CoinData'
import InputForm from '../components/InputForm'
import Pagination from '../components/Pagination'
import SearchResults from '../components/SearchResults'
import CryptoContext from '../context/CryptoContext'

function Home() {
    const {coins, input, resultsPerPage,currentPage} = useContext(CryptoContext)
    
    // Get current posts (listed in home page)
    const indexOfLastPost = currentPage * resultsPerPage
    const indexOfFirstPost = indexOfLastPost - resultsPerPage

    const currentResults = coins.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <div>
        <InputForm />
        {
            input != '' ?
            <>
            <SearchResults />
            </> :
            <>
            <CoinData results={currentResults} />
            <Pagination />
            </>
        }
    </div>
  )
}

export default Home