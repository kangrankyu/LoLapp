import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className=" w-lvw h-full h-screen bg-slate-950	 text-white flex justify-center	 items-center gap-x-5	">
        <Link className="    object-cover  " href={"/champions"}>
          <Image
            src="/cham.webp"
            alt="Champion image"
            width={450}
            height={450}

            // objectFit="cover"
          />
          <p className="flex  justify-center  items-center text-lg  mt-3">
            챔피언 목록보기기
          </p>
        </Link>

        <Link className="w-auto  h-auto  " href={"/items"}>
          <Image
            src="/item.webp"
            alt="Champion image"
            width={450}
            height={450}
            priority
          />
          <p className="flex  justify-center  items-center text-lg  mt-3">
            아이템 목록 보기
          </p>
        </Link>

        <Link className="w-auto  h-auto  " href={"/champions"}>
          <Image
            src="/rotation.webp"
            alt="Champion image"
            width={450}
            height={450}
            priority
          />
          <p className="flex  justify-center  items-center text-lg  mt-3">
            금주 로테이션 확인
          </p>
        </Link>
      </div>
    </>
  );
}
