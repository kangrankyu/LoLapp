import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div>
        <Link href={"/champions"}>챔피언</Link>
        <Link href={"/items"}>아이템</Link>
        <Link href={"/rotation"}>무료 챔피언 </Link>
      </div>
    </>
  );
}
