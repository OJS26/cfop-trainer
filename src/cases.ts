export type Case = {
  id: string
  name: string
  group: 'OLL' | 'PLL' | 'F2L'
  scramble: string
  algorithm: string
}

export const cases: Case[] = [
  {
    id: 'oll-sune',
    name: 'Sune',
    group: 'OLL',
    scramble: "R U R' U R U2' R'",
    algorithm: "R U2 R' U' R U' R'",
  },
]