import styles from "./Product.module.scss"

export type ProductType = {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
};

const ProductView = ({products}: {products: ProductType[]}) => {
    return (
        <div className={styles.product}>
            <h1 className={styles.product__title}>Product</h1>
                <div className={styles.product__content}>
                    {products.map((product: ProductType) => (
                        <div key={product.id} className={styles.product__content__item}>
                            <div className={styles.product__content__item__image}>
                                <img src={product.image} alt={product.name} />
                            </div>
                            <h4 className={styles.product__content__item__name}>
                                {product.name}
                            </h4>
                            <p className={styles.product__content__item__category}>
                                {product.category}
                            </p>
                            <p className={styles.product__content__item__price}>
                                {product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
    )
}

export default ProductView