import { useEffect } from "react";

export default function Nav(props){
    const {
        pages = [],
        setCurrentPage,
        currentPage
    } = props;

useEffect(() => {
    document.title = currentPage.name
}, [currentPage])

    return <nav>
        {pages.map((page) =>{
            return <li classname={currentPage.name===page.name && "active"} key={page.name}>
                <span onClick={() => setCurrentPage(page)}>{page.name}</span></li>
        })}
    </nav>
}