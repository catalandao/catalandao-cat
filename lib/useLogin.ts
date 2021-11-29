import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import Web3Token from 'web3-token';
import { InjectedConnector } from '@web3-react/injected-connector';


const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] });

export default function useLogin() {
  const { activate, account, connector, library } = useWeb3React();
  const [verified, setVerified] = useState(false);
  const connected = !!connector;

  // check local storage first
  useEffect(() => {
    const fx = async () => {
      const stored = localStorage.getItem('wet');
      if (stored) {
        const response = await fetch('/api/authorization', { headers: { Authorization: stored } });
        if (response.status === 200) {
          setVerified(true);
        }
      }
    };
    fx();
  });

  const verify = async () => {
    const newToken = await Web3Token.sign((msg: unknown) => library?.eth.personal.sign(msg, account), '1d');
    const response = await fetch('/api/authorization', { headers: { Authorization: newToken } });
    if (response.status === 200) {
      localStorage.setItem('wet', newToken);
      setVerified(true);
    }
  };

  const disconnect = () => {
    localStorage.removeItem('wet');
    setVerified(false);
  };

  return { activate: () => activate(injected), verified, verify, address: account, disconnect, connected };
}
