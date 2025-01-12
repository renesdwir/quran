"use client";
import store from "store";
import CardBookmark from "./card/CardBookmark";

export default function Bookmark() {
  const bookmarks = store.get("bookmark") || [];
  return (
    <div className="flex flex-col gap-3 my-4">
      {bookmarks.map((bookmark: any, idx: any) => (
        <CardBookmark key={idx} data={bookmark} />
      ))}
    </div>
  );
}
