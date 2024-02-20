import React from 'react'

export default function ImageGalleryItem({imageUrl}) {
  return (
     
          <li>
          <img src={imageUrl} alt="Gallery item" />
          </li>
     
  )
}
