import React, { useContext } from 'react'
import CryptoContext from '../context/CryptoContext'

function Pagination() {
    const {resultsPerPage, totalResults, paginate} = useContext(CryptoContext)
    const pageNumbers = []
    for(let i = 1; i<= Math.ceil(totalResults /resultsPerPage); i++) {
        pageNumbers.push(i)
    }

console.log(pageNumbers)

  return (
    <nav className='text-center d-flex align-items-center justify-content-center mx-auto mt-4'>
        <ul className="pagination">
            {pageNumbers.map((number,i) => (
                <li key={i} className='page-item'>
                    <a onClick={() => paginate(number)} href='!#' className='page-link'>
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination