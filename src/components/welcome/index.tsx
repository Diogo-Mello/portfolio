import styles from "./welcome.module.css"

interface WelcomeProps {
    emoji: string;
    text: string;
}

function Welcome({
    emoji,
    text
}: WelcomeProps) {
    return (
        <>
            <div className={styles.welcome}>
                <p> {emoji} {text} </p>
            </div>
        </>
    );

}

export default Welcome;