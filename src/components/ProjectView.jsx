import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { TableauViz } from '@tableau/embedding-api-react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function MoreProjectView ({ title,Profession,location, date, imageList, languageTags,toolTags, decription, onLearnMore }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className='project-gl-card'>
      <div className='card-header'>
        <h1>{title}</h1>
      </div>
      <div className='card-body'>
        <div className='image-placeholder'>
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
        </div>
        <div className='card-details'>
          <p className='profession'><i>{Profession}</i></p>
          <p className='location'>{location}</p>
          <p className='location-date'>{date}</p>
          <p className='tech-stack'>Languages:
              <p className='tags2'>
                {languageTags.map((tag, index) => ( <span className='tag2' key={index}>{tag}</span> ))}
              </p>
          </p>
          <p className='tech-stack'>Tools:
              <p className='tags2'>
                {toolTags.map((tag, index) => ( <span className='tag2' key={index}>{tag}</span> ))}
              </p>
          </p>
          <ul className='instructions' >
            {decription.map((step, i) => ( <li key={i}>{step}</li> ))}
          </ul>
          {onLearnMore && (<div className='button-container2'>
          <button className='learn-more-btn' onClick={onLearnMore}>
            Learn More
          </button>
          </div>)}
        </div>
      </div>
    </div>
  );
};
