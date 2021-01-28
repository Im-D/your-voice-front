import {
  atom,
  selector,
} from 'recoil';

export const countState = atom({
  key: 'countState',
  default: 0,
});

export const getCountState = selector({
  key: 'getCountState',
  get: ({ get }) => get(countState),
});
