import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Bookmark from "./Bookmark";
import RecentlyRead from "./RecentlyRead";
import SurahList from "./surah/SurahList";

export default function MultiTabs({ surah }: { surah: any[] }) {
  return (
    <div className="max-w-6xl mx-auto">
      <Tabs defaultValue="alquran" className="md:p-10 p-4 md:pb-0 pb-0 w-full">
        <TabsList className="bg-background rounded-none w-full">
          <TabsTrigger value="alquran">Surah</TabsTrigger>
          {/* <TabsTrigger value="recentlyread">Catatan</TabsTrigger> */}
          <TabsTrigger value="bookmarks">Bookmarks</TabsTrigger>
        </TabsList>
        <TabsContent value="alquran" className="mt-4">
          <SurahList datas={surah} />
        </TabsContent>
        {/* <TabsContent value="recentlyread">
          <RecentlyRead />
        </TabsContent> */}
        <TabsContent value="bookmarks">
          <Bookmark />
        </TabsContent>
      </Tabs>
    </div>
  );
}
