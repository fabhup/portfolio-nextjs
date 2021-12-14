import { CMS_NAME, CMS_URL } from '@/lib/constants'
import CoverImage from './cover-image'

export default function Intro(profile) {
  const imageUrl = `${
    profile.profile.picture.url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
  }${profile.profile.picture.url}`

  return (
    <section className="px-0 py-2 md:py-5 md:m-5 text-theme-text-2 
      lg:text-theme-text-1 
      text-base font-medium tracking-normal lg:bg-theme-bg-1
      lg:outline-1 lg:p-0 lg:mx-20
      lg:rounded-full sm:flex sm:items-center lg:justify-between 
      sm:text-lg md:text-xl lg:flex-row">
      <div className="
          p-0 mr-6 rounded-lg truncate float-left align-middle
          lg:rounded-full lg:rounded-r-lg lg:relative">
        <img
          width={"120px"}
          height={"auto"}
          alt={`Cover Image for ${profile.profile.name}`}
          src={imageUrl}
          className={'w-36 sm:w-72 object-left-top md:object-cover lg:object-center p-0 m-0 hover:shadow-medium transition-shadow duration-200'}
        />
      </div>

      <div className="w-full p-1 sm:p-0"> 
        <h1 className="leading-relaxed lg:pr-10">
          “ Développeur Freelance Data spécialisé également en développement Front-End, je peux vous accompagner sur des projets de développement Web  mais aussi sur des missions orientées DATA. ”
      </h1>
      </div> 
    </section>
  )
}
 