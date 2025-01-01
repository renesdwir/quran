"use client";

interface InputSearchProps {
  setSearch: (value: string) => void;
  search: string;
}

export default function InputSearch({ setSearch, search }: InputSearchProps) {
  return (
    <>
      <input
        type="text"
        placeholder="What do you want to read?"
        className="focus:outline-none bg-background px-2 pb-2  text- sm:text-xl w-full"
        autoFocus
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </>
  );
}
