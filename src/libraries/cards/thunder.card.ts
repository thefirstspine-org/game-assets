import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const thunderCard: ICard = {
  id: `thunder`,
  text: {
    en: `Dismiss {life}4{/life} to a {creature}creature{/creature} or an {artifact}artifact{/artifact}.`,
    fr: `Retirez {life}4{/life} à une {creature}créature{/creature} ou un {artifact}artefact{/artifact}.`,
  },
  art: 'Maylhine',
  lore: {
    en: `« It never falls on the same person twi... »\n- Blase-the-blasted`,
    fr: `« Elle ne tombe jamais deux fois sur la même pers... »\n- Olivier-le-fou-droyé`,
  },
  imageUrl: `https://game-assets.thefirstspine.fr/thunder.png`,
  name: {
    en: `Thunder`,
    fr: `Foudre`,
  },
  type: 'spell',
};

export default thunderCard;
