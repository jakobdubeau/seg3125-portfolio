import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

import Design1Image from "../../public/images/smiledental.png";
import Design2Image from "../../public/images/memory-block.png";
import Design3Image from "../../public/images/1_rDN1RbUDmaoNHiKfXSURog.png";
import Design4Image from "../../public/images/beyond-game-day-article-hero.png";

export default function Home() {
  const projects = [
		{
			title: "Smile Dental",
			href: "https://seg3125-service-site.vercel.app/",
			description: "Dental clinic service website.",
			image: Design1Image,
			imageAlt: "Smile Dental",
		},
		{
			title: "Design 2",
			href: "/coming-soon",
			description: "Coming soon.",
			image: Design2Image,
			imageAlt: "Design 2",
		},
		{
			title: "Design 3",
			href: "/coming-soon",
			description: "Coming soon.",
			image: Design3Image,
			imageAlt: "Design 3",
		},
		{
			title: "Design 4",
			href: "/coming-soon",
			description: "Coming soon.",
			image: Design4Image,
			imageAlt: "Design 4",
		},
	]
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

      <div className="flex flex-col gap-4">
        <h2 className="text-neutral-400 text-sm font-semibold uppercase tracking-widest">
          Case Studies
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </main>
  )
}
