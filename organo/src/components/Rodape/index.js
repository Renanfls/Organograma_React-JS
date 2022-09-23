import styles from './_Rodape.scss'

import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Rodape = () => {
    return (
    <footer className={styles.footer}>
        <section>
            <ul>
                <li>
                    <a href="http://instagram.com/discover.branding/" target="_blank" rel="noreferrer">
                        <FaInstagram className={styles.icons} />
                    </a>
                </li>
                <li>
                    <a href="http://behance.net/renanfabricio" target="_blank" rel="noreferrer">
                        <FaBehance className={styles.icons} />
                    </a>
                </li>
                <li>
                    <a href="http://linkedin.com/in/renan-fabricio/" target="_blank" rel="noreferrer">
                        <FaLinkedin className={styles.icons} />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="" id={styles.logo} />
        </section>
        <section>
            <p>
                Desenvolvido por Renanfls.
            </p>
        </section>
    </footer>)
}

export default Rodape