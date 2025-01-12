import Link from "next/link";

export default function CardBookmark({ data }: any) {
  return (
    <Link
      href={`/${data.id.split("-")[0]}#${data.id.split("-")[1]}`}
      className="border p-5 rounded-lg group hover:border-cyan-600 hover:bg-accent"
    >
      <h1 className="font-bold group-hover:text-cyan-600">
        {data.nameSurah}, {data.id}
      </h1>
      <div className="font-arabic text-2xl md:text-3xl text-right flex-1  dark:bg-opacity-[0.1] bg-opacity-[0.6]  py-1 rounded-md  leading-loose md:leading-[70px]">
        {data.teksArab}
      </div>
      <p className="text-muted-foreground text-sm md:text-base">
        {data.teksLatin}
      </p>
    </Link>
  );
}
