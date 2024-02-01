import Image from "next/image";
import { ToggleThemeButton } from "./buttons/ToggleThemeButton";
import Logo from "./icons/logo";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center p-4 border-b ">
        <Link href={"/"} className="flex items-center  gap-3">
          <h1 className="text-xl font-bold">Al-Qur'an Web</h1>
          <div className=" rounded-full ">
            <Logo className="w-10 h-10 fill-foreground" />
          </div>
        </Link>
        <ToggleThemeButton />
      </div>
    </>
  );
}
