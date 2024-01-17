export default function CardSurah() {
  return (
    <>
      <div className="border rounded flex p-4 cursor-pointer group hover:border-cyan-600 hover:bg-accent">
        <div className="group-hover:bg-cyan-600 w-11 h-11 mr-4 bg-zinc-300 dark:bg-opacity-[0.1] bg-opacity-[0.6] rotate-45 flex justify-center items-center rounded-md">
          <p className="-rotate-45 font-semibold group-hover:text-background">120</p>
        </div>
        <div className="flex-1 flex flex-col">
          <p className="  font-bold">Al-Baqarah</p>
          <p className="text-xs text-muted-foreground font-medium group-hover:text-cyan-600">
            The Opener
          </p>
        </div>
        <div className="flex flex-col text-center">
          <p className="font-arabic">الفاتحة</p>
          <p className="text-xs text-muted-foreground font-medium group-hover:text-cyan-600">
            7 Ayahs
          </p>
        </div>
      </div>
    </>
  );
}
