import ImageGallery from 'react-image-gallery'
import styled from 'styled-components'

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
        description: 'Développement de sites Web',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
        description: 'Expertise Data',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
        description: 'Réalisation de maquettes',
    },
]

const StyledGallery = styled(ImageGallery)``

const Gallery = (data) => {
    const imageUrl = (url) => {
        return `${
            url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
        }${url}`
    }

    const imagesGallery = data.data.map((elt) => {
        return {
            description: elt.description,
            original: imageUrl(elt.image.url),
            thumbnail: imageUrl(elt.image.formats.thumbnail.url),
        }
    })
    return (
        <div className="rounded-xl md:my-5 lg:mx-20 overflow-hidden z-0 xs:text-lg md:text-xl shadow-xl">
            <StyledGallery
                items={imagesGallery}
                showBullets={true}
                showPlayButton={false}
                showThumbnails={false}
                autoPlay={true}
                className="rounded-xl max-h-20"
            />
        </div>
    )
}

export default Gallery
