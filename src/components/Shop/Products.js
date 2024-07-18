import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const data = [
  { id: "p1", price: 6, title: "book", description: "best book ever" },
  { id: "p2", price: 10, title: "keys", description: "best book ever" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {data.map((product) => (
          <ProductItem
          key = {product.id}
            id= {product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
