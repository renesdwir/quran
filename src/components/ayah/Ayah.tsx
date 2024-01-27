import { Ayat } from "@/models/surah";

export default function Ayah({ ayah }: { ayah: Ayat }) {
  return (
    <div className="flex flex-col gap-4 border-b pb-7 md:pb-14">
      <div className="flex justify-between md:gap-4">
        <div className="w-8 h-8 md:w-11 md:h-11 mr-4 bg-zinc-300 my-5  dark:bg-opacity-[0.1] bg-opacity-[0.6] rotate-45 flex justify-center items-center rounded-md">
          <p className="text-xs md:text-base -rotate-45 font-semibold group-hover:text-background">
            {ayah.nomorAyat}
          </p>
        </div>
        <div className="font-arabic text-2xl md:text-3xl text-right flex-1  dark:bg-opacity-[0.1] bg-opacity-[0.6] p-4 rounded-md leading-loose md:leading-loose">
          {ayah.teksArab}
        </div>
      </div>
      <p className="text-muted-foreground text-sm md:text-base">{ayah.teksLatin}</p>
      <p className="text-sm md:text-base">{ayah.teksIndonesia}</p>
    </div>
  );
}
