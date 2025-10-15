import styles from "./section1.module.css";
import Avatar from "../../assets/avatar.svg"
import IconMySQL from "../../assets/mysql.svg"
import IconNode from "../../assets/nodejs.svg"
import IconReact from "../../assets/react.svg"
import IconPHP from "../../assets/php.svg"

import Welcome from "../../components/welcome";


function Section1 () {
    return (
        <div className={styles.header}>
            <div className={styles.welcome}>
                <Welcome emoji='🍻' text='Bem Vindo :)' />
            </div>

            <p className={styles.name}>Diogo<br />Mello</p>

            <p className={styles.profission}>Fullstack Developer · Polo Tecnológico Cuesta</p>

            <div className={styles.networks}>
                <a
                    href="https://github.com/Diogo-Mello"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub">
                    <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M216,104v8a56.06,56.06,0,0,1-48.44,55.47A39.8,39.8,0,0,1,176,192v40a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V216H72a40,40,0,0,1-40-40A24,24,0,0,0,8,152a8,8,0,0,1,0-16,40,40,0,0,1,40,40,24,24,0,0,0,24,24H96v-8a39.8,39.8,0,0,1,8.44-24.53A56.06,56.06,0,0,1,56,112v-8a58.14,58.14,0,0,1,7.69-28.32A59.78,59.78,0,0,1,69.07,28,8,8,0,0,1,76,24a59.75,59.75,0,0,1,48,24h24a59.75,59.75,0,0,1,48-24,8,8,0,0,1,6.93,4,59.74,59.74,0,0,1,5.37,47.68A58,58,0,0,1,216,104Z"></path></svg>
                </a>
                <a
                    href="https://www.linkedin.com/in/diogomellodacrus/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn">
                    <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"></path></svg>
                </a>
            </div>

            <div className={styles.avatarWrapper}>
                <div className={styles.avatar}>
                    <img className={styles.avatarSVG} src={Avatar} alt="Diogo Avatar" />
                </div>

                <img src={IconMySQL} className={`${styles.techIcon} ${styles.iconMySQL}`} alt="MySQL" />
                <img src={IconNode} className={`${styles.techIcon} ${styles.iconNode}`} alt="Node.JS" />
                <img src={IconPHP} className={`${styles.techIcon} ${styles.iconPHP}`} alt="PHP" />
                <img src={IconReact} className={`${styles.techIcon} ${styles.iconReact}`} alt="React" />
            </div>

            <div className={styles.cv}>
                <p className={styles.textCV }>Baixar CV</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#7a4ae2bb" viewBox="0 0 256 256"><path d="M222,144v64a6,6,0,0,1-6,6H40a6,6,0,0,1-6-6V144a6,6,0,0,1,12,0v58H210V144a6,6,0,0,1,12,0Zm-98.24,4.24a6,6,0,0,0,8.48,0l40-40a6,6,0,0,0-8.48-8.48L134,129.51V32a6,6,0,0,0-12,0v97.51L92.24,99.76a6,6,0,0,0-8.48,8.48Z"></path></svg>
            </div>

        </div>


    )
}

export default Section1;