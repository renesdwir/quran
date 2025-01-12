"use client";

import { Bookmark } from "lucide-react";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

interface BookmarkButton {
  bookmark: boolean;
  onBookmark: () => void;
}

export default function BookmarkButton({
  bookmark,
  onBookmark,
}: BookmarkButton) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      {mounted ? (
        <Bookmark
          className={bookmark ? "fill-foreground" : ""}
          strokeWidth={1.5}
          onClick={onBookmark}
        />
      ) : (
        <Skeleton className="w-[24px] h-[24px] rounded" />
      )}
    </>
  );
}
