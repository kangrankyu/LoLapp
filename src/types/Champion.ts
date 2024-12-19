export type Champions = {
  version: string;
  id: string;
  key: string;
  title: string;
  name: string;
  blurb: string;
  tags: string[];
  info: { [key: string]: number }; // info는 문자열 키와 숫자 값의 객체로 정의
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  }; // image는 정확한 키를 정의
  partype: string;
  stats: { [key: string]: number }; // stats는 키-숫자 매핑
  lore: string;
};
