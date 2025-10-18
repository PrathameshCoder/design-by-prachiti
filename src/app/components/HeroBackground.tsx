"use client";
import Image from "next/image";

export default function HeroBackground() {
  return (
    <>
      {/* BG image behind everything */}
      <Image
        src="/hero.jpg"
        alt="Interior background"
        fill
        priority
        className="fixed inset-0 object-cover object-center -z-10 opacity-60"
      />
      {/* Dim overlay (tweak opacity as you like) */}
    </>
  );
}
