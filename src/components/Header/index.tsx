import styles from './styles.module.scss';

import { FaUser, FaShoppingCart, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <a href="/" className={styles.logo}></a>
          <nav className={styles.desktop}>
            <ul>
              <li><a href="/" title="Home">Home</a></li>
              <li><a href="/" title="About">About</a></li>
              <li><a href="/" title="Products">Products</a></li>
              <li><a href="/" title="Releases">Releases</a></li>
              <li><a href="/" title="Drops">Drops</a></li>
            </ul>
          </nav>
          <button>
            <FaUser />
            <FaShoppingCart />
          </button>
        </header>

        <section id={styles.banner}>
          <div className={styles.bannerSocial}>
            <a href="/" title="Instagram" target="_blank"><FaInstagram /></a>
            <a href="/" title="Facebook" target="_blank"><FaFacebook /></a>
            <a href="/" title="Twitter" target="_blank"><FaTwitter /></a>
          </div>
          <a href="/" className={styles.bannerImage}></a>
          <div className={styles.bannerBullets}>
            <div className={styles.bulletSingle}></div>
            <div className={styles.bulletSingle}></div>
            <div className={`${styles.bulletSingle} ${styles.active}`}></div>
            <div className={styles.bulletSingle}></div>
          </div>
        </section>
      </div>
    </div>
  )
}