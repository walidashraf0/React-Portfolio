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
      <div className="right-section borders">
        <div className="card">
          <img src="" alt="" />
        </div>
      </div>
    </main>
  );
}
