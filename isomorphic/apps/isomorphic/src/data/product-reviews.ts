import { getRandomArrayElement } from '@utils/get-random-array-element';

const reviewStatus = ['Approved', 'Rejected', 'Pending'];

import { avatarIds } from '@utils/get-avatar';

export type Review = {
  id: string;
  product: {
    name: string;
    category: string;
    image: string;
  };
  review: string;
  customer: number;
  status: string;
  rating: number;
  createdAt: Date;
};

export const productReviews = [
  {
    id: '13803',
    product: {
      name: 'Modern Frozen SausagesS.H.FIGUARTS: One Piece - Monkey D. Luffy - Gear 5 Ver (Reissue) [Bandai Spirits]',
      category: 'S.H Figuarts',
      image:
        'https://media3.nin-nin-game.com/402740-pos_thickbox/shfiguarts-one-piece-monkey-d-luffy-gear-5-ver-reissue-bandai-spirits-.jpg',
    },
    review:
      'No rompió el internet pero esta chida la figura.',
    customer: {
      name: 'Miguelon de la Rivera',
      avatar: `https://media1.nin-nin-game.com/403380-pos_thickbox/nendoroid-2533-gears-of-war-marcus-fenix-good-smile-company-.jpg`,
    },
    status: getRandomArrayElement(reviewStatus),
    rating: 4,
    createdAt: new Date('2022-11-12T13:43:07.334Z'),
  },
  
];
