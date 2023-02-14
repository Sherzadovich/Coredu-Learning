import logo from "../../Img/logo.png";
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
                    pages.map(page => {
                        return (
                            <li>
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