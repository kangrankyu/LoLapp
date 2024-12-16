import { Champions } from "@/types/Champion";
import { fetchChampionList } from "@/utils/serverApi";
import React from "react";
import Image from "next/image";
const Champion = async () => {
  const data = await fetchChampionList();
  console.log(data);
  return (
    <>
      {data.map((Champion) => (
        <div key={Champion.id}>
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${Champion.image.full}`}
            alt="이미지 입니다 "
            width={48}
            height={48}
          />
          <h1>{Champion.name}</h1>
          <p>{Champion.title}</p>
        </div>
      ))}
    </>
  );
};
//이미지 설정 이렇게 하는게 맞나 ?

export default Champion;
