type Champions = {
  version: string;
  id: string;
  key: string;
  title: string;
  name: string;
  blurb: string;
  tags: string[];
  info: { [key: string]: number };
  image: { [key: string]: string | number };
  partype: string;
  stats: { [key: string]: number };
};
