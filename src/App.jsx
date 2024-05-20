import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";

function App() {

  useEffect(()=> {
    window.addEventListener("scroll", ()=> {
      if (window.scrollY > 300) {
        setBtnScroll(true);
      }
      else{
        setBtnScroll(false);
      }
    })
  }, [])

  const [btnScroll, setBtnScroll] = useState(false)

  return (
    <>
      <div id="up" className="containers">
        <Header />
        {/* <div className="divider" /> */}
        <Hero />
        <div className="divider" />
        <Main />
        {/* <div className="divider" /> */}
        <Contact />
        {/* <div className="divider" /> */}
        <Footer />

          <a style={{opacity: btnScroll? 1 : 0, transition: "1.5s"}}  href="#header">
          <button className="scroll">
            <i className="arrow fa-solid fa-arrow-up"></i>
          </button>
        </a>
      </div>
    </>
  );
}

export default App;
