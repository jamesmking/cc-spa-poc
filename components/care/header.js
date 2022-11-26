import styles from "./header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <p className={styles.patientName}>Mr Bob Whitehouse </p>
            <p>Room: 3 Ground floor</p>
        </header>
    )
}

export default Header