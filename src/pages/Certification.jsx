import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { GiDiploma } from 'react-icons/gi';
import { PiCertificateFill } from 'react-icons/pi';
import { MdOutlineSportsMartialArts } from 'react-icons/md';
import { AiFillMedicineBox } from 'react-icons/ai';
import './certification.css';
import WorkDA from '../assets/More/Me/WorkDA.PNG';
import GrandImages from '../assets/More/Me/GrandImages_XLarge.jpg';
import BlackBelt from '../assets/More/Me/BlackBelt.png';
import TypingEffect from '../components/TypingEffect';

function importAll(r) {
  let images = {};
  r.keys().forEach((key) => {
    images[key.replace('./', '')] = r(key);
  });
  return images;
}

const images = importAll(require.context('../assets/More/', false, /\.(png|PNG|jpe?g|jpg')$/));

const data = [
  {
    title: 'Machine and Deep Learning',
    subtitle: 'Ceritfication',
    GPA: 'GPA:4.0',
    text: 'UCI Division of Continuing Education',
    date: 'In Progress',
    location: {
      name: 'Irvine, CA',
      url: 'https://ce.uci.edu/programs/technology/machine-and-deep-learning'
    },
    color: 'blue',
    image: images['UCI.png'],
    icon: <PiCertificateFill />
  },
  {
    title: 'M.S. Computer Science',
    text: 'Old Dominion University',
    subtitle: 'Magna Cum Laude',
    GPA: 'GPA:3.81',
    date: 'May 2024',
    location: {
      name: 'Norfolk, VA',
      url: 'https://www.odu.edu/academics/programs/masters/computer-science'
    },
    color: 'green',
    image: GrandImages,
    icon: <GiDiploma  />
  },
  {
    title: 'B.S. Computer Science (major) / Simulations & Modeling (minor)',
    subtitle: 'Summa Cum Laude',
    GPA: 'GPA:3.91',
    text: 'Old Dominion University',
    date: 'May 2022',
    location: {
      name: 'Norfolk, VA',
      url: 'https://www.odu.edu/computer-science/assessment'
    },
    color: 'green',
    image: images['ODU.png'],
    icon: <GiDiploma  />
  },
    {
    title: 'A.S. Computer Science',
    subtitle: 'Magna Cum Laude',
    text: 'Northern Virginia Community College',
    date: 'May 2019',
    location: {
      name: 'Woodbridge, VA',
      url: 'https://www.nvcc.edu/academics/programs/computer-science.html'
    },
    color: 'green',
    image: images['NOVA.png'],
    icon: <GiDiploma  />
  },
  {
    title: 'Dental Radiologic Safety Certified',
    text: 'Dental Assisting National Board',
    date: 'Jan 2017',
    location: {
      name: 'Vienna, VA',
      url: 'https://www.danb.org'
    },
    color: 'green',
    image: WorkDA,
    icon: <AiFillMedicineBox />
  },
  {
    title: 'Black Belt Certified',
    text: 'World Taekwondo Federation',
    date: 'Dec 2012',
    location: {
      name: 'Woodbridge, VA',
      url: 'https://www.worldtaekwondo.org/index.html'
    },
    color: 'green',
    image: BlackBelt,
    icon: <MdOutlineSportsMartialArts />
  }
];

export default function Certifications() {
  return (
  <div className='certification-page'>
    <section className='hero'>
      <div class='intro'>
        <h1> Certifications<br/>
        <span className='gradient-title'><TypingEffect text='> These achievements and honors reflect my commitment to excellence'speed={100} /></span></h1>
      </div>
    </section>
    <section className='certification-section' id='certification'>
      <div className='timeline'>
        {data.map((item, index) => (
          <div key={index} className={`timeline-item timeline-item-${item.color}`}>
          <div className='timeline-point'>
              <span className='timeline-year'>{item.date}</span>
          </div>
          <div className='text-box'>
              <a
                href={item.location.url}
                target='_blank'
                rel='noopener noreferrer'
                className='timeline-location'
              >
                {item.image && <img src={item.image} alt={item.title}className='timeline-image' />}
                <div className='timeline-icon'> {item.icon}
                  <span class='emphasis'> {item.title} </span>
                </div>
                <p className='timeline-subtitle'> {item.subtitle} </p>
                <p className='timeline-gpa'> {item.GPA} </p>
                  {item.location.name}
              </a>
          </div>
          </div>
        ))}
      </div>
    </section>
  </div>
  );
};

