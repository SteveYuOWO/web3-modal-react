/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'

function App() {
  const [web3Modal, setWeb3Modal] = useState<Web3Modal | null>(null)

  useEffect(() => {
    // initiate web3modal
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          // infuraId: YOUR_INFURA_KEY,
        }
      },
    };

    const newWeb3Modal = new Web3Modal({
      cacheProvider: true, // very important
      network: "mainnet",
      providerOptions,
    });

    setWeb3Modal(newWeb3Modal)
  }, [])

  async function connectWallet() {
    if(!web3Modal) {
      return;
    }
    await web3Modal.connect();
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={connectWallet}>
          Connect Wallet
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error('Function not implemented.')
}

