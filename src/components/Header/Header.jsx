import { useState } from 'react';
import './Header.css';

export default function Header() {
  const [showModel, setShowModel] = useState(false);
  return (
    <header className='flex'>
      <button className='menu btn' onClick={()=> setShowModel(true)}>
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
      <button className='moon btn'>
      <i className="moon-bar fa-regular fa-moon"></i>
      </button>


      {showModel && (
        <div className="fixed">
        <ul className="model">
          <li><button className='close btn' onClick={()=> setShowModel(false)}>
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
