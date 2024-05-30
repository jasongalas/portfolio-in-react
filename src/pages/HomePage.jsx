import React from 'react'
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from './Resume';

export default function Page ({ currentPage }){
    const renderPage = () => {
        if(currentPage.name === "About Me") {
            return <About />
        } else if (currentPage.name === "Contact Me") {
            return <Contact />
        } else if (currentPage.name === "My Portfolio") {
            return <Portfolio />
        } else {
            return <Resume />
        }
    }

    return (
        <section>
            {renderPage()}
        </section>
    );
}