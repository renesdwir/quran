import { DataSurah, Surah } from "@/models/surah";

export async function generateStaticParams() {
  const res = await fetch("https://api.quran.gading.dev/surah");
  const surah: DataSurah = await res.json();
  return surah.data.map((data) => ({
    id: data.number.toString(),
  }));
}
async function getSurah(id: string) {
  const res = await fetch(`https://api.quran.gading.dev/surah/${id}`);
  const surah = await res.json();
  return surah.data;
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const surah: Surah = await getSurah(id);
  return (
    <main className="">
      <h1>{surah.name.transliteration.id}</h1>
    </main>
  );
}
