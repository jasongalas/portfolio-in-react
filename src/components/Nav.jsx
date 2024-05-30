import React, { useEffect } from "react";

export default function Nav(props){
    const {
        pages = [],
        setCurrentPage,
        currentPage
    } = props;

useEffect(() => {
    document.title = currentPage.name
}, [currentPage])

    return (<nav className="nav-bar">
            <ul className="nav-list">
                {pages.map((page) => (
                    <li className={`nav-item ${currentPage.name === page.name ? 'active' : ''}`} 
                        key={page.name}>
                        <span className="nav-link" onClick={() => setCurrentPage(page)}>{page.name}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}