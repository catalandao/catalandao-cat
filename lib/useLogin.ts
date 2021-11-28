import { useEffect, useState } from 'react';
import { useWallet } from 'use-wallet';
import Web3 from 'web3';
import Web3Token from 'web3-token';


export default function useLogin() {
  const wallet = useWallet();
  const [verified, setVerified] = useState(false);
  const [address, setAddress] = useState<string | null>();
  // check local storage first
  useEffect(() => {
    const fx = async () => {
      const stored = localStorage.getItem('wet');
      if (stored) {
        const response = await fetch('/api/authorization', { headers: { Authorization: stored } });
        if (response.status === 200) {
          const data = await response.json();
          setVerified(true);
          setAddress(data.address);
        }
      }
    };
    fx();
  });

  const activate = () => wallet.connect('injected');
  const verify = async () => {
    const web3 = new Web3(wallet.ethereum);
    const newToken = await Web3Token.sign((msg: unknown) => (<any>web3.eth.personal).sign(msg, wallet.account), '1d');
    const response = await fetch('/api/authorization', { headers: { Authorization: newToken } });
    if (response.status === 200) {
      localStorage.setItem('wet', newToken);
      setVerified(true);
      setAddress(wallet.account);
    }
  };

  const disconnect = () => {
    localStorage.removeItem('wet');
    setVerified(false);
  };


  return { activate, verified, verify, state: wallet.status, address, disconnect };
}
