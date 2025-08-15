import Image from "next/image";

interface RoomPageProps {
  params: { room: string };
}

export default function RoomPage({ params }: RoomPageProps) {
  const roomName = params.room.charAt(0).toUpperCase() + params.room.slice(1);

  return (
    <main className="mt-16">
      {/* Room Banner */}
      <section className="h-96 relative flex items-center justify-center bg-black text-white">
        <Image src={`/placeholder-${params.room}.jpg`} alt={roomName} fill className="object-cover" />
        <h1 className="absolute text-4xl font-avatar">{roomName} Room</h1>
      </section>

      {/* VTuber Embed */}
      <section className="py-20 px-4 max-w-6xl mx-auto text-center">
        <div className="rounded-xl border p-6 h-[560px] flex items-center justify-center bg-black/5 text-black/50">
          VTuber AI widget goes here
        </div>
      </section>
    </main>
  );
}
