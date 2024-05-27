export default function Footer() {

  const URLS = [
    {
      name: "Github",
      link:'https://github.com/jasongalas/'
    },
    {
      name: "LinkedIn",
      link:'https://www.linkedin.com/in/jason-alas-70434036/'
    },
  ]

    return( 
        <footer className="main-footer-menu">
          <section classname="links">
          <span style={{paddingRight: "20px"}}>© Paws Productions</span>
            {URLS.map(links =>{
              return <a href={links.link} key={links.name}>{links.name}</a>
            })}
          </section>
        </footer>
    );
  }
  