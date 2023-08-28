"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Header from "./components/header.component";
import Menu from "./components/menu.component";
import Schedule from "./components/schedule.component";
import Footer from "./components/footer.component";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <main
      className={`px-5 pt-3 sm:px-9 sm:pt-5 min-h-screen flex flex-col justify-between`}
    >
      <button
        className={`w-fit absolute right-5 top-2 p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? "Light" : "Dark"}
      </button>
      <div>
        <Header />
        <Menu />
        <Schedule />
      </div>
      <Footer />
    </main>
  );
}
