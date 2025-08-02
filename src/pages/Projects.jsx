import React from 'react';
import TypingEffect from '../components/TypingEffect';
import MoreProjectView from '../components/ProjectView';
import Award from '../components/Award';

export default function Projects () {

  return (
    <div className='projects-page'>
      <section className='hero'>
        <div class='intro'>
          <h1>
            Projects
            <br />
            <span className='gradient-title'>
              <TypingEffect text='> These projects highlight my technical and creative capabilities' speed={100} />
            </span>
          </h1>
        </div>
      </section>
      <section className='project-section'>
          {/* ChatBot -START */}
          <div>
            <MoreProjectView
              title='Health ChatBot'
              Profession='Data Scientist' 
              location ='UC Irvine Division of Continuing Education - Irvine, CA'
              date ='(3/25-5/25)'
              imageList={[
                { type: 'image', src: '/Selected_Work/ChatBot/chatbot.PNG', caption: 'Most Frequent Trigrams Symptoms' },
                { type: 'image', src: '/Selected_Work/ChatBot/chatbot2.PNG', caption: 'Wordcloud Graph ' },
                { type: 'image', src: '/Selected_Work/ChatBot/chatbot3.PNG', caption: 'User describe symptoms ' },
                { type: 'image', src: '/Selected_Work/ChatBot/chatbot4.PNG' , caption: 'Chatbot Respond ' }
              ]}
              languageTags={['Python', 'NLK', 'Scikit-Learn']}
              toolTags={['Google Colab']}
              decription= {['Developed a health chatbot to assist users with medical concerns by providing reliable health information, raising awareness, and promoting early self-care guidance using conversational AI.']}
              // onLearnMore={() => window.open('https://colab.research.google.com/drive/1VqiWrlHZZjBj6xtppo0X-t8M3AfQMTwd', '_blank')}
            />
          </div>
          {/* ChatBot -END */}
          {/* Image-to-Image-Translator -START */}
          <div>
            <MoreProjectView
              title='Image-to-Image Translator'
              Profession='Software Engineer'
              location ='Old Dominion University - Norfolk, VA' 
              date ='(1/23-5/23)'
              imageList={[
                { type: 'image', src: '/Projects/Image-to-Image-Translator/AFHQ_10_epochs.png'},
                { type: 'image', src: '/Projects/Image-to-Image-Translator/AFHQ_20_epochs.PNG' },
                { type: 'image', src: '/Projects/Image-to-Image-Translator/AFHQ_30_epochs.PNG'},
                { type: 'image', src: '/Projects/Image-to-Image-Translator/CIFAR-10_10_epochs.PNG' },
                { type: 'image', src: '/Projects/Image-to-Image-Translator/CIFAR-10_50_epochs.PNG' },
                { type: 'image', src: '/Projects/Image-to-Image-Translator/CIFAR-10_150_epochs.PNG'},
                { type: 'image', src: '/Projects/Image-to-Image-Translator/tensorboard.PNG' }
              ]}
              languageTags={['Python', 'Tensorflow', 'Tensorboard', 'Numpy', 'Matplotlib', 'Random', 'Glob']}
              toolTags={['Google Colab','CIFAR 10','AFHQ datasets']}
              decription= {[
                'Developed an image-to-image translation application with the ability to learn the mapping between input and output images using a semi-supervised learning method.',
                'Utilized the Generative Adversarial Network (GAN) model which consisted of a generator model and a discriminator model – the generator constructed images with a random latent vector space as input, and the discriminator was used to distinguish between authentic images stored in a database and the images constructed by the generator, classifying the images as either “Real” or “Fake.”'
              ]}
            />
          </div>
          {/* Image-to-Image-Translator - END */}
          {/* ImageClassifier -START */}
          <div>
            <MoreProjectView
              title='Image Classifier'
              Profession='Data Analyst'
              location ='Old Dominion University - Norfolk, VA' 
              date ='(1/23-5/23)'
              imageList={[
                { type: 'image', src: '/Selected_Work/ImageClassifier/imageClassifier2.PNG'},
                { type: 'image', src: '/Selected_Work/ImageClassifier/imageClassifier3.PNG'},
                { type: 'image', src: '/Selected_Work/ImageClassifier/imageClassifier.PNG' },
                { type: 'image', src: '/Selected_Work/ImageClassifier/imageClassifier.PNG'}
              ]}
              languageTags={['Python', 'Tensorflow', 'Keras', 'Pandas', 'Scikit-Learn', 'Numpy', 'Matplotlib', 'Random']}
              toolTags={['Google Colab','CIFAR 10 ', 'CIFAR 100','Canva']}
              decription= {[
                'Developed an image classifier based on a supervised learning model to categorize and label groups of pixels within an image based on patterns and textural characteristics.',
                'Optimized validation accuracy by performing a comparison evaluation on multiple models to determine the ideal model for classifying images, which was further enhanced with data augmentation.'
              ]}
              onLearnMore={() => window.open('https://colab.research.google.com/drive/1OaYnfAddOpgQ0c4VoZec4RDfkUUDPQF3#scrollTo=rtwV4MPF4tRT', '_blank')}
            />
          </div>
          {/* ImageClassifier -END */}
          {/* InteractiveStockComparison -START */}
          <div>
            <MoreProjectView
              title='Interactive Stock Comparison'
              Profession='Data Scientist'
              location ='Old Dominion University - Norfolk, VA' 
              date ='(1/23-5/23)'
              imageList={[
                { type: 'image', src: '/Projects/InteractiveStockComparison/dashboard.PNG' },
                { type: 'image', src: '/Projects/InteractiveStockComparison/barchart.PNG'},
                { type: 'image', src: '/Projects/InteractiveStockComparison/linechart.PNG' },
                { type: 'image', src: '/Projects/InteractiveStockComparison/scatterplot.PNG'},
                { type: 'image', src: '/Projects/InteractiveStockComparison/select_options.PNG' },
                { type: 'image', src: '/Projects/InteractiveStockComparison/info_term.PNG'},
                ]}
              languageTags={['JavaScript (D3.js)', 'HTML']}
              toolTags={['Observable']}
              decription= {[
                'Developed an interactive dashboard utilizing the JavaScript D3.js library to display visualizations for users to evaluate and compare stocks allowing for more informed investment decisions.',
                'Obtained stock market data from public data sources that extended over a one-year period, which was cleaned and manipulated for ingestion by the dashboard.'
              ]}
            />
          </div>
          {/* InteractiveStockComparison- END */}
          {/* RealEstateAdvisor-START */}
          <div>
            <MoreProjectView
              title='Real Estate Advisor'
              Profession='Data Scientist'
              location ='Old Dominion University - Norfolk, VA' 
              date ='(9/22-12/22)'
              imageList={[
                { type: 'tableau', src: 'https://public.tableau.com/shared/99S3NXQ9C?:display_count=n&:origin=viz_share_link', caption: 'Live Tableau Dashboard'},
                { type: 'image', src: '/Selected_Work/RealEstateAdvisor/real-estate-advisor2.PNG'},
                { type: 'image', src: '/Selected_Work/RealEstateAdvisor/real-estate-advisor3.PNG', caption: 'Which State has the most Wilfires Occurrences since 1908?' },
                { type: 'image', src: '/Selected_Work/RealEstateAdvisor/real-estate-advisor4.PNG', caption: 'Which State has the most Hurricane Occurances since 1980? ' },
                { type: 'image', src: '/Selected_Work/RealEstateAdvisor/real-estate-advisor5.PNG' , caption: 'Which State has the most Tornados Occurrences since 1950?' },
                { type: 'image', src: '/Selected_Work/RealEstateAdvisor/real-estate-advisor7.PNG' , caption: 'Which State has the most Earthquakes Occurrences since 1906?' }
              ]}
              languageTags={['Python', 'Pandas', 'Numpy', 'Reverse geocoder', 'Scikit-Learn', 'Matplotlib', 'Plotly']}
              toolTags={['Google Colab','Tableau']}
              onLearnMore={() => window.open('https://colab.research.google.com/drive/1hZwPnTlGde8bMfeoaNwO7_UJvFQwKA9G', '_blank')}
              decription= {[
                'Performed a statistical analysis of geographical and historical data relating to the locations, magnitudes, and types of natural disasters that resulted in property damage throughout the United States to calculate an overall risk score that could be referenced by home buyers, real estate developers, and insurers to make data-driven investment decisions',
                'Collaborated with a team of analysts and engineers to identify, collect, and clean relevant data from a variety of public sources utilizing a variety of advanced ETL techniques and open-source tools.',
                'Compiled the results of our analysis and utilized an interactive data visualization tool (Tableau) to summarize our findings.'
              ]}
            />
          </div> 
          {/* RealEstateAdvisor-END */}
          {/* PoliticianImpact - START*/}
          <div>
            <MoreProjectView
              title="A Politician’s Impact"
              Profession='Full Stack Developer' 
              location ='Old Dominion University - Norfolk, VA' 
              date ='(9/21-4/22)' 
              imageList={[
                { type: 'image', src: '/Selected_Work/PoliticianImpact/Constituent_User_and_Multiple_Representative_Comparison.PNG', caption: 'Constituent User and Multiple Representative Comparison' },
                { type: 'image', src: '/Selected_Work/PoliticianImpact/PoliticanImpact.PNG'},
                { type: 'image', src: '/Selected_Work/PoliticianImpact/Representative_Service_Scores.PNG', caption: 'Representative Service Scores ' },
                { type: 'image', src: '/Selected_Work/PoliticianImpact/Representative_User_and_Multiple_Representative_Comparison.PNG' , caption: 'Representative User and Multiple Representative Comparison' }
              ]}
              languageTags={['Python', 'Django', 'SQL', 'HTML', 'CSS', 'JSON', 'JQuery', 'JavaScript']}
              toolTags={['SQLite', 'Visual Studio Code', 'GitHub', 'Docker']}
              decription= {[
                'Worked with five team members to develop an interactive web application designed to display political statistics on voters and elected officials to help these groups understand similarities, areas of interest, and other priorities.',
                'Designed all front-end features of the application with interactive visualizations connected to a SQLite database using Python, Django, HTML, CSS, JSON and JQuery.',
                'Presented final project before peers, evaluators, and stakeholders, demonstrating features and functionality.'
              ]}
              onLearnMore={() => window.open('https://sites.google.com/view/gold-team-2022-s-411?usp=sharing', '_blank')}
            />
          </div> 
          {/* PoliticianImpact - END*/}
          {/* 3DTransportationSimulation - START*/}
          <div>
            <MoreProjectView
              title='3D Transportation Simulation'
              Profession='Software Developer'
              location ='Old Dominion University - Norfolk, VA' 
              date ='(10/21-12/21)'
              imageList={[
                { type: 'image', src: '/Selected_Work/3DTransportationSimulation/3DTransportationSimulation.PNG',caption: "Driver's third-person camera" },
                { type: 'image', src: '/Selected_Work/3DTransportationSimulation/3DTransportationSimulation2.PNG',caption: 'Top view of the four-way intersection is controlled by a traffic signal ' },
                { type: 'image', src: '/Selected_Work/3DTransportationSimulation/3DTransportationSimulation3.PNG' ,caption:"Police's third-person camera"},
                ]}
              languageTags={['C++ / OpenGL' ]}
              toolTags={['Microsoft Visual Studio','Maya 2022', 'GIMP 2']}
              decription= {[
                'Developed an application using C++, OpenGL, Maya and GIMP 2 to generate an interactive graphical simulation of a simplified street intersection with multiple views, control logic for traffic signals, and surveillance cameras to monitor compliance with traffic rules and respond when rules were violated.',
                'Created custom OBJ models with modified textures, billboards with simple geometry and texture mapping, and added the ability to take photos of the scene using an imaging pipeline.'
              ]}
              onLearnMore={() => window.open('https://sites.google.com/view/3dsimulation?usp=sharing', '_blank')}
            />
          </div> 
          {/* 3DTransportationSimulation - END*/}
          {/* 2DMathematicalVisualization - START*/}
          <div> 
            <MoreProjectView
              title='2D Mathematical Visualization'
              Profession='Software Developer' 
              location ='Old Dominion University - Norfolk, VA' 
              date ='(9/21-10/21)'
              imageList={[
                { type: 'image', src: '/Selected_Work/2DMathematicalVisualization/P1_2Dimages.PNG' },
                { type: 'image', src: '/Selected_Work/2DMathematicalVisualization/P1.PNG'}, 
                ]}
              languageTags={['C++ / OpenGL' ]}
              toolTags={['Microsoft Visual Studio']}
              decription= {[
                'Developed an application using C++ / OpenGL to produce an interactive mathematical visualization for the theoretical probability density functions (pdf) and histograms of existing input data.',
                'Mathematical entities performed input analyses to examine connections among distinctive objects and yield visualizations.'
              ]}
              onLearnMore={() => window.open('https://sites.google.com/view/2dsimulations?usp=sharing', '_blank')}
            />
          </div> 
          {/* 2DMathematicalVisualization - END*/}
          {/* SchoolRegistrationSystem - START*/}
          <div>
            <MoreProjectView
              title='School Registration System'
              Profession='Data Scientist/Full Stack Developer'
              location ='Old Dominion University - Norfolk, VA' 
              date ='(1/21-4/21)'
              imageList={[
                { type: 'image', src: '/Selected_Work/SchoolRegistrationSystem/SchoolRegistrationSystem.gif' },
                { type: 'image', src: '/Selected_Work/SchoolRegistrationSystem/SchoolRegistrationSystem3.gif'},
                { type: 'image', src: '/Selected_Work/SchoolRegistrationSystem/SchoolRegistrationSystem2.gif' },
              ]}
              languageTags={['JavaScript', 'SQL', 'HTML', 'CSS', 'PHP']}
              toolTags={['MySQL','Notepad++', 'VIM', 'GitHub']}
              decription= {[
                'Worked with a team of three computer science students to develop a registration system for courses and after-school activities with user authentication and row level security features.',
                'Designed a web portal with a course registration page, showing regular and after-school courses, instructors, scheduled meeting times, historical data, and features for page navigation.',
                'Developed a database schema to store user data and security configurations for all entities.'
              ]}
              onLearnMore={() => window.open('https://sites.google.com/view/database-concepts-group-9-a?usp=sharing', '_blank')}
            />
          </div> 
          {/* SchoolRegistrationSystem - END*/}
          {/* ConnectVR- START */}
          <div>
            <MoreProjectView
              title='ConnectVR'
              Profession='Virtual Reality'
              location ='TechTogether Seattle Hackathon' 
              date ='(1/22- 1/24/21)' 
              imageList={[
                { type: 'image', src: '/Projects/ConnectVR/ConnectVR.PNG' },
                { type: 'image', src: '/Projects/ConnectVR/ConnectVR2.PNG'},
                ]}
                
              languageTags={['C#', 'CSS','HTML']}
              toolTags={['Unity','echoVR', 'Brackets', 'Google Sites', 'GitHub']}
              decription= {[
                'Worked with a group of four participants to develop a virtual education workspace allowing teachers the ability to provide instruction directly to students.',
                'Recognized by the company, echoAR, and the judges, as the "Best AR/VR Hack" and the "Ultimate Failed Hack."'
              ]}
              onLearnMore={() => window.open('https://devpost.com/software/connectvr', '_blank')}
            />
          </div>
          <div>
            <Award></Award>
          </div>
          <div
            style={{
              maxWidth: '100%',
              height: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 20,
            }}
          >
            <iframe
              src='https://www.youtube.com/embed/1Oga6CQTxj4?si=L--2ph5iDRMPUGZo'
              title='YouTube video'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              referrerpolicy='strict-origin-when-cross-origin'
              allowFullScreen
              style={{
                width: '100%',
                maxWidth: '1400px',
                aspectRatio: '16 / 9',
                display: 'block',
                marginTop: 10,
                marginBottom: 10,
                padding: 0,
                borderRadius: 8,
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              }}
            />
          </div>
          {/* ConnectVR- END */}
      </section>
    </div>
  );
};