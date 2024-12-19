"use client";
import RotationList from "@/components/RotationList";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getChampionRotation } from "@/utils/riotApi";
import { Champions } from "@/types/Champion";

const Rotation = () => {
  const { data, error, isLoading } = useQuery<Champions[]>({
    queryKey: ["championRotation "],
    queryFn: getChampionRotation,
  });

  if (isLoading) {
    return <div>Loding... </div>;
  }
  if (error) {
    return <div>Error loading data</div>;
  }
  if (!data || data.length === 0) {
    return <div>No champions available</div>;
  }

  return (
    <>
      <main className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-4 text-rose-600">
          챔피언 로테이션 (이번주 무료로 플레이할수 있어요 )
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 ">
          {data.map((freeChampion) => {
            return (
              <RotationList key={freeChampion.id} Champion={freeChampion} />
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Rotation;
