import { NextResponse } from "next/server";
import { ChampionRotations } from "@/types/ChampionRotation";
const API_KEY = process.env.RIOT_API_KEY as string;
export async function GET(request: Request) {
  const res = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      headers: {
        "X-Riot-Token": API_KEY,
      },
    }
  );
  const data: ChampionRotations = await res.json();
  //tyep 지정한거를
  // 트러블슈팅 넥스트리스폰스를 사용하는방법을 모르겠음
  //'Response' 형식에 'ChampionRotations' 형식의 maxNewPlayerLevel, freeChampionIdsForNewPlayers, freeChampionIds 속성이 없습니다.
  //해결방법 res.json();

  return NextResponse.json(data);
}
