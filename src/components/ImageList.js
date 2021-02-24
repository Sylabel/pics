import React from 'react'
import ImageCard from './ImageCard'
import '../imageCard.css'

function ImageList(props) {
  const listPics = props.pics.map((image) => {
    return (
      <div className='ui segment' key={image.id}>
        <ImageCard image={image} />
      </div>
    )
  })
  return <div className='image-list'>{listPics}</div>
}

export default ImageList
