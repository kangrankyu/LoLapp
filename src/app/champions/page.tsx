import { fetchChampionList } from "@/utils/serverApi";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const Champion = async () => {
  const data = await fetchChampionList();

  return (
    <>
      <main className=" container mx-auto mt-10 bg-back ">
        <div className="grid grid-cols-4 gap-4">
          {data.map((Champion) => (
            <Link
              key={Champion.id}
              className="border rounded p-4 hover:shadow-l  text-rose-600	"
              href={`/champions/${Champion.id}`}
            >
              <Image
                className=" mx-auto"
                src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${Champion.image.full}`}
                alt="이미지 입니다 "
                width={100}
                height={100}
              />
              <h2 className="mt-2 text-xl font-semibold"> {Champion.name}</h2>
              <p className="text-gray-500">{Champion.title}</p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default Champion;
