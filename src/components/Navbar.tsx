import Image from "next/image";
import { ToggleThemeButton } from "./buttons/ToggleThemeButton";
import Logo from "./icons/logo";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center p-4 border-b ">
        <div className="flex items-center  gap-3">
          <h1 className="text-xl font-bold">Al-Qur'an Web</h1>
          <div className=" rounded-full">
            <Logo className="w-10 h-10 dark:text-white text-black fill-current" />
          </div>
        </div>
        <ToggleThemeButton />
      </div>
    </>
  );
}
