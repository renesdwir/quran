"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Header from "./components/header/header.component";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <main className={`px-5 pt-3 sm:px-9 sm:pt-5`}>
      <Header />
    </main>
  );
}
