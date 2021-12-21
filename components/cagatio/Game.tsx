import Image from 'next/image';
import { Owner, useGameContext } from '@/lib/game';
import Reward, { RewardElement } from 'react-rewards';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

const Toolbar = () => {
  const { t } = useTranslation();
  const { hungry, feed, amountToFed, eaten } = useGameContext();

  if (hungry) {
    return (
      <div className=''>
        <h1 className='text-3xl'>{t('cagatio:game.title')}</h1>
        <p>{t('cagatio:game.explanation', { eaten, remaining: (amountToFed - eaten) })}</p>
        <div className='text-xl space-x-2 py-2'>
          <button
            className='bg-blue-400 p-2 rounded hover:bg-blue-200'
            onClick={feed}>{String.fromCodePoint(0x1F351)}</button>
          <button
            className='bg-blue-400 p-2 rounded hover:bg-blue-200'
            onClick={feed}>
            {String.fromCodePoint(0x1F34E)}
          </button>
          <button
            className='bg-blue-400 p-2 rounded hover:bg-blue-200'
            onClick={feed}>
            {String.fromCodePoint(0x1F34F)}
          </button>
          <button
            className='bg-blue-400 p-2 rounded hover:bg-blue-200'
            onClick={feed}>
            {String.fromCodePoint(0x1F350)}
          </button>
        </div>
      </div>
    );
  }

  return (
    <h1 className='text-3xl'>{t('cagatio:game.full.title')}</h1>
  );
};

interface GameProps {
  owner?: Owner;
}
const Game = ({ owner }: GameProps) => {
  const [reward, setReward] = useState<RewardElement>();
  const { hungry } = useGameContext();
  const beat = () => {
    if (hungry) {
      reward?.punishMe();
      return;
    }
    reward?.rewardMe();
  };


  if (!owner) {
    return <div>
      {t('cagatio:game.forbidden')}
    </div>;
  }

  return (
    <div className='flex flex-row w-full justify-center w-full'>
      <div className='p-4 px-12 max-w-screen-sm rounded bg-blue-300 flex flex-col w-full'>
        <Toolbar />
        <div className='flex flex-row flex-grow h-80 justify-center'>
          <div className='h-full w-50'>
            <Reward
              config={{
                emoji: ['🥨', '🍫', '🍩', '🍬', '🍭', '🧁', '🍦'],
                zIndex: 20,
              }}
              type="emoji"
              ref={(ref) => setReward(ref as RewardElement)}
            >
              <Image
                onClick={beat}
                width="211" height="338"
                src={owner.imageURL}
                layout="responsive"
                className="rounded-xl z-10" />
            </Reward>
          </div>
        </div>
      </div>
    </div>
  );
};
  

export default Game;
