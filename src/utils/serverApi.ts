import { Champions } from "@/types/Champion";
("use server");

async function versionsdata() {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json "
  );
  const version: string[] = await res.json();
  const newversion = version[0];
  return newversion;
}
async function fetchChampionList() {
  const newversion = await versionsdata();
  const Response = await fetch(
    ` https://ddragon.leagueoflegends.com/cdn/${newversion}/data/ko_KR/champion.json`,
    {
      next: { revalidate: 86400 },
    }
  );
  const data: Champions = await Response.json();
  return data;
}

async function fetchChampionDetail(id: string) {
  const newversion = versionsdata();
  const Response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${newversion}/data/ko_KR/champion/${id}.json`
  );
  const data: Champions = await Response.json();
  return data;
}
