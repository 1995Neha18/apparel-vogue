import { Link } from "react-router-dom";
import Banner3 from "../assets/images/Banner3.jpeg";
import ProductCard from "../components/product-card";

const Home = () => {
  const addToCartHandler = () => {};

  return (
    <div className="home">
      <section>
        <img src={Banner3} alt="banner" className="Bimage" />
      </section>
      <h1>
        New Arrivals
        <Link to={"/search"} className="findmore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard
          productId="adshfjjbh"
          name="Macbook"
          price={4545}
          stock={45}
          handler={addToCartHandler}
          imageUrl="https://m.media-amazon.com/images/I/316ArzLeJ2L._SY445_SX342_QL70_FMwebp_.jpg"
        />
      </main>
    </div>
  );
};

export default Home;
