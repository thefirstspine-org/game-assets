import { ICard } from '@thefirstspine/types-rest';

// tslint:disable: max-line-length
const barbersCard: ICard = {
  id: `barbers`,
  text: {
    en: ``,
    fr: ``,
  },
  lore: {
    en: `« I challenge you to cross them. »\n- Blase-the-blasted.`,
    fr: `« Je vous défie de les franchir. »\n- Olivier-le-fou-droyé.`,
  },
  art: 'Maylhine',
  imageUrl: `https://static.thefirstspine.fr/barbers.png`,
  name: {
    en: `Barbers`,
    fr: `Barbelés`,
  },
  stats: {
    life: 1,
    bottom: {
      defense: 1,
      strength: 1,
    },
    left: {
      defense: 0,
      strength: 3,
    },
    right: {
      defense: 0,
      strength: 3,
    },
    top: {
      defense: 0,
      strength: 4,
    },
  },
  type: 'artifact',
};

export default barbersCard;
