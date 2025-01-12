"use client";
import _ from "lodash";
import { useEffect, useMemo, useState } from "react";
import store from "store";

const useBookmark = ({ id }: any) => {
  const [bookmarksState, setBookmarks] = useState<any[]>([]);

  useEffect(() => {
    const storedBookmarks = store.get("bookmark") || [];
    setBookmarks(storedBookmarks);
  }, []);

  const checkData = useMemo(() => {
    return bookmarksState.some((item: any) => item.id === id);
  }, [id, bookmarksState]);

  const setBookmark = (data: any) => {
    const bookmarks = store.get("bookmark") || [];
    let newBookmarks;
    if (_.isEmpty(bookmarks)) {
      newBookmarks = [data];
    } else {
      if (bookmarks.some((item: any) => item.id === data.id)) {
        // Menghapus bookmark jika sudah ada
        newBookmarks = bookmarks.filter((item: any) => item.id !== data.id);
      } else {
        // Menambahkan bookmark jika belum ada
        newBookmarks = [...bookmarks, data];
      }
    }
    // Memperbarui store dengan newBookmarks
    store.set("bookmark", newBookmarks);
    setBookmarks(newBookmarks);
  };

  return {
    bookmark: checkData,
    setBookmark,
  };
};

export default useBookmark;
