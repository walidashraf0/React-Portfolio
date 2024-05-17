import "./Main.css";

export default function Main() {
  return (
    <main className="d-flex">
      <div className="left-section d-flex">
        <button className="btn active">All Projects</button>
        <button className="btn">HTML & CSS</button>
        <button className="btn">JavaScript</button>
        <button className="btn">React & MUI</button>
        <button className="btn">Node % Express</button>
      </div>
      <div className="right-section d-flex">
        {["aa", "bb", "cc", "dd", "ee", "ff"].map((card, index) => {
          return (<div key={index} className="card">
          <img src="/images/1.jpg" alt="" />
          <div className="info">
            <h1 className="title">Landing Page 2</h1>
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
