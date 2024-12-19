import { NextResponse } from "next/server";
import { ChampionRotations } from "@/types/ChampionRotation";
import { fetchChampionList } from "@/utils/serverApi";
import { Champions } from "@/types/Champion";
const API_KEY = process.env.NEXT_PUBLIC_RIOT_API_KEY as string;
export async function GET() {
  try {
    const res = await fetch(
      "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
      {
        headers: {
          "X-Riot-Token": API_KEY,
        },
      }
    );
    if (!res.ok) {
      console.log("챔피언 로테이션 정보를 가져오는 데 실패했습니다");
      return NextResponse.json({
        error: "챔피언 로테이션 정보를 가져오는 데 실패했습니다",
      });
    }
    const data: ChampionRotations = await res.json();
    const freeChampionIds: number[] = data.freeChampionIds;
    const championdata = await fetchChampionList();
    if (!championdata) {
      console.error("챔피언데이터 가져오기 실패했습니다 ");
      return NextResponse.json([]);
    }
    const NewChampion: Champions[] | null = championdata.filter((champion) => {
      return freeChampionIds.includes(Number(champion.key));
    });
    return NextResponse.json(NewChampion);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
