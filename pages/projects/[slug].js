import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '@/components/container'
import Layout from '@/components/layout'
import { getAllProjectsWithSlug, getProjectAndMoreProjects } from '@/lib/api'
import ProjectTitle from '@/components/project-title'
import ProjectBody from '@/components/project-body'
import ProjectHeader from '@/components/project-header'
import LoadSpinner from '@/components/load-spinner'

import Head from 'next/head'
import markdownToHtml from '@/lib/markdownToHtml'

export default function Project({ project, moreProjects, preview }) {
    const router = useRouter()
    console.log(project)

    if (!router.isFallback && !project?.slug) {
        return <ErrorPage statusCode={404} />
    }
    return (
        <Layout preview={preview}>
            <div className="h-full flex justify-center items-start">
                {router.isFallback ? (
                    <LoadSpinner />
                ) : (
                    <>
                        <article className="m-5 md:m-10">
                            <Head>
                                <title>{project.title}</title>
                            </Head>
                            <ProjectHeader project={project} />
                            <ProjectBody project={project} />
                        </article>
                    </>
                )}
            </div>
        </Layout>
    )
}

export async function getStaticProps({ params, preview = null }) {
    const data = await getProjectAndMoreProjects(params.slug, preview)
    const content = await markdownToHtml(data?.projects[0]?.description || '')
    return {
        props: {
            preview,
            project: {
                ...data?.projects[0],
                content,
            },
            moreProjects: data?.moreProjects,
        },
    }
}

export async function getStaticPaths() {
    const allProjects = await getAllProjectsWithSlug()

    return {
        paths: allProjects?.map((project) => `/projects/${project.slug}`) || [],
        fallback: true,
    }
}
