import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import InputSearch from "./InputSearch";
import { Search, Mic, MoveRight } from "lucide-react";
import { ResponseListSurah } from "@/models/surah";
import Link from "next/link";
async function getSurah() {
  const res = await fetch("https://equran.id/api/v2/surat");
  const surah: ResponseListSurah = await res.json();
  return surah.data;
}
export default async function SearchComponent({ search }: { search: string }) {
  const datas = await getSurah();

  const filteredData = search
    ? datas.filter((data) => data.namaLatin.toLowerCase().includes(search.toLowerCase()))
    : [];

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className="cursor-pointer ">
            <div className=" relative p-4 px-4 xs:px-6 flex items-center justify-between border rounded-lg bg-white dark:bg-black">
              <Search className="w-5 h-5" />
              <p className="mx-1 sm:mx-4 flex-1">What do you want to read?</p>
              <Mic className="w-5 h-5" />
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-xl max-w-[350px] rounded">
          <div>
            <div className=" border-b pb-3">
              <InputSearch />
            </div>
            <div className="mt-2">
              {search ? (
                <div>
                  <span className="text-muted-foreground text-xs">
                    Search <span className="font-bold">"{search}"</span>
                  </span>
                  <div className="mt-1">
                    {filteredData.slice(0, 5).map((data) => (
                      <div className="flex items-center gap-4 hover:bg-accent  p-3 rounded-lg transition-all duration-200 cursor-pointer text-muted-foreground hover:text-accent-foreground">
                        <MoveRight className="w-4 h-4 text-muted-foreground" />
                        <p className="text-sm">{data.namaLatin}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <span className="text-muted-foreground text-xs">Try navigating to</span>
                  <div className="mt-1">
                    <Link
                      href={"/56"}
                      className="flex items-center gap-4 hover:bg-accent  p-3 rounded-lg transition-all duration-200 cursor-pointer text-muted-foreground hover:text-accent-foreground"
                    >
                      <MoveRight className="w-4 h-4 text-muted-foreground" />
                      <p className="text-sm">Al-Waqi'ah</p>
                    </Link>
                    <Link
                      href={"/67"}
                      className="flex items-center gap-4 hover:bg-accent  p-3 rounded-lg transition-all duration-200 cursor-pointer text-muted-foreground hover:text-accent-foreground"
                    >
                      <MoveRight className="w-4 h-4 text-muted-foreground" />
                      <p className="text-sm">Al-Mulk</p>
                    </Link>
                    <div className="flex items-center gap-4 hover:bg-accent  p-3 rounded-lg transition-all duration-200 cursor-pointer text-muted-foreground hover:text-accent-foreground">
                      <MoveRight className="w-4 h-4 text-muted-foreground" />
                      <p className="text-sm">Yasin</p>
                    </div>
                    <div className="flex items-center gap-4 hover:bg-accent  p-3 rounded-lg transition-all duration-200 cursor-pointer text-muted-foreground hover:text-accent-foreground">
                      <MoveRight className="w-4 h-4 text-muted-foreground" />
                      <p className="text-sm">Al-Khaf</p>
                    </div>
                    <div className="flex items-center gap-4 hover:bg-accent  p-3 rounded-lg transition-all duration-200 cursor-pointer text-muted-foreground hover:text-accent-foreground">
                      <MoveRight className="w-4 h-4 text-muted-foreground" />
                      <p className="text-sm">Ar-Rahman</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
