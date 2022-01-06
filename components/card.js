import ImageGallery from 'react-image-gallery'
import styled from 'styled-components'

const testMedias = [{}]

const StyledGallery = styled(ImageGallery)``

const Card = (title, medias) => {
    const imageUrl = (url) => {
        return `${
            url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
        }${url}`
    }

    const imagesGallery = testMedias.map((elt) => {
        return {
            description: elt.description,
            original: imageUrl(elt.image.url),
            thumbnail: imageUrl(elt.image.formats.thumbnail.url),
        }
    })
    return (
        <div className="card-container">
            <div className="rounded relative">
                <a
                    className="card-link 
                    absolute block h-full w-full top-0 left-0"
                    href=""
                ></a>
                <div
                    className="card-media-container 
                    md:my-5 lg:mx-20 overflow-hidden z-0 xs:text-lg md:text-xl"
                >
                    <StyledGallery
                        items={imagesGallery}
                        showBullets={true}
                        showPlayButton={false}
                        showThumbnails={false}
                        autoPlay={true}
                        className="rounded-xl max-h-20"
                    />
                </div>
                <div className="card-header flex justify-between items-end">
                    <span className="card-title">{title}</span>
                    <span className="card-subtitle">{title}</span>
                </div>
            </div>
        </div>
    )
}
