import ProjectPreview from './project-preview'

export default function ProjectsCards({ projects }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-5 w-full">
            {projects.map((project) => (
                <ProjectPreview
                    key={project.slug}
                    title={project.title}
                    logo={project.logo}
                    start_date={project.start_date}
                    end_date={project.end_date}
                    short_description={project.shortDescription}
                    medias={project.medias}
                    slug={project.slug}
                />
            ))}
        </div>
    )
}
