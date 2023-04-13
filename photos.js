const
  PHOTOS_ENDPOINT = `https://vanillajsacademy.com/api/photos.json`

export const
  PHOTO_ID_KEY = 'photo_id',

  getCachedPhotos = () => JSON.parse(localStorage?.getItem('photos') || '[]'),

  setCachedPhotos = photos => localStorage?.setItem('photos', JSON.stringify(photos)),

  loadPhotos = async () => {
    // early out for cache
    const cachedPhotos = getCachedPhotos()
    if(cachedPhotos) { return cachedPhotos }

    // request the data
    const response = await fetch(PHOTOS_ENDPOINT)
    // ensure response is good
    if(!response.ok) { throw new Error(`Bad response from photos endpoint`) }
    // parse the json
    const photos = await response.json()
    // ensure photos exist
    if(!photos.length) { throw new Error(`No photos returned`) }

    // hydrate cache
    setCachedPhotos(photos)

    return photos
  },

  // templates
  renderPhoto = ({ name, description, price, url }) =>
    `<figure title="${ description }">
      <img src="${ url }"/>
      <figcaption>${ name } ($${ price })</figcaption>
    </figure>`,

  renderPhotoLinked = photo =>
    `<a href="/photo.html?${PHOTO_ID_KEY}=${ photo.id }">
      ${ renderPhoto(photo) }
    </a>`,

  renderPhotos = photos =>
    `<div id="photos">
      ${ photos.map(renderPhotoLinked).join('') }
    </div>`
