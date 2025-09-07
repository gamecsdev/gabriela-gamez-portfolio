import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TypingEffect from '../components/TypingEffect';
import SelectedWork from '../components/SelectedWork';
import SchoolRegistrationSystem from '../assets//Selected_Work/SchoolRegistrationSystem/SchoolRegistrationSystem.gif';
import SchoolRegistrationSystem2 from '../assets//Selected_Work/SchoolRegistrationSystem/SchoolRegistrationSystem2.gif';
import SchoolRegistrationSystem3 from '../assets//Selected_Work/SchoolRegistrationSystem/SchoolRegistrationSystem3.gif';
function importAll(r) {
  let images = {};
  r.keys().forEach((key) => {
    images[key.replace('./', '')] = r(key);
  });
  return images;
}

const images2DMathematicalVisualization = importAll(require.context('../assets/Selected_Work/2DMathematicalVisualization/', false, /\.(png|PNG|jpe?g|jpg')$/));
const images3DTransportationSimulation = importAll(require.context('../assets/Selected_Work/3DTransportationSimulation/', false, /\.(png|PNG|jpe?g|jpg')$/));
const imagesChatBot = importAll(require.context('../assets/Selected_Work/ChatBot/', false, /\.(png|PNG|jpe?g|jpg')$/));
const imagesImageClassifier = importAll(require.context('../assets/Selected_Work/ImageClassifier/', false, /\.(png|PNG|jpe?g|jpg')$/));
const imagesPoliticianImpact = importAll(require.context('../assets/Selected_Work/PoliticianImpact/', false, /\.(png|PNG|jpe?g|jpg')$/));
const imagesRealEstateAdvisor = importAll(require.context('../assets/Selected_Work/RealEstateAdvisor/', false, /\.(png|PNG|jpe?g|jpg')$/));
const imagesSchoolRegistrationSystem = importAll(require.context('../assets/Selected_Work/SchoolRegistrationSystem/', false, /\.(png|PNG|jpe?g|jpg')$/));

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/projects'); 
  };

  return (
    <div className='home-page'>
      <section className='hero'>
        <div class='intro'>
          <h1>Welcome - I’m Gabriela Gamez</h1>
          <h2 class='tagline'>Software Engineer | Data Scientist | M.S. Computer Science</h2>
          <h2>
            Where Data Meets Innovation: By seamlessly blending data science with software engineering, I create cutting-edge solutions that push boundaries, solve complex problems, and deliver impactful results—driving the future of tech today.
          </h2>
        </div>
      </section>
      {/* Selected Work Section */}
      <section className='selected-work-section'>
        <div className='container'>
           <h2>
              <span className='gradient-title'> <TypingEffect text='> Let’s build what’s next ...' speed={150} /> </span>
          </h2>
          <div className='work-grid'>
              {/* ChatBot - START*/}
              {/* <div>
                <SelectedWork
                  title='Health ChatBot'
                  description='Developed a health chatbot to assist users with medical concerns by providing reliable health information, raising awareness, and promoting early self-care guidance using conversational AI.'
                  imageList={[
                    { type: 'image', src: '/Selected_Work/ChatBot/chatbot.PNG', caption: 'Most Frequent Trigrams Symptoms' },
                    { type: 'image', src: '/Selected_Work/ChatBot/chatbot2.PNG', caption: 'Wordcloud Graph ' },
                    { type: 'image', src: '/Selected_Work/ChatBot/chatbot3.PNG', caption: 'User describe symptoms ' },
                    { type: 'image', src: '/Selected_Work/ChatBot/chatbot4.PNG' , caption: 'Chatbot Respond ' }
                  ]}
                  tags={['Python', 'Flask', 'Beautifulsoup', 'NLK', 'Scikit-learn', 'HTML', 'CSS', 'JSON', 'JQuery', 'JavaScript']}
                  onLearnMore={() => window.open('https://colab.research.google.com/drive/1VqiWrlHZZjBj6xtppo0X-t8M3AfQMTwd', '_blank')}
                />
              </div> */}
              {/* ChatBot - END*/}
              {/* ImageClassifier - START*/}
              <div>
                <SelectedWork
                  title='Image Classifier'
                  description='Developed an image classifier based on a supervised learning model to categorize and label groups of pixels within an image based on patterns and textural characteristics.'
                  imageList={[
                    { type: 'image', src: imagesImageClassifier['imageClassifier2.PNG']},
                    { type: 'image', src: imagesImageClassifier['imageClassifier3.PNG']},
                    { type: 'image', src: imagesImageClassifier['imageClassifier.PNG'] },
                    { type: 'image', src: imagesImageClassifier['imageClassifier.PNG']}
                  ]}
                  tags={['Python', 'Tensorflow', 'Keras', 'Pandas', 'Scikit-Learn', 'Numpy', 'Matplotlib', 'Random', 'CIFAR 10 ', 'CIFAR 100']}
                  onLearnMore={() => window.open('https://colab.research.google.com/drive/1OaYnfAddOpgQ0c4VoZec4RDfkUUDPQF3#scrollTo=rtwV4MPF4tRT', '_blank')}
                />
              </div>
              {/* ImageClassifier - END*/}
              {/* RealEstateAdvisor - START*/}
              <div>
                <SelectedWork
                  title='Real Estate Advisor'
                  description='Created a dashboard to analyze U.S. geographic and historical disaster data, generating a risk score to support data-driven decisions by home buyers, developers, and insurers.'
                  imageList={[
                    { type: 'tableau', src: 'https://public.tableau.com/shared/99S3NXQ9C?:display_count=n&:origin=viz_share_link', caption: 'Live Tableau Dashboard'},
                    { type: 'image', src: imagesRealEstateAdvisor['real-estate-advisor2.PNG']},
                    { type: 'image', src: imagesRealEstateAdvisor['real-estate-advisor3.PNG'], caption: 'Which State has the most Wilfires Occurrences since 1908?' },
                    { type: 'image', src: imagesRealEstateAdvisor['real-estate-advisor4.PNG'], caption: 'Which State has the most Hurricane Occurances since 1980? ' },
                    { type: 'image', src: imagesRealEstateAdvisor['real-estate-advisor5.PNG'] , caption: 'Which State has the most Tornados Occurrences since 1950?' },// No caption
                    { type: 'image', src: imagesRealEstateAdvisor['real-estate-advisor7.PNG'] , caption: 'Which State has the most Earthquakes Occurrences since 1906?' }// No caption
                  ]}
                
                  tags={['Python', 'Pandas', 'Numpy', 'Reverse geocoder', 'Scikit-learn', 'Matplotlib', 'Plotly', 'Tableau']}
                  onLearnMore={() => window.open('https://colab.research.google.com/drive/1hZwPnTlGde8bMfeoaNwO7_UJvFQwKA9G', '_blank')}
                />
              </div>
              {/* RealEstateAdvisor - END*/}
              {/* PoliticianImpact - START*/}
              <div>
                <SelectedWork
                  title="A Politician’s Impact"
                  description='Develop an interactive web app displaying political stats to help voters and officials identify shared interests and priorities.'
                  imageList={[
                    { type: 'image', src: imagesPoliticianImpact['Constituent_User_and_Multiple_Representative_Comparison.png'], caption: 'Constituent User and Multiple Representative Comparison' },
                    { type: 'image', src: imagesPoliticianImpact['PoliticanImpact.PNG']},
                    { type: 'image', src: imagesPoliticianImpact['Representative_Service_Scores.png'], caption: 'Representative Service Scores ' },
                    { type: 'image', src: imagesPoliticianImpact['Representative_User_and_Multiple_Representative_Comparison.PNG'] , caption: 'Representative User and Multiple Representative Comparison' }// No caption
                  ]}
                  tags={['Python', 'Django', 'SQL', 'HTML', 'CSS', 'JSON', 'JQuery', 'JavaScript','SQLite']}
                  onLearnMore={() => window.open('https://sites.google.com/view/gold-team-2022-s-411?usp=sharing', '_blank')}
                />
              </div>
              {/* PoliticianImpact - END*/}
              {/* SchoolRegistrationSystem - START*/}
              <div>
                <SelectedWork
                  title='School Registration System'
                  description='Designed a web portal with a course registration page featuring regular and after-school classes, instructor info, schedules, history, and easy navigation.'
                  imageList={[
                    { type: 'image', src: SchoolRegistrationSystem },
                    { type: 'image', src:SchoolRegistrationSystem3},
                    { type: 'image', src: SchoolRegistrationSystem2},
                  ]}
                  tags={['JavaScript', 'SQL', 'HTML', 'CSS', 'PHP', 'MySQL']}
                  onLearnMore={() => window.open('https://sites.google.com/view/database-concepts-group-9-a?usp=sharing', '_blank')}
                />
              </div>
              {/* SchoolRegistrationSystem - END*/}
              {/* 3DTransportationSimulation - START*/}
              <div>
                <SelectedWork
                  title='3D Transportation Simulation'
                  description='Developed a C++ and OpenGL app simulating a street intersection with multi-view graphics, traffic signal logic, and camera-based rule enforcement.'
                  imageList={[
                    { type: 'image', src: images3DTransportationSimulation['3DTransportationSimulation.PNG'],caption: "Driver's third-person camera " },
                    { type: 'image', src: images3DTransportationSimulation['3DTransportationSimulation2.PNG'],caption: 'Top view of the four-way intersection is controlled by a traffic signal ' },
                    { type: 'image', src: images3DTransportationSimulation['3DTransportationSimulation3.PNG'] ,caption:"Police's third-person camera"},
                  ]}
                  tags={['C++ / OpenGL', 'Maya 2022', 'GIMP 2']}
                  onLearnMore={() => window.open('https://sites.google.com/view/3dsimulation?usp=sharing', '_blank')}
                />
              </div>
              {/* 3DTransportationSimulation - END*/}
              {/* 2DMathematicalVisualization - START*/}
              <div>
                <SelectedWork
                  title='2D Mathematical Visualization'
                  description='Developed a C++/OpenGL application for interactive visualization of theoretical probability density functions and input data histograms.'
                  imageList={[
                    { type: 'image', src: images2DMathematicalVisualization['P1_2Dimages.PNG'] },
                    { type: 'image', src: images2DMathematicalVisualization['P1.PNG']}, 
                  ]}
                  tags={['C++ / OpenGL']}
                  onLearnMore={() => window.open('https://sites.google.com/view/2dsimulations?usp=sharing', '_blank')}
                />
              </div>
              {/* 2DMathematicalVisualization - END*/}
          </div>
          <div className='button-wrapper'>
            <button className='btn right' onClick={handleClick}> See More Projects </button>
          </div>
        </div>
      </section>
    </div>
  );
}
