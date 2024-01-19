import { Search, Mic } from "lucide-react";

export default function FakeSearch() {
  return (
    <>
      <div className="cursor-pointer ">
        <div className=" relative p-4 px-4 xs:px-6 flex items-center justify-between border rounded-lg bg-white dark:bg-black">
          <Search className="w-5 h-5" />
          <p className="mx-1 sm:mx-4 flex-1">What do you want to read?</p>
          <Mic className="w-5 h-5" />
        </div>
      </div>
    </>
  );
}
