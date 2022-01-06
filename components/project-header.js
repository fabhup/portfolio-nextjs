import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import ProjectTitle from '@/components/project-title'
import Link from 'next/link'

export default function ProjectHeader({ project }) {
    const fullLogoUrl = `${
        project.logo.url.startsWith('/')
            ? process.env.NEXT_PUBLIC_STRAPI_API_URL
            : ''
    }${project.logo.url}`

    return (
        <>
            <div className="flex justify-center mx-5 mt-10 mb-6 md:mt-10 md:mb-8 sm:mx-0 ">
                {(
                    <img
                        src={fullLogoUrl}
                        alt={project.title}
                        className="w-52 sm:w-64 rounded object-contain"
                    />
                ) || <ProjectTitle>{project.title}</ProjectTitle>}
                <div className="w-full-vw fixed top-20 md:top-28 left-0 flex flex-row justify-center items-center">
                    <Link href={project.project_url} passHref>
                        <button className="text-sm sm:text-base mx-2 sm:mx-4 my-2 sm:px-8 bg-theme-button-bg hover:bg-theme-button-bg-hover text-theme-button-text font-semibold hover:text-white pt-5 pb-3 px-4 rounded w-max order-last self-end">
                            Accéder au site
                        </button>
                    </Link>
                    <Link href={project.github_url} passHref>
                        <button className="text-sm sm:text-base mx-2 sm:mx-4 my-2 sm:px-8 bg-theme-button-bg hover:bg-theme-button-bg-hover text-theme-button-text font-semibold hover:text-white pt-5 pb-3 px-4 rounded w-max order-last self-end">
                            Projet sur github
                        </button>
                    </Link>
                </div>
            </div>
            <div className="max-w-2xl mx-auto">
                {/* <div className="text-sm md:text-base text-right ">
                    <Date
                        dateString={project.end_date}
                        dateStringFormat={'LLL yyyy'}
                    />
                    {parseISO(project.end_date).getMonth() !=
                        parseISO(project.start_date).getMonth() && (
                        <>
                            {' - '}
                            <Date
                                dateString={project.start_date}
                                dateStringFormat={'LLL yyyy'}
                            />
                        </>
                    )}
                </div> */}
            </div>
        </>
    )
}
