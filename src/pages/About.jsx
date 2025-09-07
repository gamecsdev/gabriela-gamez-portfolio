import tapeImg from '../assets/leaves2.png';
import coffeeGif from '../assets/More/Me/coffee.gif';
import lightGif from '../assets/More/Me/lightmode.gif';
import darkGif from '../assets/More/Me/darkmode2.gif';
import TypingEffect from '../components/TypingEffect';

function importAll(r) {
  let images = {};
  r.keys().forEach((key) => {
    images[key.replace('./', '')] = r(key);
  });
  return images;
}

const images = importAll(require.context('../assets/More/Me', false, /\.(png|PNG|jpe?g|jpg')$/));

const Tape = ({ position, image = tapeImg }) => (
  <div className={`tape ${position}`} 
  style={{ backgroundImage: `url(${image})` }} />
);

const Ribbon = ({ quotes, className }) => (
  <div className={className}>
    {quotes.map((quote, i) => (
      <div key={i} className='ribbon-tile'>{quote}</div>
    ))}
  </div>
);

const CollagePhoto = ({ src, alt, rotationClass, borderColor = '#ffffff', backgroundColor = '#ffffff'}) => (
  <div
    className={`collage-photo ${rotationClass}`}
    style={{ borderColor: borderColor, background: backgroundColor, }}
  >
    <img src={src} alt={alt} />
    <Tape position='top-left' />
    <Tape position='top-right' />
  </div>
);

export default function AboutMe({ darkMode }) {
  console.log('darkMode in AboutMe:', darkMode);

  const Collageimages = [
    { src: images['Gradpic.PNG'], alt: 'Memory 1', rotation: 'rotate-center' },
    { darkSrc: darkGif, lightSrc: lightGif, alt: 'Memory 2', rotation: 'rotate-left'},
    { src: coffeeGif, alt: 'Memory 3', rotation: 'rotate-right'},
    { src: images['junior-leader.jpg'], alt: 'Memory 4', rotation: 'rotate-left'},
    { src: images['StateCompetion.PNG'], alt: 'Memory 5', rotation: 'rotate-center'},
    { src: images['competion.jpg'], alt: 'Memory 6', rotation: 'rotate-right'}
  ];

  const lightGradients = [
    'linear-gradient(135deg, #fbc02d, #ff8a65)',
    'linear-gradient(135deg, #ffcc80, #ff8a65)',
    'linear-gradient(135deg, #ffd54f, #ff7043)',
    'linear-gradient(135deg, #ffe082, #ffb74d)',
    'linear-gradient(135deg, #fff176, #ff8a65)',
    'linear-gradient(135deg, #fbc02d, #ffca28)'
  ];

  const darkGradients = [
    'linear-gradient(135deg, #03DAC6, #121212)',
    'linear-gradient(135deg, #00acc1, #263238)',
    'linear-gradient(135deg, #26c6da, #37474f)',
    'linear-gradient(135deg, #0097a7, #1c1c1c)',
    'linear-gradient(135deg, #00bcd4, #212121)',
    'linear-gradient(135deg, #4dd0e1, #1a1a1a)' 
  ];

  const lightBorders = [
    '#f57f17', '#fb8c00', '#f4511e', '#ff6f00', '#fbc02d', '#f57f17'
  ];

  const darkBorders = [
    '#00bcd4', '#03a9f4', '#0288d1', '#4db6ac', '#00acc1', '#03DAC6'
  ];

  return (
    <div className='scrapbook-container'>
      <div className='scrapbook-page'>
        <div className='collage-wrapper'>
        <div className='collage-text'>
          <span className='gradient-title'>
            <h2><TypingEffect text='> Hi I am Gabriela Gamez' speed={100} /></h2> 
          </span> 
          <p> I <span className='gradient-p '>thrive</span> in high-place environments, consistently delivering exceptional results under tight deadlines. 
            I actively <span className='gradient-p '>seek out new challenges</span> — academic, personal, or extracurricular — and continually 
            <span className='gradient-p '> push beyond my limits</span> to <span className='gradient-p '>achieve excellence</span>.
          </p>
          <p> As a highly motivated professional, I hold a <span className='gradient-p '>Master’s degree in Computer Science</span> with a remarkable GPA
            of 3.81 and a Bachelor’s degree in Computer Science, both with high honors, complemented by a minor in Simulations and Modeling.
            My academic journey has been strategically designed to establish a robust understanding of both theoretical concepts and practical applications, 
            particularly in the domains of <span className='gradient-p '>data science, analytics, and software development.</span>
          </p>
          <p>
            My graduate coursework has been meticulously selected to <span className='gradient-p '>build deep expertise</span> in data science and
            analytics, covering subjects such as Database Concepts, Artificial Intelligence, Machine Learning, Data Science and Analytics, Data Visualization,
            Big Data Analytics, Information Visualization, and Text Analytics & Natural Language Processing. These courses have equipped me with a strong 
            theoretical foundation and practical experience in solving real-world data challenges using <span className='gradient-p '>modern tools and technologies.</span>
          </p>
          <p>
            My technical prowess spans a wide array of querying, object-oriented, and functional programming languages, including Java, C/C++, Python, React, R, 
            SQL, and PHP. This versatility enables me to approach complex problems from multiple angles and <span className='gradient-p '>make significant
            contributions to cross-functional teams and projects</span>.
          </p>
          <p>
            I uphold the highest standards of integrity and honesty, and I am unwavering in my <span className='gradient-p '>commitment to continuous growth </span> 
            in both technical and professional realms. My drive, focus, and resilience were honed early through Tae Kwon Do, where I earned my black belt and junior 
            leader badge in high school while competing in numerous local and state tournaments. These formative experiences instilled in me 
            <span className='gradient-p '> discipline, leadership, and perseverance</span> — traits that continue to shape my journey today.
          </p>
          <p> Whether in the classroom, working with data, or mastering new technologies, I bring <span className='gradient-p '>energy, determination, and a growth
            mindset</span> to every challenge I take on. I am <span className='gradient-p '>quick to learn and adapt</span> to new technologies, a quality that
            has been instrumental in my academic and professional journey.
            </p>
        </div>
        <div className='photo-collage'>
          <div className='photo-note-row'>
          <div className='photo-section'>
            <Tape position='top-left' />
            <Tape position='top-right' />
            <img src={images['me.jpg']} alt='Self' className='polaroid-photo' />
          </div>
          </div>
          {Collageimages.map((img, index) => {
            return (
              <CollagePhoto
                key={index}
                src={img.src ??(darkMode ? img.darkSrc : img.lightSrc)}
                alt={img.alt}
                rotationClass={img.rotation}
                borderColor={darkMode ? darkBorders[index % darkBorders.length] : lightBorders[index % lightBorders.length]}
                backgroundColor={darkMode ? darkGradients[index % darkGradients.length] : lightGradients[index % lightGradients.length]}
              />
            );
          })}
          <Ribbon 
            className='ribbon-wrapper'
            quotes={[
            "“Challenges are what make life interesting and overcoming them is what makes life meaningful.— Marine”",
            "“Don’t stop when you’re tired. Stop when you’re done.”",
            ]}
          />
          </div>
        </div>
      </div>
    </div>
  );
}
