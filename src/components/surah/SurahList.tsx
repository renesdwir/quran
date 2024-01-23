import { DataSurah } from "@/models/surah";
import Surah from "./Surah";

async function getSurah() {
  const res = await fetch("https://api.quran.gading.dev/surah");
  const surah: DataSurah = await res.json();
  return surah;
}
export default async function SurahList() {
  const { data: datas } = await getSurah();
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-3">
        {datas.map((data) => (
          <Surah key={data.number} surah={data} />
        ))}
      </div>
    </>
  );
}
