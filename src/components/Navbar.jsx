'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <header className={styles.navbar}>
            <div className={styles.logoContainer}>
                <a href="#" onClick={openModal} className={styles.signIn}>
                    Sign In
                </a>
                <Link href="/">
                    <Image
                        src="https://sbxcars.com/Assets/Logos/sbx-cars-sb-2024.svg"
                        alt="Logo"
                        width={250}
                        height={50}
                        className={styles.logo}
                    />
                </Link>
            </div>

            <div className={styles.logoLine}></div>

            <div className={styles.navContainer}>
                <nav className={styles.navMenu}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link href="/Auction" className={styles.navLink}>
                                Auction
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/Preview" className={styles.navLink}>
                                Preview
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/Sell" className={styles.navLink}>
                                Sell
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/About" className={styles.navLink}>
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
