import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
    <div className="containers">
      <Header />
      {/* <div className="divider" /> */}
      <Hero />
      <div className="divider" />
      <Main />
      {/* <div className="divider" /> */}
      <Contact />
      {/* <div className="divider" /> */}
      <Footer />
    </div>
    </>
  )
}

export default App
