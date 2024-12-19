"use server";

import { Champions } from "@/types/Champion";
import { Items } from "@/types/Item";

export async function versionsdata(): Promise<string> {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json "
  );
  const version: string[] = await res.json();
  const newversion = version[0];

  return newversion;
}
export async function fetchChampionList(): Promise<Champions[]> {
  const newversion = await versionsdata();
  const Response = await fetch(
    ` https://ddragon.leagueoflegends.com/cdn/${newversion}/data/ko_KR/champion.json`,
    {
      next: { revalidate: 86400 },
    }
  );
  const data = await Response.json();

  return Object.values(data.data);
}

export async function fetchChampionDetail(id: string): Promise<Champions> {
  const newversion = await versionsdata();
  const Response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${newversion}/data/ko_KR/champion/${id}.json`
  );
  const data = await Response.json();

  return data.data[id];
}
export async function fetchItemList(): Promise<Items[]> {
  const newversion = await versionsdata();
  const Response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${newversion}/data/ko_KR/item.json`,
    {
      cache: "force-cache",
    }
  );
  const data = await Response.json();
  const items: Items[] = Object.values(data.data);
  return items;
}
