import { Ayat } from "@/models/surah";
import { Copy, FileText, Share2 } from "lucide-react";
import WithTooltip from "../Tooltip";
import AyahFrame from "../icons/ayahFrame";
import AudioPlayer from "../AudioPlayer";

export default function Ayah({ ayah }: { ayah: Ayat }) {
  return (
    <div className="flex flex-col gap-4 border-b pb-7 md:pb-10">
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
          <AudioPlayer />
          <audio controls>
            <source
              src="https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/001001.mp3"
              type="audio/mpeg"
            />
          </audio>
          <WithTooltip text="Copy">
            <Copy className=" " strokeWidth={1.5} />
          </WithTooltip>
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
