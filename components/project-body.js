import markdownStyles from './markdown-styles.module.css'
import ProjectTitle from '@/components/project-title'

export default function ProjectBody({ project, content }) {
    return (
        <div className="max-w-2xl mx-auto mb-5 pt-2">
            <ProjectTitle>{project.shortDescription}</ProjectTitle>
            <div
                className={markdownStyles['markdown']}
                dangerouslySetInnerHTML={{ __html: project.content }}
            />
        </div>
    )
}
