import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const eternityGiftCard: ICard = {
  id: `eternity-gift`,
  text: {
    en: `This card is a collectionable card and cannot be played.`,
    fr: `Cette carte est une carte de collection ne peut pas être jouée.`,
  },
  lore: {
    en: `« I will offer your son eternity. »\n- Ovil, l'oublié`,
    fr: `« J'offrirai à votre fils l'éternité. »\n- Ovil, l'oublié`,
  },
  imageUrl: `https://game-assets.thefirstspine.fr/eternity-gift.png`,
  name: {
    en: `Eternity gift`,
    fr: `Don d'éternité`,
  },
  stats: {
    life: 56,
    capacities: ['death'],
    bottom: {
      defense: 1,
      strength: 1,
    },
    left: {
      defense: 1,
      strength: 1,
      capacity: 'aura',
    },
    right: {
      defense: 1,
      strength: 1,
      capacity: 'aura',
    },
    top: {
      defense: 1,
      strength: 1,
      capacity: 'threat',
    },
  },
  type: 'artifact',
  art: 'Maylhine, Teddy Gandon',
};

export default eternityGiftCard;
