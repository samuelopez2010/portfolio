import Hero from '../components/sections/Hero'
import AboutMe from '../components/sections/AboutMe'
import CareerTimeline from '../components/sections/CareerTimeline'
import SkillsGrid from '../components/sections/SkillsGrid'
import FeaturedProjects from '../components/sections/FeaturedProjects'

export default function HomePage() {
    return (
        <>
            <Hero />
            <AboutMe />
            <CareerTimeline />
            <SkillsGrid />
            <FeaturedProjects />
        </>
    )
}
