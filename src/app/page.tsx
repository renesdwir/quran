"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Header from "./components/header.component";
import Menu from "./components/menu.component";
import Schedule from "./components/schedule.component";
import Footer from "./components/footer.component";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <main
      className={`px-5 pt-3 sm:px-9 sm:pt-5 min-h-screen flex flex-col justify-between`}
    >
      <div>
        <Header />
        <Menu />
        <Schedule />
      </div>
      <Footer />
    </main>
  );
}
