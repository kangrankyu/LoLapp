export type Items = {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[];
  image: { [key: string]: string | number };
  gold: { [key: string]: string | number };
  tags: string[];
  maps: { [key: string | number]: string };
  stats: { FlatMovementSpeedMod: number };
};
