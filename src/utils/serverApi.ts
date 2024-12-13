import { Champions } from "@/types/Champion";
("use server");
async function ChampionfechData() {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json "
  );
  const version = await res.json();
  const newversion = version[0];
  const Response = await fetch(
    ` https://ddragon.leagueoflegends.com/cdn/${newversion}/data/ko_KR/champion.json`
  );
  const data: Champions = await Response.json();
  return data;
}
