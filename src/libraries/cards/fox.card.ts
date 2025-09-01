import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const foxCard: ICard = {
  id: `the-fox`,
  text: {
    en: ``,
    fr: ``,
  },
  art: 'Maylhine',
  lore: {
    en: ``,
    fr: ``,
  },
  imageUrl: `https://game-assets.thefirstspine.fr/the-fox.png`,
  name: {
    en: `Fox`,
    fr: `Renard`,
  },
  stats: {
    life: 3,
    capacities: ['run'],
    bottom: {
      defense: 0,
      strength: 3,
    },
    left: {
      defense: 0,
      strength: 4,
    },
    right: {
      defense: 0,
      strength: 4,
    },
    top: {
      defense: 0,
      strength: 2,
    },
  },
  type: 'creature',
};

export default foxCard;
