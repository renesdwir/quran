import { Ayat } from "@/models/surah";
import { FileText, Share2 } from "lucide-react";
import WithTooltip from "../Tooltip";
import AyahFrame from "../icons/ayahFrame";
import AudioPlayer from "../AudioPlayer";
import CopyAyah from "./AyahCopy";

interface AyahProps {
  ayah: Ayat;
  audio: { play: boolean; ayah: number };
  handleAudio: (id: number) => void;
  noSurah: number;
  nameSurah: string;
}

export default function Ayah({
  ayah,
  audio,
  handleAudio,
  noSurah,
  nameSurah,
}: AyahProps) {
  return (
    <div
      id={ayah.nomorAyat.toString()}
      className="flex flex-col gap-4 border-b pb-7 md:pb-10 "
    >
      <div className="flex justify-between md:gap-4 ">
        <div className="mt-1 md:mt-4">
          <div className="relative ">
            <AyahFrame className="w-12 h-12  fill-foreground" />
            <p className="text-xs  font-bold absolute  w-12 text-center top-4">
              {ayah.nomorAyat}
            </p>
          </div>
        </div>
        <div className="font-arabic text-2xl md:text-3xl text-right flex-1  dark:bg-opacity-[0.1] bg-opacity-[0.6]  py-1 rounded-md  leading-loose md:leading-[70px]">
          {ayah.teksArab}
        </div>
      </div>
      <p className="text-muted-foreground text-sm md:text-base">{ayah.teksLatin}</p>
      <p className="text-sm md:text-base">{ayah.teksIndonesia}</p>
      <div className="flex justify-between mt-4 items-center">
        <div className="flex gap-5 items-center">
          <AudioPlayer
            play={audio.play && audio.ayah === ayah.nomorAyat - 1}
            handleAudio={handleAudio}
            id={ayah.nomorAyat}
          />
          <CopyAyah
            textArab={ayah.teksArab}
            textIndo={ayah.teksIndonesia}
            noSurah={noSurah}
            nameSurah={nameSurah}
            noAyah={ayah.nomorAyat}
          />
          <WithTooltip text="Tafsir">
            <FileText className=" " strokeWidth={1.5} />
          </WithTooltip>
        </div>
        <div>
          <WithTooltip text="Bagikan">
            <Share2 className=" " strokeWidth={1.5} />
          </WithTooltip>
        </div>
      </div>
    </div>
  );
}
