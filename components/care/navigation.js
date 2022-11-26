import styles from "./navigation.module.css"
import Link from "next/link";

const Navigation = () => {
    return (
     <nav className={styles.nav}>
         <ul className={styles.navList}>
             <li className={styles.navListItem}><Link href="/care/review">Care review</Link></li>
             <li className={styles.navListItem}><Link href="/care/summary">Care summary</Link></li>
         </ul>
     </nav>
    )
}

export default Navigation