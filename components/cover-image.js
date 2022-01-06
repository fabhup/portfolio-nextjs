import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

export default function CoverImage({
    title,
    url,
    slug,
    isVideo,
    mime,
    width,
    height,
}) {
    const fullUrl = `${
        url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
    }${url}`

    const image = (
        <img
            width={width || '100%'}
            height={height || '100%'}
            alt={`Cover Image for ${title}`}
            src={fullUrl}
            className={cn(
                'block object-top object-cover p-0 m-0 w-full h-full',
                {
                    'hover:shadow-medium transition-shadow duration-200': slug,
                }
            )}
        />
    )

    const video = (
        <video autoPlay={true} muted className="w-full h-full">
            <source
                width={width || '100%'}
                height={height || '100%'}
                src={fullUrl}
                type="video/mp4"
                className={cn('block object-cover p-0 m-0', {
                    'hover:shadow-medium transition-shadow duration-200': slug,
                })}
            />
        </video>
    )
    console.log(video)

    return (
        <div className="sm:mx-0 flex w-full h-40 xs:h-60">
            {isVideo ? video : image}
        </div>
    )
}
