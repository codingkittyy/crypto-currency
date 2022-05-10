import React, { useContext, useEffect } from 'react'
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

function CoinData({results}) {
    const {getCoins, coins} = useContext(CryptoContext)

    useEffect(() => {
        getCoins()
    }, [])


  return (
    <div className='container mt-3'>
        <TableContainer>
            <Table variant='simple' size='sm'>
                <Thead>
                <Tr>
                    <Th>Crypto Currency</Th>
                    <Th isNumeric>Price</Th>
                    <Th isNumeric>Market Cap</Th>
                    <Th isNumeric>Total Volume</Th>
                    <Th isNumeric>Price Change 24h</Th>
                    <Th isNumeric>Price Change Percentage 24h</Th>
                </Tr>
                </Thead>
                    {results.map((coin) => (
                <Tbody key={coin.id}>
                    <Tr>
                        <Td >
                            <div className='d-flex align-items-center'>
                                <img 
                                src={coin.image}
                                style={{height: '60px', width:'60px'}} />
                                <Text className='ms-3'>{coin.name}</Text>
                            </div>
                        </Td>
                        <Td isNumeric><Text>${coin.current_price.toLocaleString(undefined)}</Text></Td>
                        <Td isNumeric><Text>{coin.market_cap.toLocaleString(undefined)}</Text></Td>
                        <Td isNumeric><Text>{coin.total_volume.toLocaleString(undefined)}</Text></Td>
                        <Td isNumeric><Text
                        style={{color:`${coin.price_change_24h < 0 ? 'red' : 'black'} ` }}>${coin.price_change_24h.toLocaleString(undefined)}</Text></Td>
                        <Td isNumeric><Text
                        style={{color:`${coin.price_change_24h < 0 ? 'red' : 'black'} ` }}>{coin.price_change_percentage_24h}%</Text></Td>
                    </Tr>
                </Tbody>
                ))}
            </Table>
        </TableContainer>
    </div>
)
}

export default CoinData