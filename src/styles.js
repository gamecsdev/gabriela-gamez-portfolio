// src/styles.js
import { createGlobalStyle, keyframes } from 'styled-components';
// Define your animation using keyframes

export const GlobalStyle = createGlobalStyle`

/* ============================== GLOBAL BODY STYLES ============================== */
  body {
    background-color: ${(props) => (props.darkMode ? '#121212' : '#FFFDF2')};
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
    margin: 0;
  }

/* ============================== INTRO ============================== */
  .hero {
    background-color: ${(props) => (props.darkMode ? '#121212' : '#FFFDF2')}; 
    color: ${(props) => (props.darkMode ? '#F7EFFC' : '#000000')};
    max-width: 1600px;
    margin: 1px 0 0px 30px; /* left-aligned with spacing */
    padding: 10px 20px;
  }

  .intro {
    margin-bottom: 16px;
  }

  .intro h1 {
    font-size: 5rem;
    font-weight: 700;
    color: ${(props) => (props.darkMode ? '#F7EFFC' : '#000000')};
    margin-bottom: 16px;
  }

  .intro h2 {
    font-size: 2.0rem;
    font-weight: normal;
    color: ${(props) => (props.darkMode ? '#F7EFFC' : '#000000')};
    margin-bottom: 16px;
  }

  .intro .tagline {
    font-size: 2.4rem;
    color: ${(props) => (props.darkMode ? '#a3a3a3' : '#949494ff')};
    margin-bottom: 20px;
  }

/* ============================== ABOUT ============================== */
  .scrapbook-container {
    background: ${(props) =>
      props.darkMode
        ? 'radial-gradient(circle at center, #1a1a1a, #121212);' // Dark mode gradient
        : 'radial-gradient(circle at center, #e0e0e0, #FFFDF2)'}; // Light mode gradient
    min-height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 1.5rem;
    color: white;
  }

  .scrapbook-page {
    background: ${(props) => (props.darkMode
    ? 'rgba(0, 0, 0, 0.5);'
    : 'rgba(255, 253, 242, 0.5)')};
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: ${(props) => (props.darkMode 
        ? '0 0 25px rgba(200,158,252), 0 0 15px rgba(1,87,79);' 
        : '0 0 25px rgba(255,224,234), 0 0 15px rgba(255,189,0)')};
    max-width: 1800px;
    min-height: 800px;
    margin: 40px auto;
    padding: 70px 80px;
    position: relative;
    z-index: 1;
    border-radius: 10px;
    font-size: 1.5rem;
    color: ${(props) => (props.darkMode 
        ? '#FFFFFF;' 
        : '#1F1B24')};
    width: 100%;
}

  .collage-wrapper {
    display: flex;
    gap: 40px;
    align-items: flex-start;
    justify-content: left;
    margin: 60px auto;
    flex-wrap: wrap;
  }

  .collage-text {
    max-width: 1000px;
    font-size: 38px;
    background: ${(props) => (props.darkMode ? '#0c0c0b' : '#FFFDF2')};
    padding: 50px;
    border-radius: 10px;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
    flex-shrink: 0;
  }

  .photo-collage {
    display: flex;
    flex-direction: column;
    margin: 40px auto;
    gap: 70px;
    position: relative;
  }

  .photo-note-row {
    display: flex;
    justify-content: left;
    align-items: flex-start;
    gap: 40px;
    flex-wrap: wrap;
    margin-top: 40px;
  }

  .photo-section {
    position: relative;
    width: 495px;
    max-width: 90%;
    box-shadow: ${(props) => (props.darkMode 
        ? '0 0 25px #BB86FC;' 
        : '0 0 25px #ff0054')};
    border-radius: 6px;
    background-color: ${(props) => (props.darkMode 
        ? '#caa0ff;' 
        : '#ff0054')};
    padding: 1px 6px;
    color:    ${(props) => (props.darkMode 
        ? '#FFFFFF;' 
        : '#ff501fc7 ')};
  }

  .tape {
    width: 70px;
    height: 30px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    position: absolute;
    pointer-events: none;
    filter: drop-shadow(0 1px 0.3px rgba(0,0,0,0.2));
    z-index: 3;
  }

  .tape.top-left {
    top: -15px;
    left: -20px;
    transform: rotate(-15deg);
  }

  .tape.top-right {
    top: -15px;
    right: -20px;
    transform: rotate(15deg);
  }

  .polaroid-photo {
    position: relative;
    border-image-slice: 1;
    border-radius: 30%;
    width: 440px;
    height: 440px;
    object-fit: cover;
    box-shadow: ${(props) => (props.darkMode 
        ? '0 0 25px #BB86FC;' 
        : '0 0 25px #ff0054')};
    display: block;
    z-index: 1;
  }

  .rotate-left {
    transform: rotate(-5deg);
  }
.rotate-center {
    transform: rotate(0deg);
}
  .rotate-right {
    transform: rotate(5deg);
  }

  .collage-photo {
    position: relative;
    width: 300px;
    padding: 10px;
    border: 8px solid; 
    background-color: transparent; 
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .collage-photo img {
    width: 100%;
    display: block;
    border-radius: 6px;
  }

  .ribbon-wrapper {
    position: absolute;
    top: 970px;
    right: -120px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    pointer-events: none;
    gap: 700px;
  }

  .ribbon-tile {
    color: white;
    font-weight: bold;
    font-family: 'Caveat', cursive;
    width: auto;
    min-width: 120px;
    height: 160px;
    margin: 4px 0;
    border-radius: 5px;
    box-shadow: 2px 3px 5px rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(-5deg);
    border: 2px solid #8b6d3a;
    background-image: ${(props) => (props.darkMode 
        ? 'linear-gradient(145deg, #a78ad6ff, #6f5cb2ff);' 
        : ' linear-gradient(145deg, #d6998aff, #df4646ff)')};
    position: relative;
    padding-left: 30px;
    padding-right: 30px;
    text-align: center;
    font-size: 1.85rem;
  }

  .description {
    font-size: 1.7rem !important;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: ${(props) => (props.darkMode 
        ? '#FFFFFF;' 
        : '#1F1B24')};
  }

/* ============================== TEXT ============================== */
  .gradient-title {
    display: inline-block;
    font-size: 2.65rem;
    font-weight: bold;
    background-image: ${(props) => props.darkMode
        ? 'linear-gradient(135deg, 	#BB86FC , 	#03DAC6);' // Dark mode gradient
        : 'linear-gradient(90deg, #ff0054, #ffbd00)'}; // Light mode gradient
    background-clip: text;
    color: transparent;
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  .gradient-p {
    font-weight: bold;
    background-image: ${(props) => props.darkMode
        ? 'linear-gradient(135deg, 	#BB86FC , 	#03DAC6);' // Dark mode gradient
        : 'linear-gradient(90deg, #ff0054, #ffbd00)'}; // Light mode gradient
    background-clip: text;
    color: transparent;
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  .cursor {
    display: inline-block;
    width: 1ch;
    animation: blink 1s step-start infinite;
    background-image: ${(props) => props.darkMode
        ? 'linear-gradient(135deg, 	#BB86FC , 	#03DAC6);' // Dark mode gradient
        : 'linear-gradient(90deg, #ff0054, #ffbd00)'}; // Light mode gradient
    background-clip: text;
    color: transparent;
  }

  @keyframes blink {
    50% {
        opacity: 0;
    }
  }

/* ============================== CAROUSEL ============================== */
  .dots {
    margin: 10px auto;
  }

  .dot {
    height: 10px;
    width: 10px;
    margin: 0 4px;
    background-color: #999;
    border-radius: 50%;
    display: inline-block;
    cursor: pointer;
  }

  .dot.active {
    background-color: #333;
  }

  .dark-mode .dot {
    background-color: #555;
  }

  .dark-mode .dot.active {
    background-color: #FFFFFF;
  }

/* ============================== PROJECTS ============================== */
  .project-section {
    padding: 10px 20px; 
  }

  .dark-mode .project-section {
    background-color: ${(props) => (props.darkMode ? '#121212' : '#FFFDF2')}; 
    color: ${(props) => (props.darkMode ? '#e0e0e0' : '#1a1a1a')}; 
  }

  .project-header {
    text-align: center;
    margin-bottom: 40px;
  }

  .dark-mode .project-header {
    color: ${(props) => (props.darkMode ? '#F7EFFC' : '#000000')}; 
  }

  .project-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    margin: 10px auto 20px auto;
    width: 100%;
    max-width: 1200px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: ${(props) => (props.darkMode ? '#0D1117' : '#FFFFFF')};
    color: ${(props) => (props.darkMode ? '#D9BFF0' : '#1a0d2e')};
  }

  .alt-background {
    background-color: ${(props) => (props.darkMode ? '#161d27 ' : '#dedede')};
  }

  .project-image-container {
    flex: 1;
    text-align: center;
  }

  .project-image-container img {
    max-width: 501px;
    height: auto;
    display: block;
    margin: 0 auto 10px auto;
  }

  .award-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 300px;
    padding: 80px;
  }

  .award-card {
    display: flex;
    align-items: flex-start;
    max-width: 590px;
    gap: 30px;
  }

  .award-icon {
    font-size: 340px;
    color: #FFD700; /* Gold */
    flex-shrink: 0;
    stroke: ${(props) => (props.darkMode ? '#BB86FC' : '#ff0054')};
    stroke-width: 2.5px;
    fill: #FFD700;
    transition: transform 0.3s ease, filter 0.3s ease;
  }

  .award-icon:hover {
    transform: scale(1.2);
  }

  .award-text h3 {
    margin: 0;
    font-size: 40px;
    color: ${(props) => (props.darkMode ? '#FFFFFF' : '#000000')};
  }

  .award-text p {
    font-size: 20px;
    color: ${(props) => (props.darkMode ? '#e0dbdbff' : '#000000')};
  }

/* ============================== DETAILS ============================== */
  .project-gl-card {
    background-color: ${(props) => (props.darkMode
      ? 'rgba(0, 0, 0, 0.5);'
      : 'rgba(255, 253, 242, 0.5)')};
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 40px;
    max-width: 1600px;
    margin: 50px auto;
    box-shadow: ${(props) => (props.darkMode 
        ? '0 4px 25px rgba(20,15,25);' 
        : '0 4px 25px rgba(0, 0, 0, 0.2)')};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 18px;
  }

  .card-header h1 {
    font-size: 76px;
    color: ${(props) => (props.darkMode ? '#BB86FC' : '#ff0054')};
    margin-bottom: 30px;
    text-align: center;
    margin-top: 5px;
  }

  .card-body {
    display: flex;
    gap: 30px;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .image-placeholder {
    background-color: ${(props) => (props.darkMode
      ? 'rgba(0, 0, 0, 0.2);'
      : 'rgba(255, 253, 242, 0.2)')};
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 50%;
  }

  .image-icon {
    font-size: 100px;
    color: #999;
  }

  .card-details {
    flex: 1;
    min-width: 200px;
    font-size: 26px;
    color: ${(props) => (props.darkMode ? '#FFFFFF' : '#000000')};
  }

  .profession{
    margin: 0;
    color: ${(props) => (props.darkMode ? '#FFFFFF' : '#000000')};
    font-size: 38px;
  }

  .location {
    margin-top: 10px;
    color: ${(props) => (props.darkMode ? '#FFFFFF' : '#000000')};
    font-size: 28px;
  }

  .location-date {
    margin-top: 10px;
    color: ${(props) => (props.darkMode ? '#FFFFFF' : '#000000')};
    font-size: 28px;
  }

  .tech-stack {
    margin-top: -10px;
  }

  .tags2 {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: left;
  }

  .tag2 {
    background-color: #e0dff5;
    color: #3b2f63;
    padding: 10px 18px;
    border-radius: 20px;
    font-size: 21px;
    font-weight: 500;
  }

  .instructions {
    margin: 20px 0;
    padding-left: 20px;
    color: ${(props) => (props.darkMode ? '#FFFFFF' : '#000000')};
    font-size: 24px;
    list-style-type:square;
  }

/* ============================== CERTIFICATION ============================== */
  .certification-section {
    background-color: ${(props) => (props.darkMode ? '#121212' : '#FFFDF2')};
    padding: 60px 20px;
    color: ${(props) => (props.darkMode ? '#FFFFFF' : '#000000')};
    text-align: center;
  }
    
  .timeline {
    position: relative;
    border-left: 8px dashed #999; 
    max-width: 1800px;
    margin: 0 auto auto 500px;
    padding-left: 200px; 
  }

  .timeline-image {
    width: 250px;
    height: 290px;
    border-radius: 10px;
    margin-top: 30px;
    object-fit: cover;
  }

  .timeline-point {
    position: absolute;
    left: -230px;
    top: 6px;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background-color: #999;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: white;
    font-size: 3rem;
    z-index: 3;
  }

  .timeline-item {
    position: relative;
    margin-bottom: 80px;
    padding-left: 80px;
  }

  .timeline-item-blue .timeline-point {
    background-color: #007BFF;
  }

  .timeline-item-green .timeline-point {
    background-color: #28A745;
  }

  .timeline-year {
    position: absolute;
    left: 100px;
    top: 4px;
    font-size: 2.5rem;
    font-weight: bold;
    color: ${(props) => (props.darkMode ? '#ecf0f1' : '#1a0d2e')};
  }

  .timeline-icon {
    font-size: 2.95rem;
    color: ${(props) => (props.darkMode ? '#BB86FC' : '#ff0054')};
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .timeline-gpa{
    font-size: 1.75rem;
    font-weight: normal;
    color: ${(props) => (props.darkMode ? '#ecf0f1' : '#1a0d2e')};
    margin: 0;
  }

  .timeline-subtitle {
    font-size: 2.45rem;
    font-weight: normal;
    color: ${(props) => (props.darkMode ? '#4cb5d9' : '#d67b13ff')};
    margin: 0;
  }

  .emphasis {
    font-style: italic;
    font-weight: Bold;
    color: ${(props) => (props.darkMode ? '#c191fcff' : '#ff0054')};
  }

  .text-box {
    background-color: ${(props) => (props.darkMode
      ? 'rgba(0, 0, 0, 1);'
      : 'rgba(255, 255, 255, 1)')};
    box-shadow: ${(props) => (props.darkMode
      ? '0 4px 25px rgba(20,15,25);' 
      : '0 4px 25px rgba(0, 0, 0, 0.2)')};
    color: ${(props) => (props.darkMode ? '#ecf0f1' : '#1a0d2e')};
    padding: 20px;
    border-radius: 10px;
    max-width: 1000px;
    font-size: 1.75rem;
    margin: 0;
  }

  .timeline-location {
    color: ${(props) => (props.darkMode ? '#ecf0f1' : '#1a0d2e')};
    text-decoration: none;
    margin-top: 50;
    font-weight: 300;
  }

/* ============================== FOOTER ============================== */
  .site-footer {
    background-color: ${(props) => (props.darkMode ? '#09090b' : '#FFFAE5')}; 
    color: ${(props) => (props.darkMode ? '#ecf0f1' : '#2c3e50')}; 
    text-align: center;
    padding: 15px 0 15px 0;
    font-size: 18px;
    border-top: 1px solid #333;
  }

  .site-footer p {
    margin: 0;
    padding: 0;
  }

  .linkedin-icon {
    color:  ${(props) => (props.darkMode ? '#B57EDC' : '#FF0054')};
    font-size: 28px;
    transition: transform 0.3s;
  }

  .linkedin-icon:hover {
    transform: scale(1.1);
    color: ${(props) => (props.darkMode ? '#0077b5' : '#FF6228')};
  }

  .email-icon {
    font-size: 28px;
    color:  ${(props) => (props.darkMode ? '#B57EDC' : '#FF0054')};
    transition: transform 0.3s ease;
  }

  .email-icon:hover {
    transform: scale(1.1);
    color: ${(props) => (props.darkMode ? '#0077b5' : '#FF6228')};
  }

/* ============================== LOGO ============================== */
  .logo img {
    height: 50px;
    width: auto;
    transition: transform 0.3s ease;
  }

  .logo img:hover {
    transform: scale(1.1); 
  }

/* ============================== NAVIGATION LINKS ============================== */
  .navbar {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1000;
    background: white;
  }

  nav.navbar {
    background-color: ${(props) => (props.darkMode ? '#09090b' : '#FFFAE5')}; 
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
    position: sticky;
  }

  ul.nav-links {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul.nav-links li {
    margin: 0 15px;
  }

  ul.nav-links a {
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
    color: ${(props) => (props.darkMode ? '#ecf0f1' : '#2c3e50')};
    transition: color 0.3s ease;
  }

  ul.nav-links a:hover {
    color: ${(props) => (props.darkMode ? '#4cb5d9' : '#FF6228')};
  }

  ul.nav-links a.active {
    border-bottom: 2px solid ${(props) => (props.darkMode ? '#86BBFC' : '#FF6228')};
    color: ${(props) => (props.darkMode ? '#4cb5d9' : '#FF6228')};
  }

/* ============================== THEME TOGGLE BUTTON ============================== */
  .theme-button {
    border: none;
    cursor: pointer;
    font-size: 24px; 
    padding: 0; 
    margin-left: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center; 
    justify-content: center;
    transition: background-color 0.3s ease, color 0.3s ease;
    height: 100%;
  }

  .theme-button.dark {
    background-color: #1F1B24;
    color: #4cb5d9;
  }

  .theme-button.light {
    background-color: #FFFFFF;
    color: #FF6228;
  }

  .theme-button:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  body.dark-mode .theme-button:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .theme-button:focus {
    outline: 2px solid ${(props) => (props.darkMode ? '#86BBFC' : '#8e44ad')};
  }

/* ============================== SELECTED WORK SECTION ============================== */
  .selected-work-section {
    background-color: ${(props) => (props.darkMode ? '#121212' : '#FFFDF2')};
    padding: 0.5rem 0;
    color: ${(props) => (props.darkMode ? '#FFFFFF' : '#000000')};
    }

  .container {
    max-width: 2400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .slide-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .slide-wrapper img {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-position: center;
    display: block;
  }

  .carousel .legend {
    background-color: ${(props) => (props.darkMode 
      ? 'rgba(187,134,252, 0.7)!important;'
      : 'rgba(255,0,84, 0.7)!important;')};
    color:     ${(props) => (props.darkMode 
      ? '#000000 !important;'
      : '#FFFFFF !important;')};
    font-weight: bold;
    transition: background-color 0.3s ease;
  }

  .carousel .legend:hover {
    background-color:    ${(props) => (props.darkMode 
      ? 'rgba(187,134,252,    1)!important;' 
      : 'rgba(255,0,84,    1)!important;')}; 
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }

  .selected-work-section h2 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    font-weight: bold;
  }

  .work-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr)); 
    gap: 1rem;
  }

  .work-item {
    background-color: ${(props) => (props.darkMode
      ? 'rgba(0, 0, 0, 0.9);'
      : 'rgba(255, 255, 255, 0.9)')};
    border-radius: 10px;
    padding: 1.5rem;
    transition: transform 0.3s ease;
    box-shadow: ${(props) => (props.darkMode
      ? '0 4px 25px rgba(20,15,25);' 
      : '0 4px 25px rgba(0, 0, 0, 0.2)')};
  }

  .work-item:hover {
    transform: translateY(-5px);
  }

  .work-info h2 {
    font-size: 2.50rem !important;
    font-weight: normal;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.darkMode ? '#BB86FC' : '#ff0054')};
  }

  .description {
    font-size: 0.95rem;
    color: ${(props) => (props.darkMode ? '#eee' : '#333')};
    margin-bottom: 1rem;
    text-indent: 2em;
  }

  .tag {
    display: inline-block;
    background-color: #e0dff5;
    color: #3b2f63;
    padding: 2px 6px;
    border-radius: 12px;
    margin: 3px 5px 0 0;
    font-size: 0.9rem;
    font-weight: 500;
  }

/* ============================== BUTTON ============================== */
  .button-container {
    display: flex;
    justify-content: center; /* Center horizontally */
    margin-top: 1rem;
  }

  .view-button {
    background-color: ${(props) => (props.darkMode ? '#4cb5d9' : '#FF6228')}; 
    color: ${(props) => (props.darkMode ? '#1A1A2E' : '#FFFDF2')};
    margin: 16px auto 0 auto;
    border: none;
    border-radius: 6px;
    padding: 6px 14px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease;
    text-align: center;
    display: block;
  }

  .view-button:hover {
     background-color: ${(props) => (props.darkMode ? '#B57EDC' : '#FF0054')};
    color: ${(props) => (props.darkMode ? '#1A1A2E' : '#FFFDF2')};
  }

  .button-wrapper {
    display: flex;
    justify-content: flex-end;
    padding: 5rem 0 0 0;;
  }

  .btn.right {
    margin-left: auto;
    background-color: transparent;
    color: ${(props) => (props.darkMode ? '#B57EDC' : '#FF0054')};
    border: ${(props) => (props.darkMode 
      ? '2px solid #B57EDC'
      : '2px solid #FF0054')};
    border-radius: 6px;
    padding: 0.5em 1em;
    font-size: 1.25rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  .btn.right:hover {
    background-color:
    ${(props) => (props.darkMode ? '#4cb5d9' : '#FF6228')}; 
    color: ${(props) => (props.darkMode ? '#1A1A2E' : '#FFFDF2')}; 
  }

  .learn-more-btn {
    background-color: ${(props) => (props.darkMode ? '#4cb5d9' : '#FF6228')};
    color: ${(props) => (props.darkMode ? '#1A1A2E' : '#FFFDF2')};
    border: none;
    padding: 8px 10px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    font-size: 24px;
    margin-top: 1px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .learn-more-btn:hover {
    background-color: ${(props) => (props.darkMode ? '#B57EDC' : '#FF0054')};
    color: ${(props) => (props.darkMode ? '#1A1A2E' : '#FFFDF2')};
  }

/* ============================== HAMBURGER BUTTON (MOBILE) ============================== */
  .hamburger {
    display: none;
    font-size: 28px;
    cursor: pointer;
    color: ${(props) => (props.darkMode ? '#ecf0f1' : '#2c3e50')};
    border: none;
    background-color: ${(props) => (props.darkMode ? '#09090b' : '#FFFAE5')}; 
  }

/* ============================== RESPONSIVE MEDIA ============================== */
 
  @media (max-width: 1024px) {
    .card-body {
      flex-direction: column;
      align-items: center;
    }
    .image-placeholder {
      flex: 0 0 100%;
    }
    .card-details {
      text-align: center;
    }
    .tag2 {
      font-size: 24px;
    }
  }

  @media (max-width: 1240px) {
    .timeline {
      margin: 0;
      padding-left: 100px;
      border-left: 8px dashed #999;
    }

    .timeline-item {
      padding-left: 80px;
    }

    .timeline-point {
      left: -130px;
    }

    .timeline-year {
      left: 50px;
    }

    .text-box {
        margin-left: 0;
        margin-right: auto;
    }
  }

  @media (min-width: 1024px) {
    .work-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }
    .work-item {
      padding: 1.5rem;
      border-radius: 12px;
    }

    .work-item.full-row {
      grid-column: 1 / -1;
    }
  }

  @media screen and (max-width: 768px) {
    .hamburger {
      display: block; 
    }

    ul.nav-links {
      position: absolute;
      top: 70px;
      right: 0;
      width: 100%;
      flex-direction: column;
      align-items: center;
      background-color: ${(props) => (props.darkMode ? '#09090b' : '#FFFAE5')}; 
      display: none;
      padding: 10px 0;
      z-index: 999;
    }

    ul.nav-links.open {
      display: flex; 
    }

    ul.nav-links li {
      margin: 15px 0; 
    }

    .intro h1 {
      font-size: 2.5rem;
    }

    .intro h2 {
      font-size: 1.2rem;
    }

    .intro .tagline {
      font-size: 1rem;
    }

    .gradient-title {
      font-size: 2.0rem;
    }

    .selected-work-section {
      padding: 2.5rem 0;
    }

    .selected-work-section h2 {
      font-size: 1.5rem;
      text-align: center;
    }

    .work-grid {
      gap: 1rem;
    }

    .work-info h3 {
      font-size: 1rem;
    }

    .description {
      font-size: 0.9rem;
    }

    .view-button {
      font-size: 0.85rem;
      padding: 0.4rem 0.8rem;
    }

    .card-header h2 {
      font-size: 48px;
    }

    .tag2 {
      font-size: 12px;
    }

    .card-details {
      font-size: 20px;
    }

    .instructions {
      font-size: 20px;
    }

    .timeline {
      margin: 0 auto;
      padding-left: 0;
      border-left: none;
      text-align: center;
    }

    .timeline-item {
      padding-left: 0;
      margin-bottom: 60px;
    }

    .timeline-point {
      position: relative;
      left: 0;
      width: 200px;
      height: 200px;
      margin: 0 auto 20px auto;
    }

    .timeline-year {
      position: relative;
      left: 0;
      top: 0;
      display: block;
      margin: 10px 0;
    }

    .timeline-image {
      width: 90%;
      height: auto;
    }

    .text-box {
      margin: 20px auto;
      padding: 15px;
      font-size: 1.6rem;
    }

    .content {
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 2rem;
    }

    .description {
      font-size: clamp(2rem, 6vw, 3rem);
      line-height: 1.6;
    }

    .text-section {
      flex: unset;
    }

    .award-container {
      flex-direction: column;
      align-items: center;
    }

    .award-card {
      text-align: center;
      flex-direction: column;
      align-items: center;
    }

    .award-icon {
      font-size: 120px;
    }

    .scrapbook-container {
      padding: 30px 20px;
    }

    .scrapbook-page {
      padding: 30px 20px;
      font-size: 1.1rem;
    }

    .collage-wrapper {
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }

    .collage-text {
      font-size: 1.2rem;
      padding: 30px;
    }

    .photo-note-row {
      justify-content: center;
      gap: 20px;
    }

    .photo-section {
      width: 100%;
      padding: 8px;
    }

    .polaroid-photo {
      width: 280px;
      height: 280px;
      border-width: 6px;
      border-radius: 20%;
    }

    .ribbon-wrapper {
      right: -60px;
      top: 850px;
      bottom: 2px;
      gap: 1050px;
    }

    .ribbon-tile {
      font-size: 1.4rem;
      min-width: 90px;
      height: 90px;
      padding: 10px 20px;
      transform: rotate(-3deg);
    }
  }

`;
