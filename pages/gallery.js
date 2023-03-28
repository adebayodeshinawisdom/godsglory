import React, {useState} from 'react'
import {Card} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft, faCircleChevronRight, faCircleXmark} from '@fortawesome/free-solid-svg-icons'

const Gallery = () => {
  const [imageNumber, setImageNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const galleryImages = [
    {
        src: '/images/gprmn3.jpeg'
    },
    {
        src: '/images/grpm1.jpeg'
    },
    {
        src: '/images/grpmdd2.jpeg'
    },
    {
        src: '/images/grpmb.jpeg'
    },

    {
      src: '/images/1.jpg'
  },
  {
    src: '/images/2.jpg'
},
{
  src: '/images/3.jpg'
},
{
  src: '/images/4.jpg'
},
{
  src: '/images/5.jpg'
},
{
  src: '/images/6.jpg'
},
{
  src: '/images/7.jpg'
},
{
  src: '/images/9.jpg'
},
{
  src: '/images/10.jpg'
},
{
  src: '/images/11.jpg'
},
{
  src: '/images/12.jpg'
},
{
  src: '/images/13.jpg'
},
{
  src: '/images/14.jpg'
},
{
  src: '/images/15.jpg'
},
{
  src: '/images/16.jpg'
},
{
  src: '/images/17.jpg'
},
{
  src: '/images/18.jpg'
},
{
  src: '/images/19.jpg'
},
{
  src: '/images/20.jpg'
},
{
  src: '/images/21.jpg'
},
{
  src: '/images/22.jpg'
},
{
  src: '/images/23.jpg'
},
{
  src: '/images/24.jpg'
},
{
  src: '/images/25.jpg'
},
{
  src: '/images/26.jpg'
},
{
  src: '/images/27.jpg'
},
{
  src: '/images/28.jpg'
},
{
  src: '/images/29.jpg'
},
{
  src: '/images/30.jpg'
},
{
  src: '/images/31.jpg'
},
{
  src: '/images/32.jpg'
},
{
  src: '/images/33.jpg'
},
{
  src: '/images/34.jpg'
},
{
  src: '/images/36.jpg'
},
{
  src: '/images/37.jpg'
},
{
  src: '/images/38.jpg'
},
{
  src: '/images/39.jpg'
},
]

  
const handleOpenModal = (index) => {
  setImageNumber(index)
  setOpenModal(true)
}
  
const handleClose = () => {
  setOpenModal(false)
}

const prevButton = () => {
  imageNumber === 0 ? setImageNumber(galleryImages.length -1) : setImageNumber( imageNumber - 1)
}

const nextButton = () => {
imageNumber + 1 === galleryImages.length ? setImageNumber(0) : setImageNumber(imageNumber + 1)
}
  return (

    <div className='container'>
    {openModal && 
    <div className='slideWrapper text-center'>
      <FontAwesomeIcon icon={faCircleXmark} className="btnClose" onClick={handleClose}/>
      <FontAwesomeIcon icon={faCircleChevronLeft} className="btnPrev" onClick={prevButton}/>
      <FontAwesomeIcon icon={faCircleChevronRight} className="btnNext" onClick={nextButton}/>
    
     <div className='fullScreen'>
      <img src={galleryImages[imageNumber].src}/>
     </div>

    </div>
    }

      <div className='row'>
        {galleryImages.map((image, index) => {

          return(
            <div className="col-md-2" key={index}>
              <img style={{width:  "150px", height:"100px", padding: "5px"}} src={image.src}
              onClick={()=> handleOpenModal(index)}
              />
            </div>
          )
        })}


      </div>
    
    
    </div>
      

  )
}

export default Gallery
