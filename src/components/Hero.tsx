import Logo from "./icons/LogoSVG";
import { Button } from "@/components/ui/button";
import Search from "./search/Search";
import Link from "next/link";

export default function Hero({ surah }: { surah: any[] }) {
  return (
    <>
      <div className="flex flex-col items-center  py-8 gap-y-6 relative overflow-hidden">
        <Logo className="w-screen object-cover dark:text-zinc-300 text-zinc-300 dark:opacity-[0.06] opacity-[0.3] -z-10 fill-current absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        <Logo className="h-40 w-40 dark:text-white text-black fill-current" />
        <div className="w-full max-w-2xl px-4">
          <Search surah={surah} />
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-2 px-4">
          <Button variant="outline" asChild>
            <Link href={"/67"}>Al-Mulk</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={"/36"}>Yasin</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={"/18"}>Al-Kahf</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={"/56"}>Al-Waqi'ah</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={"/55"}>Ar-Rahman</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
