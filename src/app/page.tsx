import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-16">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center bg-black text-white">
        <Image src="/placeholder-home.jpg" alt="Hero" fill className="object-cover" />
        <div className="absolute text-center px-4">
          <h1 className="font-avatar text-5xl md:text-6xl mb-4">
            You’ve arrived, let’s walk these halls of knowledge together.
          </h1>
        </div>
      </section>

      {/* Example Prompt Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-avatar mb-6">Example Prompt</h2>
        <div className="mt-6 rounded-xl border p-6 h-[560px] flex items-center justify-center bg-black/5 text-black/50">
          VTuber AI widget goes here
        </div>
      </section>
    </main>
  );
}
