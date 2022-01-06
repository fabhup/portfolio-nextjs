import Container from '@/components/container'
// import MoreStories from '@/components/more-stories'
// import HeroPost from '@/components/hero-post'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import Gallery from '@/components/gallery'
import ProjectsCards from '@/components/projects-cards'
import {
    getAllPostsForHome,
    getProfiles,
    getServices,
    getProjectsPreview,
} from '@/lib/api'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'

export default function Index({
    allPosts,
    allProfiles,
    allServices,
    projectsPreview,
    preview,
}) {
    const heroPost = allPosts[0]
    const morePosts = allPosts.slice(1)
    const mainProfile = allProfiles[0]
    const imagesServices = allServices
    const lastProjects = projectsPreview

    console.log(mainProfile)
    return (
        <>
            <Layout preview={preview}>
                <Head>
                    <title>{'Fabien Hupel - Freelance Front-End & Data'}</title>
                    <link
                        href={
                            'https://fonts.googleapis.com/css2?family=KoHo:wght@200;300;400;500;600;700&display=swap'
                        }
                        rel="stylesheet"
                    ></link>
                </Head>
                <h2 className="mx-5 mt-5 md:mb-2 order-first text-center xs:text-left sm:mx-10 text-3xl md:text-4xl font-semibold tracking-tighter leading-tight">
                    Projets réalisés
                </h2>
                <div className="w-full p-5 flex flex-col justify-center">
                    {lastProjects.length > 0 && (
                        <ProjectsCards projects={lastProjects} />
                    )}

                    {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
                </div>
            </Layout>
        </>
    )
}

export async function getStaticProps({ preview = null }) {
    const allPosts = (await getAllPostsForHome(preview)) || []
    const allProfiles = (await getProfiles()) || []
    const allServices = (await getServices()) || []
    const projectsPreview = (await getProjectsPreview(1)) || []

    return {
        props: { allPosts, allProfiles, allServices, projectsPreview, preview },
    }
}
