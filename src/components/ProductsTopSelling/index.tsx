import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/format';
import { toast } from 'react-hot-toast';
 
import styles from './styles.module.scss';
import { FaHeart, FaCartPlus } from 'react-icons/fa';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductFormatted extends Product {
  priceFormatted: string;
}

export function ProductsTopSelling() {

  const [products, setProducts] = useState<ProductFormatted[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');
      const productsFormated = response.data.map((product: Product) => {
        return {...product, price: formatPrice(product.price) }
      })
      setProducts(productsFormated)
    }

    loadProducts();
  }, []);

  function successedAddToCart() {
    toast.success('Product added to cart!')
  }

  return (
    <div className={styles.container} >
      <div className={styles.content} >
        <div className={styles.title}>
          <h3>Top Selling</h3>
          <span>Premium line of tennis <FaHeart /></span>
        </div>
        <div className={styles.productList}>
          {products.slice(0, 4).map(product => (
          <div className={styles.productSingle} key={product.id}>
            <div className={styles.productContent}>
              <div className={styles.productImage}>
                <img src={product.image} alt="" />
              </div>
              <div className={styles.titleProduct}>
                <span>{product.price}</span>
                <h5>PRODUCT LIMITED</h5>
              </div>
              <h3>{product.title}</h3>
              <h4>
                We deliver worldwide
              </h4>
            </div>
            <button
              type="button"
              className={styles.buttonAddCart}
              onClick={successedAddToCart}
            >
              <div className={styles.iconAdd}>
                <FaCartPlus />  
                <div>0</div>
              </div>
               Add to cart
            </button>
          </div>
          ))}



        </div>
      </div>
    </div>
  )
}