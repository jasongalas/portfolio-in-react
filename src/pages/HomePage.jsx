import React from 'react'
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

export default function Page ({ currentPage }){
    const renderPage = () => {
        if(currentPage.name === "about") {
            return <About />
        } else if (currentPage.name === "contact") {
            return <Contact />
        } else if (currentPage.name === "portfolio") {
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