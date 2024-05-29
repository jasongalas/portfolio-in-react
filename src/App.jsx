import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav'
import React, { useState } from 'react';
import Page from './pages/HomePage';

export default function App() {

  const [pages] = useState ([
    {
      name: "about",
    },
    {
      name: "contact",
    },
    {
      name: "portfolio",
    },
    {
      name: "resume",
    },
  ])

const [currentPage, setCurrentPage] = useState(pages[0])

  return (
    <div>
      <Header>
        <Nav pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </Header>
          <main>
            <Page currentPage={currentPage}></Page>
          </main>
      <Footer/>
    </div>
    );
}