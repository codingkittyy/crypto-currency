import React, { useContext } from 'react'
import CryptoContext from '../context/CryptoContext'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Text
  } from '@chakra-ui/react'


function SearchResults() {
    const {searchResults} = useContext(CryptoContext)

    return (
    <div className='container mt-3'>
        <TableContainer>
  <Table variant='simple' size='sm'>
    <Thead>
      <Tr>
        <Th>To convert</Th>
      </Tr>
    </Thead>
    <Tbody>
        {
            searchResults.coins?.map((items) => (
                <Tr>
                <Td key={items.id} className='d-flex align-items-center'>
                <img src={items.large} style={{height: '60px', width:'60px'}} className='me-3 rounded-circle'/>
                <Text className=''>{items.name}</Text>
                </Td>
                </Tr>
            ))
        }
    </Tbody>
  </Table>
</TableContainer>

    </div>
  )
}

export default SearchResults