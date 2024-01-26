import Ayah from "@/components/ayah/Ayah";
import { Button } from "@/components/ui/button";
import { DataDetailSurah, ResponseListSurah } from "@/models/surah";
import { MoveRight, MoveLeft, ChevronRight } from "lucide-react";

export const dynamicParams = false;
export async function generateStaticParams() {
  const res = await fetch("https://equran.id/api/v2/surat");
  const surah: ResponseListSurah = await res.json();
  let temp = surah.data.map((data) => ({
    id: data.nomor.toString(),
  }));
  // console.log(temp);
  let getId = surah.data.map((data) => ({
    id: data.nomor.toString(),
  }));
  return getId;
}
async function getSurah(id: string) {
  const res = await fetch(`https://equran.id/api/v2/surat/${id}`);
  const surah = await res.json();
  return surah.data;
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const surah: DataDetailSurah = await getSurah(id);
  return (
    <main className="">
      <div className="">
        <div className="max-w-6xl mx-auto">
          <div className="md:p-10 p-4 w-full">
            <div className="flex items-center flex-col">
              <h1 className="font-arabic text-2xl">{surah.nama}</h1>
              <h1 className="text-xl">{surah.namaLatin}</h1>
              <p className="text-muted-foreground">{surah.arti}</p>
            </div>
            <div className="flex flex-col mt-14 gap-7 md:gap-14">
              <Ayah />
              <Ayah />
              <Ayah />
            </div>
            <div className="flex justify-between mt-5">
              {surah.suratSebelumnya ? (
                <Button variant={"secondary"} className="flex items-center gap-3">
                  <MoveLeft /> <p>{surah.suratSebelumnya.namaLatin}</p>
                </Button>
              ) : (
                <div></div>
              )}
              {surah.suratSelanjutnya ? (
                <Button variant={"secondary"} className="flex items-center gap-3">
                  <p>{surah.suratSelanjutnya.namaLatin}</p> <MoveRight />
                </Button>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
