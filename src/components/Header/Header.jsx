import { useEffect, useState } from 'react';
import './Header.css';

export default function Header() {
  
  
  const [showModel, setShowModel] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark")

  useEffect(()=> {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
    else if (theme === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme])



  return (
    <header id="header" className='flex'>
      <button className='menu' onClick={()=> setShowModel(true)}>
      <i className="menu-bars fa-solid fa-bars"></i>
      </button>

      <div />
      <nav>
        <ul className='flex'>
          <li><a href="">About</a></li>
          <li><a href="">Articles</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Speaking</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>

      <button onClick={()=> {
        // Send theme to local storage 
        localStorage.setItem("currentMode", theme === "dark"? "light" : "dark")
        // Get theme from local storage and set this
        setTheme(localStorage.getItem("currentMode"));
      }} className='moon'>
      {theme === "dark"? <i className="moon-bar fa-regular fa-moon"></i> : <i className="sun-bar fa-solid fa-sun"></i>}
      </button>


      {showModel && (
        <div className="fixed">
        <ul className="model">
          <li><button className='btn close' onClick={()=> setShowModel(false)}>
          <i className="x-bar fa fa-solid fa-xmark"></i>
            </button></li>
          <li><a href="">About</a></li>
          <li><a href="">Articles</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Speaking</a></li>
          <li><a href="">Users</a></li>
        </ul>
      </div>
      )}
    </header>
  )
}
