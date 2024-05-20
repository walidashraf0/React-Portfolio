import { useState } from "react";
import { myProjects } from "./MyProjectsData";
import "./Main.css";



export default function Main() {

  const [currentActive, setCurrentActive] = useState("all")
  

  const [array, setArray] = useState(myProjects)

  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);
    

    const newArray = myProjects.filter((item)=> {
      return item.category === buttonCategory;
    });

    setArray(newArray);
  }

  
  return (
    <main className="d-flex">
      <div className="left-section d-flex">
      <button onClick={()=> {
        setCurrentActive("all")
        setArray(myProjects)
      }} className={currentActive === "all"? "btn active" : 'btn'}>All Projects</button>

      <button onClick={()=> {
        handleClick("css")
      }} className={currentActive === "css"? "btn active" : 'btn'}>HTML & CSS</button>

        <button onClick={()=> {
          handleClick("java")
          }} className={currentActive === "java"? "btn active" : 'btn'}>JavaScript</button>

        <button onClick={()=> {
          handleClick("react")
        }} className={currentActive === "react"? "btn active" : 'btn'}>React & MUI</button>

        <button onClick={()=> {
          handleClick("node")
        }} className={currentActive === "node"? "btn active" : 'btn'}>Node % Express</button>
      </div>



      <div className="right-section d-flex">
        {array.map((card, index) => {
          return (<div key={index} className="card">
          <img src={card.imgPath} alt="" />
          <div className="info">
            <h1 className="title">{card.projectTitle}</h1>
            <p className="subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti cum ullam facilis perferendis perspiciatis quas, quia doloremque dicta consequuntur aspernatur.</p>
            <div className="details d-flex justify-content-between">
              <div className="icons">
                <a className="link" href="">
                    <i className="fa-solid fa-link"></i>
                  </a>
                  <a href="https://github.com/walidashraf0">
                    <i className="github fa-brands fa-github"></i>
                  </a>
              </div>
              <div className="more d-flex">
                <span>More</span>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
        )})}
      </div>
    </main>
  );
}
