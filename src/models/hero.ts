type Powerstats = {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
};

type Appearance = {
  gender: string;
  race: string;
  height: string[];
  weight: string[];
  eyeColor: string;
  hairColor: string;
};

type Biography = {
  fullName: string;
  alterEgos: string;
  aliases: string[];
  placeOfBirtd: string;
  firstAppearance: string;
  publisher: string;
  aligmnent: string;
};

type Work = {
  occupation: string;
  base: string;
};

type Connections = {
  groupAffiliation: string;
  relatives: string;
};

type Images = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
};

type Hero = {
  id: number;
  name: string;
  slug: string;
  powerstats: Powerstats;
  appearance: Appearance;
  biography: Biography;
  work: Work;
  connections: Connections;
  images: Images;
};

export default Hero;
