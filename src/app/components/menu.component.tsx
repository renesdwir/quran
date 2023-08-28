import Image from "next/image";
import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <main>
      <div className={` flex justify-between items-center`}>
        <p className={`font-bold`}>Baca Al-Qur'an</p>
        <Link
          href="/bookmark"
          className={`bg-green-500 px-2 py-1 text-sm font-semibold rounded`}
        >
          Bookmark
        </Link>
      </div>
      <div className={`mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4`}>
        <div
          className={`bg-green-200  flex flex-col items-center p-3  sm:p-3 rounded cursor-pointer`}
        >
          <Image
            src="/quran-icons.png"
            alt="Vercel Logo"
            width={30}
            height={30}
            priority
          />
          <p className={`text-sm`}>Al-Qur'an</p>
        </div>
        <div
          className={`bg-green-200  flex flex-col items-center p-3  sm:p-3 rounded cursor-pointer`}
        >
          <Image
            src="/quran-icons.png"
            alt="Vercel Logo"
            width={30}
            height={30}
            priority
          />
          <p className={`text-sm`}>Al-Qur'an</p>
        </div>
        <div
          className={`bg-green-200  flex flex-col items-center p-3  sm:p-3 rounded cursor-pointer`}
        >
          <Image
            src="/quran-icons.png"
            alt="Vercel Logo"
            width={30}
            height={30}
            priority
          />
          <p className={`text-sm`}>Al-Qur'an</p>
        </div>
        <div
          className={`bg-green-200  flex flex-col items-center p-3  sm:p-3 rounded cursor-pointer`}
        >
          <Image
            src="/quran-icons.png"
            alt="Vercel Logo"
            width={30}
            height={30}
            priority
          />
          <p className={`text-sm`}>Al-Qur'an</p>
        </div>
      </div>
    </main>
  );
};

export default Menu;
