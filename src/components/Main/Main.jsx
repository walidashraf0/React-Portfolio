import { useState } from "react";
import "./Main.css";


export default function Main() {

  const [currentActive, setCurrentActive] = useState("all")
  const myProjects = [
    {projectTitle: "CSS project", category: "css", imgPath: "/images/1.jpg"},
    {projectTitle: "CSS project", category: "css", imgPath: "/images/2.jpg"},
    {projectTitle: "Java project", category: "java", imgPath: "/images/3.jpg"},
    {projectTitle: "Java project", category: "java", imgPath: "/images/4.jpg"},
    {projectTitle: "React project", category: "react", imgPath: "/images/5.jpg"},
    {projectTitle: "React project", category: "react", imgPath: "/images/6.jpg"},
  ]

  const [array, setArray] = useState(myProjects)

  
  return (
    <main className="d-flex">
      <div className="left-section d-flex">
      <button onClick={()=> {
          setCurrentActive("all");
          setArray(myProjects)
        }} className={currentActive === "all"? "btn active" : 'btn'}>All Projects</button>

        <button onClick={()=> {
          setCurrentActive("css");

          const newArray = myProjects.filter((item)=> {
            return item.category === "css";
          });

          setArray(newArray);
        }} className={currentActive === "css"? "btn active" : 'btn'}>HTML & CSS</button>

        <button onClick={()=> {
          setCurrentActive("java");

          const newArray = myProjects.filter((item)=> {
            return item.category === "java";
          });

          setArray(newArray);
        }} className={currentActive === "java"? "btn active" : 'btn'}>JavaScript</button>

        <button onClick={()=> {
          setCurrentActive("react");

          const newArray = myProjects.filter((item)=> {
            return item.category === "react";
          });

          setArray(newArray);
        }} className={currentActive === "react"? "btn active" : 'btn'}>React & MUI</button>

        <button onClick={()=> {
          setCurrentActive("node");

          const newArray = myProjects.filter((item)=> {
            return item.category === "node";
          });

          setArray(newArray);
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
