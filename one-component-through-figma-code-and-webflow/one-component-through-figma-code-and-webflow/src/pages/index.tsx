import Item from "@/components/Item";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-800 font-sans dark:bg-zinc-900">
      <main className="flex flex-col items-center justify-center py-32 px-16">
        <div className="bg-black rounded-2xl p-5 flex flex-col gap-5">
          <Item 
            title="Item title"
            description="Item description"
            size="default"
          />
          <Item 
            title="Item title"
            description="Item description"
            size="large"
          />
        </div>
      </main>
    </div>
  );
}
