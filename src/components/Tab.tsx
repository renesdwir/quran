import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Bookmark from "./Bookmark";
import RecentlyRead from "./RecentlyRead";
import SurahList from "./surah/SurahList";
import { Suspense } from "react";

export default function MultiTabs() {
  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
        <Tabs defaultValue="alquran" className="md:p-10 p-4 w-full">
          <TabsList className="bg-background rounded-none w-full">
            <TabsTrigger value="alquran">Surah</TabsTrigger>
            <TabsTrigger value="recentlyread">Catatan</TabsTrigger>
            <TabsTrigger value="bookmarks">Bookmarks</TabsTrigger>
          </TabsList>
          <TabsContent value="alquran" className="mt-4">
            <Suspense fallback="Loading...">
              <SurahList />
            </Suspense>
          </TabsContent>
          <TabsContent value="recentlyread">
            <RecentlyRead />
          </TabsContent>
          <TabsContent value="bookmarks">
            <Bookmark />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
