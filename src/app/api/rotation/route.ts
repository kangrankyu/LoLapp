import { NextResponse } from "next/server";
import { ChampionRotations } from "@/types/ChampionRotation";
import { fetchChampionList } from "@/utils/serverApi";
import { Champions } from "@/types/Champion";
const API_KEY = process.env.RIOT_API_KEY as string;
export async function GET() {
  const res = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      headers: {
        "X-Riot-Token": API_KEY,
      },
    }
  );
  const data: ChampionRotations = await res.json();
  const freeChampionIds: number[] = data.freeChampionIds;
  const championdata = await fetchChampionList();
  const NewChampion: Champions[] = championdata.filter((champion) => {
    return freeChampionIds.includes(Number(champion.key));
  });
  return NextResponse.json(NewChampion);
}
