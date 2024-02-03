import Link from "next/link";
import LogoSVG from "./icons/LogoSVG";

export default function Logo() {
  return (
    <Link href={"/"} className="flex items-center  max-w-fit gap-3">
      <h1 className="text-xl font-bold">Al-Qur'an Web</h1>
      <div className=" rounded-full ">
        <LogoSVG className="w-10 h-10 fill-foreground" />
      </div>
    </Link>
  );
}
