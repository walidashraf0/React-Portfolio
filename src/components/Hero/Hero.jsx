import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className='hero flex'>
      <div className="left">
        <div className="parent">
          <img className='avatar' src='/images/me-modified.png' alt="" />
          <i className="fa-solid fa-certificate"></i>
        </div>
        <div className="info">
          <h1 className='title'>Frontend Developer, Web Designer</h1>
          <p className='subtitle'>I&apos;m Walid Ashraf, a seasoned frontend developer with a passion for creating visually stunning and highly functional websites</p>
        </div>
        <div className="icons d-flex gap-4">
          <a href="https://x.com/walidashraf050?t=zq0Uv48a_edYqai9coF-IQ&s=09"><i className="twitter fa-brands fa-x-twitter"></i></a>
          <a href="https://www.instagram.com/walid_ashraf0?igsh=MXhtdG55bmN6Mno3bw=="><i className="instagram fa-brands fa-instagram"></i></a>
          <a href="https://github.com/walidashraf0"><i className="github fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/walid-ashraf1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="linkedin fa-brands fa-linkedin"></i></a>
        </div>
      </div>


      <div className="right animation borders">
        Animation
      </div>
    </section>
  )
}
