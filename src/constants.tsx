

export interface Skills {
    all: string
    fire: string
    water: string
    wind: string
    earth: string
}

export const mappedSkils:Skills = {
  all: 'Все',
  fire: 'Огонь',
  water: 'Вода',
  wind: 'Воздух',
  earth: 'Земля',
} as const

export interface ImappedSkils {
  all: string
      fire: string
      water: string
      wind: string
      earth: string
}