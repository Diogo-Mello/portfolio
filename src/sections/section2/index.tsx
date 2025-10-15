import CardPeriodo from "../../components/cardPeriodo";

import IconCap from "../../assets/graduation-cap-light.svg";
import IconLight from "../../assets/lightbulb-light.svg";
import IconCode from "../../assets/code-light.svg";
import styles from "./section2.module.css";

function Section2 () {
    return (
        <div className={styles.cardPeriodo}>
            <CardPeriodo 
                icon={IconCap}
                smallText="4 anos como"
                bigText="Programador"
            >
            </CardPeriodo>

            <CardPeriodo 
                icon={IconLight}
                smallText="4 anos como"
                bigText="Programador"
            >
            </CardPeriodo>

            <CardPeriodo 
                icon={IconCode}
                smallText="4 anos como"
                bigText="Programador"
            >
            </CardPeriodo>
        </div>
    )
}

export default Section2;