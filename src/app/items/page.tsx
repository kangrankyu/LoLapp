import React from "react";
import { fetchItemList } from "@/utils/serverApi";
import { Items } from "@/types/Item";
import Image from "next/image";
const items = async () => {
  const itemdata: Items[] = await fetchItemList();
  console.log(itemdata);
  return (
    <>
      <main className="container mx-auto mt-10">
        <div>
          <h1 className="text-3xl font-bold mb-4 text-rose-600">아이템목록</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {itemdata.map((item: Items) => {
            return (
              <div
                key={item.id}
                className="border rounded p-4 hover:shadow-lg  text-rose-600"
              >
                <Image
                  className=" mx-auto"
                  src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/${item.image.full}`}
                  alt={"이미지 입니다 "}
                  width={100}
                  height={100}
                />
                <h1 className="mt-2 text-xl font-semibold ">{item.name}</h1>
                <p className="text-gray-500">{item.plaintext}</p>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default items;
