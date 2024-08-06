/* tslint:disable */
/* eslint-disable */

export type Powerstats = {
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
  placeOfBirth: string;
  firstAppearance: string;
  publisher: string;
  alignment: string;
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

export interface Hero {
  id: number;
  name: string;
  slug: string;
  powerstats: Powerstats;
  appearance: Appearance;
  biography: Biography;
  work: Work;
  connections: Connections;
  images: Images;
}

/**
 * Check if a given object implements the Hero interface.
 */
export function instanceOfHero(value: object): value is Hero {
  return true;
}

export function HeroFromJSON(json: any): Hero {
  return HeroFromJSONTyped(json);
}

export function HeroFromJSONTyped(json: any): Hero {
  if (json == null) {
    return json;
  }
  return {
    id: json["id"] == null ? undefined : json["id"],
    name: json["name"] == null ? undefined : json["name"],
    slug: json["slug"] == null ? undefined : json["slug"],
    powerstats: json["powerstats"] == null ? undefined : json["powerstats"],
    appearance: json["appearance"] == null ? undefined : json["appearance"],
    biography: json["biography"] == null ? undefined : json["biography"],
    work: json["work"] == null ? undefined : json["work"],
    connections: json["connections"] == null ? undefined : json["connections"],
    images: json["images"] == null ? undefined : json["images"],
  };
}

export function HeroToJSON(value?: Hero | null): any {
  if (value == null) {
    return value;
  }
  return {
    id: value["id"],
    name: value["name"],
    slug: value["slug"],
    powerstats: value["powerstats"],
    appearance: value["appearance"],
    biography: value["biography"],
    work: value["work"],
    connections: value["connections"],
    images: value["images"],
  };
}
