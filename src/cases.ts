export type Case = {
  id: string
  name: string
  group: 'OLL' | 'PLL' | 'F2L'
  part: 1 | 2
  scramble: string
  algorithm: string
}

export const cases: Case[] = [
  {
    id: 'oll-dot',
    name: 'Dot',
    group: 'OLL',
    part: 1,
    scramble: "f U R U' R' f' F U R U' R' F'",
    algorithm: "F R U R' U' F' f R U R' U' f'",
  },
  {
    id: 'oll-i',
    name: 'I Shape',
    group: 'OLL',
    part: 1,
    scramble: "F U R U' R' F'",
    algorithm: "F R U R' U' F'",
  },
  {
    id: 'oll-l-edge',
    name: 'L Shape',
    group: 'OLL',
    part: 1,
    scramble: "f U R U' R' f'",
    algorithm: "f R U R' U' f'",
  },
  {
    id: 'oll-sune',
    name: 'Sune',
    group: 'OLL',
    part: 2,
    scramble: "R U2 R' U' R U' R'",
    algorithm: "R U R' U R U2' R'",
  },
  {
    id: 'oll-antisune',
    name: 'Anti-Sune',
    group: 'OLL',
    part: 2,
    scramble: "R U R' U R U2' R'",
    algorithm: "R U2 R' U' R U' R'",
  },
  {
    id: 'oll-h',
    name: 'H',
    group: 'OLL',
    part: 2,
    scramble: "F U R U' R' U R U' R' U R U' R' F'",
    algorithm: "F R U R' U' R U R' U' R U R' U' F'",
  },
  {
    id: 'oll-pi',
    name: 'Pi',
    group: 'OLL',
    part: 2,
    scramble: "R' U2 R2 U R2 U R2 U2 R'",
    algorithm: "R U2 R2 U' R2 U' R2 U2 R",
  },
  {
    id: 'oll-u',
    name: 'U',
    group: 'OLL',
    part: 2,
    scramble: "R U2 R D R' U2 R D' R2",
    algorithm: "R2 D R' U2 R D' R' U2 R'",
  },
  {
    id: 'oll-t',
    name: 'T',
    group: 'OLL',
    part: 2,
    scramble: "F R' F' r U R U' r'",
    algorithm: "r U R' U' r' F R F'",
  },
  {
    id: 'oll-l',
    name: 'L',
    group: 'OLL',
    part: 2,
    scramble: "R' F' r U R U' r' F",
    algorithm: "F' r U R' U' r' F R",
  },
  {
    id: 'pll-diagonal',
    name: 'Diagonal',
    group: 'PLL',
    part: 1,
    scramble: "F R' F' R U R U' R' F R U' R' U R U R' F'",
    algorithm: "F R U' R' U' R U R' F' R U R' U' R' F R F'",
  },
  {
    id: 'pll-headlights',
    name: 'Headlights',
    group: 'PLL',
    part: 1,
    scramble: "F R U' R' U R U R2 F' R U R U' R'",
    algorithm: "R U R' U' R' F R2 U' R' U' R U R' F'",
  },
  {
    id: 'pll-ua',
    name: 'Ua',
    group: 'PLL',
    part: 2,
    scramble: "R2 U R U R' U' R' U' R' U R'",
    algorithm: "R U' R U R U R U' R' U' R2",
  },
  {
    id: 'pll-ub',
    name: 'Ub',
    group: 'PLL',
    part: 2,
    scramble: "R U' R U R U R U' R' U' R2",
    algorithm: "R2 U R U R' U' R' U' R' U R'",
  },
  {
    id: 'pll-h',
    name: 'H',
    group: 'PLL',
    part: 2,
    scramble: "M2 U' M2 U2 M2 U' M2",
    algorithm: "M2 U M2 U2 M2 U M2",
  },
  {
    id: 'pll-z',
    name: 'Z',
    group: 'PLL',
    part: 2,
    scramble: "M2 U2 M U' M2 U' M2 U' M",
    algorithm: "M' U M2 U M2 U M' U2 M2",
  },
]