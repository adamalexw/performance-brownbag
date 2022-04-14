export interface F1Team {
  name: string;
  logo: string;
  isSelected?: boolean
}

export const TEAMS_DATA: F1Team[] = [
  {
    name: 'Mclaren',
    logo: 'https://www.formula1.com/content/dam/fom-website/teams/2022/mclaren-logo.png.transform/2col/image.png',
  },
  {
    name: 'Ferrari',
    logo: 'https://www.formula1.com/content/dam/fom-website/teams/2022/ferrari-logo.png.transform/2col/image.png',
  },
  {
    name: 'Red Bull Racing',
    logo: 'https://www.formula1.com/content/dam/fom-website/teams/2022/red-bull-racing-logo.png.transform/2col/image.png',
  },
  {
    name: 'Mercedes',
    logo: 'https://www.formula1.com/content/dam/fom-website/teams/2022/mercedes-logo.png.transform/2col/image.png',
  },
];
