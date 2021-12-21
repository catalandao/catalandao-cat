import type { ResponseItem } from '@/pages/api/tio';
import { createContext, useContext, useState } from 'react';
import useSWR from 'swr';
import { fetcher } from './loaders';

export interface Owner {
  address :string;
  imageURL: string;
}
    
export const useOwners = (): Owner[] => {
  const { data = [] } = useSWR('/api/tio', fetcher);
  const owners = data.filter(({ isSold }: ResponseItem) => isSold).map(
    ({ winnerAddress, imageURL }: ResponseItem) => ({
      address: winnerAddress,
      imageURL,
    }),
  );
  return owners as Owner[];
};

// Game logic and context

interface Context {
  amountToFed: number;
  eaten: number,
  hungry: boolean;
  feed: () => void;
}

const GameContext = createContext<Context>({
  amountToFed: 0,
  eaten: 0,
  hungry: false,
  feed: () => null,
});

interface ProviderProps {
  children: React.ReactNode;
}
const Provider = ({ children }: ProviderProps) => {
  const [eaten, setEaten] = useState(0);
  const amountToFed = 3;
  const hungry = amountToFed > eaten;
  const feed = () => setEaten(eaten + 1);

  return (
    <GameContext.Provider value={{ feed, eaten, hungry, amountToFed }}>
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => useContext(GameContext);

export { Provider, GameContext as Context, useGameContext };
