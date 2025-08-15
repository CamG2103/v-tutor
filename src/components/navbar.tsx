"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-black/10 backdrop-blur-sm">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <span className="font-avatar text-xl font-bold">V-Tutor</span>
        <button onClick={() => setOpen(!open)} className="text-2xl font-bold">
          ☰
        </button>
      </div>
      {open && (
        <nav className="bg-white/95 p-4 flex flex-col gap-4 text-black">
          <Link href="/">Home</Link>
          <Link href="/rooms/math">Math</Link>
          <Link href="/rooms/reading">Reading</Link>
          <Link href="/rooms/cs">Computer Science</Link>
          <Link href="/rooms/international">International</Link>
        </nav>
      )}
    </header>
  );
}
