import Hero from "@/components/Hero";
import Tabs from "@/components/Tab";
import { ResponseListSurah } from "@/models/surah";

async function getSurah() {
  const res = await fetch("https://equran.id/api/v2/surat", {
    cache: "force-cache",
  });
  const surah: ResponseListSurah = await res.json();
  return surah.data;
}

export default async function Homepage() {
  const surah = await getSurah();
  return (
    <main className="">
      <Hero surah={surah} />
      <Tabs surah={surah} />
    </main>
  );
}
