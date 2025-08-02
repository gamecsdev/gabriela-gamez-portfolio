import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { TableauViz } from '@tableau/embedding-api-react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function SelecterdProjectView ({ title, description, imageList, tags, onLearnMore }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className='work-item'>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={8000}
        stopOnHover
        selectedItem={currentSlide}
        onChange={index => setCurrentSlide(index)}
      >
      {imageList.map((item, index) => (
        <div className='slide-wrapper' key={index}>
            {item.type === 'image' && ( <img src={item.src} alt={`Slide ${index + 1}`} /> )}
            {item.type === 'tableau' && currentSlide === index && (
              <TableauViz
                src={item.src}
                toolbar='bottom'
                width='250%'
                height='501px'
                borderRadius= '12px'
                overflowY='auto'
                display='flex'
                flexDirection= 'column-reverse'
                background= 'linear-gradient(transparent, transparent) fixed'
              />
            )}
            {item.caption && <p className='legend'>{item.caption}</p>}
        </div>
      ))}
      </Carousel>
      <div className='work-info'>
        <h2>{title}</h2>
        <div className='project-tags'>
          {tags.map((tag, index) => ( <span className='tag' key={index}>{tag}</span> ))}
        </div>
        <p>{description}</p>
      </div>
      <button className='view-button' onClick={onLearnMore}>
          Learn More
      </button>
    </div>
  );
};
