import logo from "../../Img/Слой 1.svg";
import "../Header/Header.css";

function Header() {
    const pages = ["Home", "Prices", "Contact", "About Us"];
    return(
        <header>
            <a href="#logo">
                <img src={logo} alt="" />
            </a>

            <ul>
                {
                    pages.map((page, i) => {
                        return (
                            <li key={i}>
                                <a hraf="#link">{page}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </header>
    )
}

export default Header;