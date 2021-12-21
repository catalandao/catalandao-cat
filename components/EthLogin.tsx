import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useCallback, useEffect, useState } from 'react';

const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] });

export const useConnect = () => {
  const { activate, account } = useWeb3React();
  const [connected, setConnected] = useState(false);
  const connect = useCallback(async () => {
    await activate(injected);
    setConnected(true);
  }, [activate, setConnected]);
  useEffect(() => {
    const fx = async () => {
      const authorized = await injected.isAuthorized();
      if (authorized) {
        connect();
      }
    };
    fx();
  }, [connect]);
  
  return { connect, account, connected };
};

const EthLogin = () => {
  const { connected, connect, account } = useConnect();
  // const { library, activate } = useWeb3React();
  if (connected) {
    return (
      <div className='text-shadow-sm text-white rounded-sm px-2 py-1 bg-gray-300 max-w-40 hover:max-w-full duration-300 transition-all'>
        <span className='truncate flex'>{account}</span>
      </div>
    );
  }

  return (
    <button className='px-6 py-2 text-white bg-blue-600 rounded-md' onClick={connect}>Connect</button>
  );
};

export default EthLogin;
