"use client";
import { DataDetailSurah } from "@/models/surah";
import Ayah from "./Ayah";
import { useRef, useState } from "react";

export default function AyahList({ surah }: { surah: DataDetailSurah }) {
  const [isPlaying, setIsPlaying] = useState<false | number>(false);
  const audioPlayerRef = useRef<HTMLAudioElement>(null);
  const handleAudio = (id: number) => {
    let play = isPlaying;
    if (play === id) {
      setIsPlaying(false);
      console.log(audioPlayerRef);
      audioPlayerRef.current?.pause();
    } else {
      setIsPlaying(id);
      console.log(audioPlayerRef);
      audioPlayerRef.current?.play();
    }
  };

  return (
    <>
      {surah.ayat.map((data) => (
        <Ayah
          key={data.nomorAyat}
          ayah={data}
          isPlaying={isPlaying}
          handleAudio={handleAudio}
          ref={audioPlayerRef}
        />
      ))}
    </>
  );
}
