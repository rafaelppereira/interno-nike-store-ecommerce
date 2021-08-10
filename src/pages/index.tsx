import Head from "next/head";
import { BannerProduct } from "../components/BannerProduct";
import { ProductsTopSelling } from "../components/ProductsTopSelling";
import { AllProducts } from "../components/AllProducts";

import styles from './home.module.scss';

import { FaArrowRight } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <Head>
        <title>SneakersBr | exiospace</title>
      </Head>
      <ProductsTopSelling />
      <BannerProduct />
      <div className={styles.about}>
        <div className={styles.aboutContent}>
          <div>
            <p>
              Laboris quis minim deserunt ad sit ad aliquip excepteur pariatur.
              Voluptate Lorem incididunt do duis in.
            </p>
            <br />
            <p>
              Quis duis elit anim minim. Ea occaecat sunt do reprehenderit ad duis
              cillum commodo cupidatat magna in exercitation eiusmod eiusmod.
              Excepteur minim enim reprehenderit aute ipsum qui fugiat magna non 
              laborum deserunt excepteur incididunt magna. Enim voluptate voluptate 
              nisi et aliquip ex. Cupidatat eiusmod ullamco tempor sint sunt reprehenderit
              exercitation tempor. Labore enim irure do eiusmod dolor consectetur minim 
              ipsum id nulla sunt magna exercitation ullamco. Do consectetur exercitation
              mollit et incididunt nisi.
            </p>
            <button
              type="button"
            >
              Saiba mais <FaArrowRight />
            </button>
          </div>
          <div>
            <a href="/" title="Vapor max x"></a>
          </div>
        </div>
      </div>
      <AllProducts />
    </>
  )
}
