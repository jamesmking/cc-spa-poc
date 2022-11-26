import Head from 'next/head';
import styles from './layoutCare.module.css';
import Header from "../care/header";
import Navigation from "../care/navigation";

export default function LayoutCare({ children }) {

    return (
        <div className={styles.widthContainer}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
                <title>Care</title>
            </Head>
            <Header></Header>
            <Navigation></Navigation>
            <main className={styles.innerWrap}>{children}</main>
        </div>
    );
}