import { Champions } from "@/types/Champion";

export async function getChampionRotation(): Promise<Champions[]> {
  const res = await fetch("/api/rotation", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  const data: Champions[] = await res.json();
  // 응답 데이터가 배열인지 확인

  return data;
}
