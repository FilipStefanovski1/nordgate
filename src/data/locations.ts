export type Location = {
  city: string;
  country: string;
  lat: number;
  lon: number;
  role: string;
};

export const locations: Location[] = [
  {
    city: "Copenhagen",
    country: "Denmark",
    lat: 55.6761,
    lon: 12.5683,
    role: "Nordic commercial hub",
  },
  {
    city: "Stockholm",
    country: "Sweden",
    lat: 59.3293,
    lon: 18.0686,
    role: "Nordic commercial hub",
  },
  {
    city: "Skopje",
    country: "North Macedonia",
    lat: 41.9981,
    lon: 21.4254,
    role: "Southeast European bridge",
  },
];
