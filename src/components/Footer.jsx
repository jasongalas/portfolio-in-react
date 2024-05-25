function theURLS() {
  const githubURL ='https://github.com/jasongalas/';
}



export default function Footer() {

    return (
      <nav className="main-footer-menu">
        <footer>
          <div>
            Github URL: {githubURL}
          </div>
          <div>
            <a href="LinkedIn">LinkedIn</a>
          </div>
          <div>
            <a href="Instagram">Instagram</a>
          </div>
        </footer>
      </nav>
    );
  }
  