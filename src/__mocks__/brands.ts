import { Brand } from '../store/brands';

const mockBrandsMap: { [brandId: number]: Brand } = {
  1: {
    id: 1,
    name: 'Tesla',
    image: 'tesla.jpg',
  },
  2: {
    id: 2,
    name: 'Colorifix',
    image: 'colorifix.jpg',
  },
  3: {
    id: 3,
    name: 'Finless Foods',
    image: 'finless_foods.jpg',
  },
  4: {
    id: 4,
    name: 'YouSolar',
    image: 'yousolar.jpg',
  },
};

export { mockBrandsMap };
