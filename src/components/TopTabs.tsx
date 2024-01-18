import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Surah from "./Surah";
import Bookmark from "./Bookmark";
import RecentlyRead from "./RecentlyRead";

export default function TopTabs() {
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
            <Surah />
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
