import Image from 'next/image'; // Import Next.js Image component
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Left Side: Logo and Social Media Icons */}
      <div className={styles.leftSection}>
        <Image
          src="https://sbxcars.com/Assets/Logos/sbx-cars-sb-2024.svg" // Your logo image
          alt="SBX Cars Logo"
          width={150}
          height={50}
          className={styles.logo}
        />
        <div className={styles.socialMedia}>
          {/* Add social media icons */}
          <Image
            src="https://sbxcars.com/Assets/Icons/Social/youtube.svg"
            alt="YouTube"
            width={24}
            height={24}
          />
          <Image
            src="https://sbxcars.com/Assets/Icons/Social/tiktok.svg"
            alt="TikTok"
            width={24}
            height={24}
          />
          <Image
            src="https://sbxcars.com/Assets/Icons/Social/instagram.svg"
            alt="Instagram"
            width={24}
            height={24}
          />
          <Image
            src="https://sbxcars.com/Assets/Icons/Social/linkedin.svg"
            alt="LinkedIn"
            width={24}
            height={24}
          />
        </div>
      </div>

      {/* Center: Newsletter Subscription */}
      <div className={styles.centerSection}>
        <p className={styles.newsletterText}>
          Get the latest updates by subscribing to our newsletter.
        </p>
        <form className={styles.newsletterForm}>
          <input
            type="email"
            placeholder="Enter your email"
            className={styles.emailInput}
          />
          <button type="submit" className={styles.subscribeButton}>
            Subscribe
          </button>
        </form>
      </div>

      {/* Right Side: Links List */}
      <div className={styles.rightSection}>
        <ul className={styles.linksList}>
          <li>About us</li>
          <li>Team</li>
          <li>Contact us</li>
          <li>Sell your vehicle</li>
          <li>Auctions</li>
         
        </ul>
      </div>
      <div><ul className={styles.linksList}>
      <li>FAQ</li>
          <li>Careers</li>
          <li>Terms of use</li>
          <li>Privacy policy</li>
          <li>Cookie declaration</li>
        </ul></div>
    </footer>
  );
};

export default Footer;
