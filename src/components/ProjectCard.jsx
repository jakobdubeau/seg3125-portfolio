import Image from "next/image"
import { SquareArrowOutUpRight } from "lucide-react"

export default function ProjectCard({
  title,
  description,
  href,
  image,
  imageAlt,
}) {
  return (
    <div className="group bg-neutral-900/50 rounded-lg shadow:md hover:shadow-lg hover:scale-103 transition-all duration-300 border border-white/10">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden"
      >
        <div className="relative">
          <Image
            src={image}
            placeholder="blur"
            alt={imageAlt}
            className="rounded-t-lg w-full h-28 object-cover object-center"
          />
        </div>
      </a>
      <div className="px-3 py-3">
        <div className="flex justify-between items-start sm:gap-4">
          <div>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-200 font-medium text-lg hover:text-neutral-400 transition-colors duration-200 block tracking-tight"
            >
              {title}
            </a>
            <p className="text-neutral-400 mt-2 text-sm leading-relaxed tracking-tight">
              {description}
            </p>
          </div>
          <div className="flex gap-2">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded-lg text-neutral-400 hover:bg-neutral-700 transition-colors"
            >
              <SquareArrowOutUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}