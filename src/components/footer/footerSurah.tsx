import { MoveLeft, MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import { NextPrevSurah } from "@/models/surah";
import Link from "next/link";

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
    <div className="grid grid-cols-3 items-center py-10">
      {suratSebelumnya ? (
        <Link href={`/${suratSebelumnya.nomor}`}>
          <Button variant={"secondary"} className="flex items-center gap-3">
            <MoveLeft /> <p>{suratSebelumnya.namaLatin}</p>
          </Button>
        </Link>
      ) : (
        <div></div>
      )}
      <div className="text-center text-xs">
        Surat ke-{noSurah} {nama}
      </div>
      {suratSelanjutnya ? (
        <Link href={`/${suratSelanjutnya.nomor}`} className="flex justify-end">
          <Button variant={"secondary"} className="flex items-center gap-3">
            <p>{suratSelanjutnya.namaLatin}</p> <MoveRight />
          </Button>
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  );
}
