"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Champions } from "@/types/Champion";

type ChampionCardProps = {
  Champion: Champions;
};

const RotationList = ({ Champion }: ChampionCardProps) => {
  return (
    <>
      <Link
        className="border rounded p-4 hover:shadow-lg text-rose-600"
        key={Champion.id}
        href={`/champions/${Champion.id}`}
      >
        <Image
          className="mx-auto"
          src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${Champion.image.full}`}
          alt="이미지 입니다 "
          width={100}
          height={100}
        />
        <h1 className="mt-2 text-xl font-semibold">{Champion.name}</h1>
        <p className="text-gray-500">{Champion.title}</p>
      </Link>
    </>
  );
};

export default RotationList;
