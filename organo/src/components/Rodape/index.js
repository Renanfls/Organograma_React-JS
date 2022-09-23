import './Rodape.scss'

import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Rodape = () => {
    return (
    <footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="http://instagram.com/discover.branding/" target="_blank" rel="noreferrer">
                        <FaInstagram className='icons' />
                    </a>
                </li>
                <li>
                    <a href="http://behance.net/renanfabricio" target="_blank" rel="noreferrer">
                        <FaBehance className='icons' />
                    </a>
                </li>
                <li>
                    <a href="http://linkedin.com/in/renan-fabricio/" target="_blank" rel="noreferrer">
                        <FaLinkedin className='icons' />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="" id="logo" />
        </section>
        <section>
            <p>
                Desenvolvido por Renanfls.
            </p>
        </section>
    </footer>)
}

export default Rodape