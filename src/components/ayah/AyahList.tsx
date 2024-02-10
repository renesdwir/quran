"use client";
import { DataDetailSurah } from "@/models/surah";
import Ayah from "./Ayah";
import { useRef, useState } from "react";

export default function AyahList({ surah }: { surah: DataDetailSurah }) {
  let playlist = surah.ayat.map((a) => a.audio["05"]);
  const [audio, setAudio] = useState({ play: false, ayah: 0 });
  const audioPlayerRef = useRef<HTMLAudioElement>(null);

  function handleAudio(id: number) {
    let audioPlayer = audioPlayerRef.current;
    if (!audioPlayer) return;
    let play = audio.play;
    if (play) {
      if (id === audio.ayah) {
        setAudio((prev) => ({ ...prev, play: false }));
        audioPlayer.currentTime = 0;
        audioPlayer.pause();
      } else {
        setAudio((prev) => ({ ...prev, ayah: id }));
        audioPlayer.src = playlist[id];
        audioPlayer.play();
      }
    } else {
      setAudio({ ayah: id, play: true });
      audioPlayer.src = playlist[id];
      const section = document.getElementById((id + 1).toString());
      if (section) {
        const sectionTop = section.offsetTop - 20;
        window.scrollTo({
          top: sectionTop,
          behavior: "smooth",
        });
        audioPlayer.play();
      }
    }
  }
  function handleEndedAudio() {
    let ayah = audio.ayah;
    let audioPlayer = audioPlayerRef.current!;
    if (!playlist[ayah]) {
      setAudio({ play: false, ayah: 0 });
      return;
    }
    setAudio((prev) => ({ ...prev, ayah: ayah + 1 }));
    audioPlayer.src = playlist[ayah + 1];

    const section = document.getElementById((ayah + 2).toString());
    if (section) {
      const sectionTop = section.offsetTop - 20;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
      audioPlayer.play();
    }
  }

  return (
    <>
      <audio ref={audioPlayerRef} onEnded={handleEndedAudio} />
      {surah.ayat.map((data) => (
        <Ayah key={data.nomorAyat} ayah={data} audio={audio} handleAudio={handleAudio} />
      ))}
    </>
  );
}
