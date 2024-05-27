import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav'
import { useState } from 'react';

function App() {

  const [pages] = useState ([
    {
      name: "about",
    },
    {
      name: "porfolio",
    },
    {
      name: "contact",
    },
    {
      name: "resume",
    },
  ])

const [currentPage, setCurrentPage] = useState(pages[0])

  return (
    <div>
      <Header/>
        <Nav pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}></Nav>
        <main>

        </main>
      <Footer/>
    </div>
  );
}

export default App;
