import React from 'react';
import { RxLinkedinLogo } from 'react-icons/rx';
import { MdEmail } from 'react-icons/md';

export default function Footer () {
  return (
    <footer className='site-footer'>
      <p>
        <a
          href='https://www.linkedin.com/in/gabriela-gamez-cs'
          target='_blank'
          rel='noopener noreferrer'
          className='linkedin-icon' > 
          <RxLinkedinLogo/>
        </a>
        <a 
          href='mailto:gabrielagamez001@gmail.com' 
          target='_blank' 
          rel='noopener noreferrer'
          className='email-icon' >
          <MdEmail/>
        </a>
      </p>
      <p>Copyright © {new Date().getFullYear()} Gabriela Gamez. All rights reserved. </p>
    </footer>
  );
};
