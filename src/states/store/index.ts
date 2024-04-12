import { atom } from 'jotai'

export const formAtom = atom({
  a: "test1",
  b: "test2"
})

export const aAtom = atom(0);
export const bAtom = atom(0);