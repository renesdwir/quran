import { ResponseListSurah } from "@/models/surah";
import Surah from "./Surah";

async function getSurah() {
  const res = await fetch("https://equran.id/api/v2/surat");
  const surah: ResponseListSurah = await res.json();
  return surah;
}
export default async function SurahList() {
  const { data: datas } = await getSurah();
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {datas.map((data) => (
          <Surah key={data.nomor} surah={data} />
        ))}
      </div>
    </>
  );
}
