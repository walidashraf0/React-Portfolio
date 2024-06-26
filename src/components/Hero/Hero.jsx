import Lottie from "lottie-react";
import heroAnimation from "../../animation/hero.json";
import { useRef } from "react";
import { motion } from "framer-motion";
import './Hero.css';

export default function Hero() {
  const lottiRef = useRef();
  return (
    <section className='hero flex'>
      <div className="left-sec">
        <div className="parent">
          <motion.img
          initial={{transform: "scale(0)"}}
          animate={{transform: "scale(1.1)"}}
          transition={{damping: 6, type: "spring", stiffness: 100}}
          className='avatar' src='/images/me-modified.png' alt="" />
          <i className="fa-solid fa-certificate"></i>
        </div>
        <div className="info">

          <motion.h1
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 2}}
          className='title'>Frontend Developer, Web Designer.</motion.h1>

          <p className='subtitle'>I am Walid Ashraf. I am 21 years old. I was born on 11/20/2002. I study at
            the Faculty of Computers and Information at Zagazig University. I work as a
            Frontend Developer. I have many personal skills such as teamwork, time
            management, I can work under pressure, and I speak intermediate English ..,
            I have a year of experience.
            I am a qualified Frontend developer with one year of experience in frontend
            and website design, Strong creative and Analytical skills,
            Team player with an eye of Details.</p>
        </div>
        <div className="icons d-flex gap-4">
          <a href="https://x.com/walidashraf050?t=zq0Uv48a_edYqai9coF-IQ&s=09"><i className="twitter fa-brands fa-x-twitter"></i></a>
          <a href="https://www.instagram.com/walid_ashraf0?igsh=MXhtdG55bmN6Mno3bw=="><i className="instagram fa-brands fa-instagram"></i></a>
          <a href="https://github.com/walidashraf0"><i className="github fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/walid-ashraf1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="linkedin fa-brands fa-linkedin"></i></a>
        </div>
      </div>
      
      <div className="right-sec animation">
      <Lottie lottieRef={lottiRef} className="heroanimation" onLoadedImages={()=> {
        // @ts-ignore
        lottiRef.current.setSpeed(0.7);
      }} animationData={heroAnimation} />
      </div>
    </section>
  )
}
