import antisuneImg from './assets/2-Look OLL/Antisune.png'
import dotImg from './assets/2-Look OLL/Dot-shape.png'
import ollHImg from './assets/2-Look OLL/H.png'
import iShapeImg from './assets/2-Look OLL/I-shape.png'
import lShapeImg from './assets/2-Look OLL/L-shape.png'
import ollLImg from './assets/2-Look OLL/L.png'
import piImg from './assets/2-Look OLL/Pi.png'
import suneImg from './assets/2-Look OLL/Sune.png'
import tImg from './assets/2-Look OLL/T.png'
import uImg from './assets/2-Look OLL/U.png'

import diagonalImg from './assets/2-Look PLL/Diagonal.png'
import headlightsImg from './assets/2-Look PLL/Headlights.png'
import pllHImg from './assets/2-Look PLL/PLL(H).png'
import uaImg from './assets/2-Look PLL/PLL(Ua).png'
import ubImg from './assets/2-Look PLL/PLL(Ub).png'
import zImg from './assets/2-Look PLL/PLL(Z).png'

export type Case = {
  id: string
  name: string
  group: 'OLL' | 'PLL' | 'F2L'
  part: 1 | 2
  family?: string
  scramble: string
  algorithm: string
  imageUrl?: string
}

export const cases: Case[] = [
  {
    id: 'oll-dot',
    name: 'Dot',
    group: 'OLL',
    part: 1,
    scramble: "f U R U' R' f' F U R U' R' F'",
    algorithm: "F R U R' U' F' f R U R' U' f'",
    imageUrl: dotImg,
  },
  {
    id: 'oll-i',
    name: 'I Shape',
    group: 'OLL',
    part: 1,
    scramble: "F U R U' R' F'",
    algorithm: "F R U R' U' F'",
    imageUrl: iShapeImg,
  },
  {
    id: 'oll-l-edge',
    name: 'L Shape',
    group: 'OLL',
    part: 1,
    scramble: "f U R U' R' f'",
    algorithm: "f R U R' U' f'",
    imageUrl: lShapeImg,
  },
  {
    id: 'oll-sune',
    name: 'Sune',
    group: 'OLL',
    part: 2,
    scramble: "R U2 R' U' R U' R'",
    algorithm: "R U R' U R U2' R'",
    imageUrl: suneImg,
  },
  {
    id: 'oll-antisune',
    name: 'Anti-Sune',
    group: 'OLL',
    part: 2,
    scramble: "R U R' U R U2' R'",
    algorithm: "R U2 R' U' R U' R'",
    imageUrl: antisuneImg,
  },
  {
    id: 'oll-h',
    name: 'H',
    group: 'OLL',
    part: 2,
    scramble: "R U2 R' U' R U R' U' R U' R'",
    algorithm: "R U R' U R U' R' U R U2 R'",
    imageUrl: ollHImg,
  },
  {
    id: 'oll-pi',
    name: 'Pi',
    group: 'OLL',
    part: 2,
    scramble: "R' U2 R2 U R2 U R2 U2 R'",
    algorithm: "R U2 R2 U' R2 U' R2 U2 R",
    imageUrl: piImg,
  },
  {
    id: 'oll-u',
    name: 'U',
    group: 'OLL',
    part: 2,
    scramble: "R U2 R D R' U2 R D' R2",
    algorithm: "R2 D R' U2 R D' R' U2 R'",
    imageUrl: uImg,
  },
  {
    id: 'oll-t',
    name: 'T',
    group: 'OLL',
    part: 2,
    scramble: "F R' F' r U R U' r'",
    algorithm: "r U R' U' r' F R F'",
    imageUrl: tImg,
  },
  {
    id: 'oll-l',
    name: 'L',
    group: 'OLL',
    part: 2,
    scramble: "r U R' U' r' F R F'",
    algorithm: "F R' F' r U R U' r'",
    imageUrl: ollLImg,
  },
  {
    id: 'pll-diagonal',
    name: 'Diagonal',
    group: 'PLL',
    part: 1,
    scramble: "F R' F' R U R U' R' F R U' R' U R U R' F'",
    algorithm: "F R U' R' U' R U R' F' R U R' U' R' F R F'",
    imageUrl: diagonalImg,
  },
  {
    id: 'pll-headlights',
    name: 'Headlights',
    group: 'PLL',
    part: 1,
    scramble: "F R U' R' U R U R2 F' R U R U' R'",
    algorithm: "R U R' U' R' F R2 U' R' U' R U R' F'",
    imageUrl: headlightsImg,
  },
  {
    id: 'pll-ua',
    name: 'Ua',
    group: 'PLL',
    part: 2,
    scramble: "R2 U R U R' U' R' U' R' U R'",
    algorithm: "R U' R U R U R U' R' U' R2",
    imageUrl: uaImg,
  },
  {
    id: 'pll-ub',
    name: 'Ub',
    group: 'PLL',
    part: 2,
    scramble: "R U' R U R U R U' R' U' R2",
    algorithm: "R2 U R U R' U' R' U' R' U R'",
    imageUrl: ubImg,
  },
  {
    id: 'pll-h',
    name: 'H',
    group: 'PLL',
    part: 2,
    scramble: "M2 U' M2 U2 M2 U' M2",
    algorithm: "M2 U M2 U2 M2 U M2",
    imageUrl: pllHImg,
  },
  {
    id: 'pll-z',
    name: 'Z',
    group: 'PLL',
    part: 2,
    scramble: "M2 U2 M U' M2 U' M2 U' M",
    algorithm: "M' U M2 U M2 U M' U2 M2",
    imageUrl: zImg,
  },
  {
    id: 'f2l-1',
    name: 'F2L 1',
    group: 'F2L',
    part: 1,
    family: 'Free Pairs',
    scramble: "R U R' U'",
    algorithm: "U R U' R'",
  },
  {
    id: 'f2l-2',
    name: 'F2L 2',
    group: 'F2L',
    part: 1,
    family: 'Free Pairs',
    scramble: "R' F R F'",
    algorithm: "F R' F' R",
  },
  {
    id: 'f2l-3',
    name: 'F2L 3',
    group: 'F2L',
    part: 1,
    family: 'Free Pairs',
    scramble: "F' U F",
    algorithm: "F' U' F",
  },
  {
    id: 'f2l-4',
    name: 'F2L 4',
    group: 'F2L',
    part: 1,
    family: 'Free Pairs',
    scramble: "R U' R'",
    algorithm: "R U R'",
  },
  {
    id: 'f2l-5',
    name: 'F2L 5',
    group: 'F2L',
    part: 1,
    family: 'Disconnected Pairs',
    scramble: "R U R' U2 R U' R' U",
    algorithm: "U' R U R' U2 R U' R'",
  },
  {
    id: 'f2l-6',
    name: 'F2L 6',
    group: 'F2L',
    part: 1,
    family: 'Disconnected Pairs',
    scramble: "r U' R' U' R U r' U",
    algorithm: "U' r U' R' U R U r'",
  },
  {
    id: 'f2l-7',
    name: 'F2L 7',
    group: 'F2L',
    part: 1,
    family: 'Disconnected Pairs',
    scramble: "R U2 R' U R U2 R' U",
    algorithm: "U' R U2 R' U' R U2 R'",
  },
  {
    id: 'f2l-8',
    name: 'F2L 8',
    group: 'F2L',
    part: 1,
    family: 'Disconnected Pairs',
    scramble: "r' U' R2 U' R2 U2 r",
    algorithm: "r' U2 R2 U R2 U r",
  },
  {
    id: 'f2l-9',
    name: 'F2L 9',
    group: 'F2L',
    part: 1,
    family: 'Disconnected Pairs',
    scramble: "F' U F U' R U R' U",
    algorithm: "U' R U' R' U F' U' F",
  },
  {
    id: 'f2l-10',
    name: 'F2L 10',
    group: 'F2L',
    part: 1,
    family: 'Disconnected Pairs',
    scramble: "R U' R' U' R U' R' U",
    algorithm: "U' R U R' U R U R'",
  },
  {
    id: 'f2l-19',
    name: 'F2L 19',
    group: 'F2L',
    part: 1,
    family: 'Disconnected Pairs',
    scramble: "R U R' U' R U2 R' U'",
    algorithm: "U R U2 R' U R U' R'",
  },
  {
    id: 'f2l-20',
    name: 'F2L 20',
    group: 'F2L',
    part: 1,
    family: 'Disconnected Pairs',
    scramble: "R U R' F R' F' R2 U R' U",
    algorithm: "U' R U' R2 F R F' R U' R'",
  },
  {
    id: 'f2l-21',
    name: 'F2L 21',
    group: 'F2L',
    part: 1,
    family: 'Disconnected Pairs',
    scramble: "R U R' U' R U' R' U2",
    algorithm: "U2 R U R' U R U' R'",
  },
  {
    id: 'f2l-22',
    name: 'F2L 22',
    group: 'F2L',
    part: 1,
    family: 'Disconnected Pairs',
    scramble: "r U' r' U2 r U r'",
    algorithm: "r U' r' U2 r U r'",
  },
]