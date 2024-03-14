import { Link } from "react-router-dom";
import Banner3 from "../assets/images/Banner3.jpeg";

const Home = () => {
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
      <main></main>
    </div>
  );
};

export default Home;
