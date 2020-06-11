import { ICard } from '@thefirstspine/types-rest';

// tslint:disable: max-line-length
const juvenilegreatAncientCard: ICard = {
  id: `juvenile-great-ancient`,
  text: {
    en: `At the start of your next turn, replace this card with "Great ancient". This card is a collection card can only be played during the Cycle of the Grand Ancient.`,
    fr: `Au début de votre prochain tour, remplacez cette carte par "Grand Ancien". Cette carte est une carte de collection ne peut être jouée que pendant le Cycle du Grand Ancien.`,
  },
  lore: {
    en: ``,
    fr: `« Il ne devrait pas être ici. »\n- Merlin, dernier érudit d'Exodia`,
  },
  imageUrl: `https://static.thefirstspine.fr/juvenile-great-ancient.png`,
  name: {
    en: `Juvenile Great Ancient`,
    fr: `Grand Ancien juvénile`,
  },
  stats: {
    capacities: ['burdenEarth'],
    life: 3,
    bottom: {
      defense: 1,
      strength: 6,
    },
    left: {
      defense: 0,
      strength: 2,
    },
    right: {
      defense: 0,
      strength: 2,
    },
    top: {
      defense: 1,
      strength: 3,
    },
  },
  type: 'creature',
};

export default juvenilegreatAncientCard;
