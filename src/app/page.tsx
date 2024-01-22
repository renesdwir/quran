import Hero from "@/components/Hero";
import Tabs from "@/components/Tab";

export default function Homepage({
  searchParams,
}: {
  searchParams: { search?: string; page?: string };
}) {
  const search = searchParams?.search || "";
  return (
    <main className="">
      <Hero search={search} />
      <Tabs />
    </main>
  );
}
