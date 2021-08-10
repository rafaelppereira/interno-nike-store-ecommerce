import styles from './styles.module.scss';

export function BannerProduct() {
  return (
    <div className={styles.container}>
      <div className={styles.bannerImages}>
        <a href="/" title="SneakersBr">
          <img src="/banner3.jpg" alt="SneakersBr" />
          <span>Vapor max X90</span>
        </a>
        <a href="/" title="SneakersBr">
          <img src="/banner2.jpg" alt="SneakersBr" />
          <span>Air max fire</span>
        </a>
        <a href="/" title="SneakersBr">
          <img src="/banner1.jpg" alt="SneakersBr" />
          <span>Air force one</span>
        </a>
      </div>
    </div>
  )
}