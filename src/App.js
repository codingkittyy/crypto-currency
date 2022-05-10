import {CryptoProvider} from './context/CryptoContext'
import { ChakraProvider } from '@chakra-ui/react'
import Home from './pages/Home';



function App() {
  return (
    <ChakraProvider>
      <CryptoProvider>
        <div className="App">
         <Home />
        </div>
      </CryptoProvider>
    </ChakraProvider>
  );
}

export default App;
