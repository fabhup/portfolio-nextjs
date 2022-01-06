async function fetchAPI(query, { variables } = {}) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables,
            }),
        }
    )

    const json = await res.json()
    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }

    return json.data
}

export async function getPreviewPostBySlug(slug) {
    const data = await fetchAPI(
        `
  query PostBySlug($where: JSON) {
    posts(where: $where) {
      slug
    }
  }
  `,
        {
            variables: {
                where: {
                    slug,
                },
            },
        }
    )
    return data?.posts[0]
}

export async function getAllPostsWithSlug() {
    const data = fetchAPI(`
    {
      posts {
        slug
      }
    }
  `)
    return data?.allPosts
}

export async function getAllProjectsWithSlug() {
    const data = fetchAPI(`
  {
    projects {
      slug
    }
  }
`)
    return data?.allProjects
}

export async function getAllPostsForHome(preview) {
    const data = await fetchAPI(
        `
    query Posts($where: JSON){
      posts(sort: "date:desc", limit: 10, where: $where) {
        title
        slug
        excerpt
        date
        coverImage {
          url
        }
        profile {
          name
          picture {
            url
          }
        }
      }
    }
  `,
        {
            variables: {
                where: {
                    ...(preview ? {} : { status: 'published' }),
                },
            },
        }
    )
    return data?.posts
}

export async function getPostAndMorePosts(slug, preview) {
    const data = await fetchAPI(
        `
  query PostBySlug($where: JSON, $where_ne: JSON) {
    posts(where: $where) {
      title
      slug
      content
      date
      ogImage: coverImage{
        url
      }
      coverImage {
        url
      }
      profile {
        name
        picture {
          url
        }
      }
    }

    morePosts: posts(sort: "date:desc", limit: 2, where: $where_ne) {
      title
      slug
      excerpt
      date
      coverImage {
        url
      }
      profile {
        name
        picture {
          url
        }
      }
    }
  }
  `,
        {
            preview,
            variables: {
                where: {
                    slug,
                    ...(preview ? {} : { status: 'published' }),
                },
                where_ne: {
                    ...(preview ? {} : { status: 'published' }),
                    slug_ne: slug,
                },
            },
        }
    )
    return data
}

export async function getProjectAndMoreProjects(slug, preview) {
    const data = await fetchAPI(
        `
query ProjectBySlug($where: JSON, $where_ne: JSON) {
  projects(where: $where) {
    title
    slug
    shortDescription
    description
    project_url
    github_url
    logo {
      url
    }
  }

  moreProjects: projects(sort: "end_date:desc", limit: 2, where: $where_ne) {
    title
    slug
  }
}
`,
        {
            preview,
            variables: {
                where: {
                    slug,
                    ...(preview ? {} : { status: 'published' }),
                },
                where_ne: {
                    ...(preview ? {} : { status: 'published' }),
                    slug_ne: slug,
                },
            },
        }
    )
    return data
}

export async function getProfiles() {
    const data = await fetchAPI(
        `query Profiles($where: JSON){
      profiles(where: $where) {
        name
        picture { 
          alternativeText 
          url 
          formats
        }
      }
    }
    `
    )

    return data?.profiles
}

export async function getServices() {
    const data = await fetchAPI(
        `query Services($where: JSON){
      services(where: $where) {
        name
        description
        image { 
          alternativeText 
          url 
          formats
        }
      }
    }
    `
    )

    return data?.services
}

export async function getProjectsPreview(limit) {
    const data = await fetchAPI(
        `query ProjectsPreview($where: JSON){
      projects(sort: "start_date:desc", where: $where) {
        title
    		shortDescription
    		start_date
    		end_date
    		slug
    		logo {
          alternativeText
          url
        }
    		medias {
          id 
          url
          alternativeText
          mime
        }
      }
    }
    `,
        {
            variables: {
                limit: limit ? 0 : limit,
            },
        }
    )
    return data?.projects
}
// # Write your query or mutation here
//   query Projects($where: JSON){
//       projects(sort: "end_date:desc", limit: 10, where: $where) {
//         title
//         slug
//         start_date
//         end_date
//         logo { url }
//         medias { url }
// 				github_url
//       	project_url
//         badges { label }
//         tags {name}
//       }
//     }
