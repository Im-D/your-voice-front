import {
  atom,
  selector,
} from 'recoil';

export const state = (key:string):any => atom({
  key,
  default: 0,
});

export const getState = (key: string):any => selector({
  key,
  get: ({ get }) => get(state(key.replace('get', '').charAt(0).toLowerCase())),
});
