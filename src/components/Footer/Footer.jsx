import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content d-flex">
        <ul className="footer-links">
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/speakings">Speakings</a>
          </li>
          <li>
            <a href="/users">Users</a>
          </li>
        </ul>
        <p>&copy; 2024 WEGO. All rights reserved.</p>
      </div>
    </footer>
  );
}
