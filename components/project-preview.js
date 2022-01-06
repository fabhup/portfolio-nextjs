// import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'
import { parseISO } from 'date-fns'
import styled from 'styled-components'

export default function ProjectPreview({
    title,
    logo,
    start_date,
    end_date,
    short_description,
    medias,
    slug,
}) {
    const mediaPreview = medias[0]

    const ProjectPreviewWrapper = styled.div`
        &:hover {
            & .card-hovered {
                display: flex;
                opacity: 0.6;
            }

            & .card-description {
                opacity: 0.6;
            }
        }
    `

    const ProjectPreviewOverLayer = styled.div`
        display: hidden;
        transition ease-in-out &:hover {
        }
    `

    return (
        <ProjectPreviewWrapper className="card-wrapper rounded-lg block relative mx-0 my-5 sm:mx-5 shadow hover:shadow-md rounded-lg transition ease-in-out overflow-hidden ">
            <Link href={`/projects/${slug}`} className="w-100">
                <a className="card-link absolute z-40 w-full h-full top-0 left-0" />
            </Link>
            <div
                className="card-hovered hidden transition ease-in-out 
                justify-center font-semibold items-center opacity-0 
                bg-gray-dark flex hidden absolute z-30 w-full h-60 
                top-0 left-0"
            >
                <span className="card-hovered-text text-center text-white text-xl">
                    Accéder au projet <br /> {title}
                </span>
            </div>
            <div className="bg-gray-light text-theme-bg-dark h-full">
                <CoverImage
                    slug={slug}
                    title={title}
                    url={mediaPreview.url}
                    isVideo={mediaPreview.mime.slice(0, 3) === 'vid'}
                    mime={mediaPreview.mime}
                    width={'100%'}
                    height={'100%'}
                />
                <div className="card-description bg-theme-primary-lightest p-3 md:p-5 h-full-40 xs:h-full-60">
                    <div className="card-header flex justify-between items-center text-lg mb-1">
                        <h3 className="text-2xl pr-5 md:text-3xl mb-1 leading-snug">
                            {title}
                        </h3>
                        <div className="text-sm md:text-base text-right ">
                            <Date
                                dateString={end_date}
                                dateStringFormat={'LLL yyyy'}
                            />
                            {parseISO(end_date).getMonth() !=
                                parseISO(start_date).getMonth() && (
                                <>
                                    {' - '}
                                    <Date
                                        dateString={start_date}
                                        dateStringFormat={'LLL yyyy'}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                    <div className="card-text">
                        <p className="text-md font-thin leading-relaxed">
                            {short_description}
                        </p>
                    </div>
                </div>
            </div>
        </ProjectPreviewWrapper>
    )
}
