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

  return NextResponse.json(data);
}
