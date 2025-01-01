import Surah from "./Surah";

export default async function SurahList({ datas = [] }: { datas: any[] }) {
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
