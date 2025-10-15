import styles from "./cardPeriodo.module.css";

interface CardPeriodoProps {
    icon: string;
    smallText: string;
    bigText: string;
}

function CardPeriodo({
    icon,
    smallText,
    bigText,
}: CardPeriodoProps) {
    return (
        <div className={styles.card}>
            <div className={styles.icon}><img  className={styles.iconSVG} src={icon} alt="icone" /></div>
            <div className={styles.text}>
                <p className={styles.smallText}>{smallText}<br/><span className={styles.bigText}>{bigText}</span></p>
            </div>
        </div>
    )
}

export default CardPeriodo;