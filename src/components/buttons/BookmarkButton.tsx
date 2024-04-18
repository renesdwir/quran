"use client";
import { Bookmark } from "lucide-react";
import { useParams } from "next/navigation";
import store from "store";
import _ from "lodash";
import { useEffect, useState } from "react";

interface BookmarkButton {
  nomorAyat: number;
}

export default function BookmarkButton(props: BookmarkButton) {
  const [bookmark, setBookmark] = useState<boolean | null>(null);
  const params = useParams();
  const id = params.id.toString();
  //   console.log(params.id, props.nomorAyat);
  //   console.log(store.get("bookmark"));
  const checkData = () => {
    let lStorage = store.get("bookmark");
    if (_.has(lStorage, id)) {
      return _.includes(lStorage[id], props.nomorAyat);
    } else return false;
  };
  const handleBookmark = () => {
    let lStorage = store.get("bookmark");
    if (_.has(lStorage, id)) {
      if (_.includes(lStorage[id], props.nomorAyat)) {
        //unbook
        _.pull(lStorage[id], props.nomorAyat);
        setBookmark(false);
        store.set("bookmark", lStorage);
      } else {
        //book
        lStorage[id] = [...lStorage[id], props.nomorAyat];
        store.set("bookmark", lStorage);
        setBookmark(true);
      }
    } else {
      //book
      lStorage[id] = [props.nomorAyat];
      store.set("bookmark", lStorage);
      setBookmark(true);
    }
  };
  useEffect(() => {
    setBookmark(checkData());
  }, []);
  return (
    <>
      {bookmark !== null ? (
        bookmark ? (
          <Bookmark
            className="fill-foreground"
            strokeWidth={1.5}
            onClick={handleBookmark}
          />
        ) : (
          <Bookmark className="" strokeWidth={1.5} onClick={handleBookmark} />
        )
      ) : null}
      {/* {bookmark ? (
        <Bookmark className="fill-foreground" strokeWidth={1.5} />
      ) : (
        <Bookmark className="" strokeWidth={1.5} />
      )} */}
    </>
  );
}
