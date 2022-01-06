import ProjectsCards from '@/components/projects-cards'
import Link from 'next/link'

export default function LastProjects({ lastProjects }) {
    return (
        <section className="mt-8 flex flex-row flex-wrap justify-between items-center">
            <h2 className="md:mb-2 order-first text-center xs:text-left md:mx-5 text-3xl md:text-4xl font-semibold tracking-tighter leading-tight">
                Derniers Projets
            </h2>
            <Link href={`/projects/`} passHref>
                <button className="bg-theme-button-bg hover:bg-theme-button-bg-hover text-theme-button-text font-semibold hover:text-white py-2 px-4 rounded w-max order-last sm:order-first self-end mx-auto sm:mx-5">
                    Voir tous les projets
                </button>
            </Link>
            {lastProjects.length > 0 && (
                <ProjectsCards projects={lastProjects} />
            )}
        </section>
    )
}
