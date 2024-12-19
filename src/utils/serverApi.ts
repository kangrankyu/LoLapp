"use server";

import { Champions } from "@/types/Champion";
import { Items } from "@/types/Item";

export async function versionsdata(): Promise<string | null> {
  try {
    const res = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json "
    );
    const version: string[] = await res.json();
    const newversion = version[0];

    return newversion;
  } catch (error) {
    console.error("버전 정보를 가져오는 중 오류 발생:", error);
    return null; // 또는 적절한 기본값 반환
  }
}

export async function fetchChampionList(): Promise<Champions[] | null> {
  try {
    const newversion = await versionsdata();
    const Response = await fetch(
      ` https://ddragon.leagueoflegends.com/cdn/${newversion}/data/ko_KR/champion.json`,
      {
        next: { revalidate: 86400 },
      }
    );
    const data = await Response.json();

    return Object.values(data.data);
  } catch (error) {
    console.error("Error fetching champion list:", error);
    return [];
  }
}

export async function fetchChampionDetail(
  id: string
): Promise<Champions | null> {
  try {
    const newversion = await versionsdata();
    const Response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${newversion}/data/ko_KR/champion/${id}.json`
    );
    const data = await Response.json();

    return data.data[id];
  } catch (error) {
    console.log("error fetchChampionDetail", error);
    return null;
  }
}
export async function fetchItemList(): Promise<Items[] | null> {
  try {
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
  } catch (error) {
    console.log("error Items", error);
    return null;
  }
}
