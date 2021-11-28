import plugin from 'windicss/plugin';

export default plugin(({ addComponents }) => {
  addComponents({
    '.nav-item': {
      background: 'linear-gradient(180deg, #EEE 0%, #EEE 50%, #FFF 50%, #FFF 100%)',
      backgroundSize: '100% 210%',
      padding: '1em',
      transition: 'all 0.1s ease-out',
      backgroundPositionY: '95%',
      '&:hover': {
        backgroundPositionY: '0%',
      },
    },
  });
});
