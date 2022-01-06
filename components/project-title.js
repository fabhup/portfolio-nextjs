export default function ProjectTitle({ children }) {
    return (
        <h1 className="project-title text-2xl xs:text-3xl md:text-6xl lg:text-6xl font-bold leading-tight mb-12 text-center">
            {children}
        </h1>
    )
}
