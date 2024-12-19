import { Champions } from "@/types/Champion";
import { fetchChampionDetail } from "@/utils/serverApi";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const champion: Champions = await fetchChampionDetail(params.id);
  return {
    title: `League Of Legends : ${champion.name}`,
    description: `${champion.lore}`,
    // openGraph: {
    //   title: `League Of Legends : ${champion.name}`,
    //   description: `${champion.lore}`,
    //   url: `https://lol-app-psi.vercel.app//champions/${params.id}`,
    // },
  };
}

const ChampionDetail = async ({ params }: Props) => {
  const data: Champions = await fetchChampionDetail(params.id);
  return (
    <>
      <main className="container mx-auto mt-10">
        <div className="max-w-3xl mx-auto   text-rose-600	">
          <h1 className="text-4xl font-bold mb-4 	">{data.name}</h1>
          <p className="text-2xl text-gray-600 mb-4">{data.title}</p>
          <Image
            className="mx-auto"
            src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${data.image.full}`}
            alt="이미지 입니다 "
            width={100}
            height={100}
          />

          <p className="mt-4">{data.blurb}</p>
          <h3 className="text-xl font-semibold">스탯</h3>
          <div className="mt-6">
            <p>{data.info.attack}</p>
            <p>{data.info.defense}</p>
            <p>{data.info.magic}</p>
            <p>{data.info.difficulty}</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default ChampionDetail;
