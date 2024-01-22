"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
export default function InputSearch() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathName}?${params.toString()}`);
  }, 400);

  return (
    <>
      <input
        type="text"
        placeholder="What do you want to read?"
        className="focus:outline-none bg-background px-2 pb-2  text- sm:text-xl w-full"
        autoFocus
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("search")?.toString()}
      />
    </>
  );
}
