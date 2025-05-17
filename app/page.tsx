import Hero from "@/components/hero"
import FeaturedProjects from "@/components/featured-projects"
import CTA from "@/components/cta"

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      <Hero />
      <FeaturedProjects />
      <CTA />
    </div>
  )
}
