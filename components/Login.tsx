import { useState } from 'react';
import { useWallet } from 'use-wallet';
import Web3 from 'web3';
import Web3Token from 'web3-token';

const Login = () => {
  const wallet = useWallet();
  const [verified, setVerified] = useState(false);
  const activate = () => wallet.connect('injected');
  const verify = async () => {
    const web3 = new Web3(wallet.ethereum);
    const token = await Web3Token.sign((msg: unknown) => web3.eth.personal.sign(msg, wallet.account), '1d');
    const response = await fetch('/api/authorization', { headers: { Authorization: token } });
    if (response.status === 200) {
      setVerified(true);
    }
  };

  if (verified) {
    return <span>Verified!</span>;
  }

  if (wallet.status === 'connecting') {
    return (<span>Connecting...</span>);
  }

  if (wallet.status === 'connected') {
    return (<button onClick={() => verify()}>Verify?</button>)
  }

  // ethereum?.getSigner(wallet.account).sign('hola')
  return <button onClick={() => activate()}>connect</button>;
};

export default Login;
