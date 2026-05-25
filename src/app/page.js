import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-6 tracking-wide">
      <h1 className="text-neutral-200 hover:text-white duration-200 transition-all text-lg font-bold">
        <Link href="/">Jakob Dubeau</Link>
      </h1>
      <div className="flex flex-col gap-4 text-stone-300 font-medium leading-6">
        <p>
          Hi, I'm Jakob. I'm a 4th year CS student at uOttawa. I like creating clean and responsive user interfaces.
        </p>
        <p>
          I don&apos;t have much design experience, but I&apos;m currently taking a UI design course and learning a lot about principles and elements of design.
        </p>
      </div>
      
    </main>
  )
}
