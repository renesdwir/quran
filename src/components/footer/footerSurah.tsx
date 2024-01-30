import { MoveLeft, MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import { NextPrevSurah } from "@/models/surah";

interface FooterSurahProps {
  suratSebelumnya: NextPrevSurah;
  suratSelanjutnya: NextPrevSurah;
  noSurah: number;
  nama: string;
}
export default function FooterSurah({
  suratSebelumnya,
  suratSelanjutnya,
  nama,
  noSurah,
}: FooterSurahProps) {
  return (
    <div className="grid grid-cols-3 mt-5 items-center">
      {suratSebelumnya ? (
        <div className="">
          <Button variant={"secondary"} className="flex items-center gap-3">
            <MoveLeft /> <p>{suratSebelumnya.namaLatin}</p>
          </Button>
        </div>
      ) : (
        <div></div>
      )}
      <div className=" text-center text-xs">
        Surat ke-{noSurah} {nama}
      </div>
      {suratSelanjutnya ? (
        <div className="flex justify-end">
          <Button variant={"secondary"} className="flex items-center gap-3">
            <p>{suratSelanjutnya.namaLatin}</p> <MoveRight />
          </Button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
