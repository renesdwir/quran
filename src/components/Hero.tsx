import Logo from "./icons/logo";
import { Button } from "@/components/ui/button";
import Search from "./search/Search";

export default function Hero({ search }: { search: string }) {
  return (
    <>
      <div className="flex flex-col items-center  py-8 gap-y-6 relative overflow-hidden">
        <Logo className="h-[1500px] w-[1500px] object-cover dark:text-zinc-300 text-zinc-300 dark:opacity-[0.06] opacity-[0.3] -z-10 fill-current absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        <Logo className="h-40 w-40 dark:text-white text-black fill-current" />
        <div className="w-full max-w-2xl px-4">
          <Search search={search} />
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-2 px-4">
          <Button variant="outline">About The Quran</Button>
          <Button variant="outline">Al Mulk</Button>
          <Button variant="outline">Yaseen</Button>
          <Button variant="outline">Al Kahf</Button>
          <Button variant="outline">Al Waqi'ah</Button>
        </div>
      </div>
    </>
  );
}
