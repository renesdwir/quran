import CardSurah from "./card/CardSurah";

export default function Surah() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-3">
        <CardSurah />
        <CardSurah />
        <CardSurah />
        <CardSurah />
      </div>
    </>
  );
}
