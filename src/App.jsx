
import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';
import { RequestAirdrop } from './RequestAirdrop';
import { ShowBalance } from './Showbalance';
import { SendTokens } from './SendTokens';
import  { SignMessage }  from './SignMessage';

function App() {
  return (
    <ConnectionProvider endpoint="https://api.devnet.solana.com">
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                  <div style={{width:"100vw", display:"flex", justifyContent:"center"}}> 
                    <WalletMultiButton />
                  </div>
                  <div style={{width:"100vw", display:"flex", justifyContent:"center"}}> 
                    {/* <RequestAirdrop/> */}
                    {/* <ShowBalance/> */}
                    {/* <SendTokens/> */}
                    <SignMessage/>
                  </div>
                </WalletModalProvider>  
            </WalletProvider>
        </ConnectionProvider> 
  )
}

export default App