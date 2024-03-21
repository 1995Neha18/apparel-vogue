import { FaPlus } from "react-icons/fa";

type ProductProps = {
  id: string;
  name: string;
  imageUrl: string;
  stock: number;
  price: number;
  handler: () => void;
};

// const server = "sffjfefnfkefn";

const ProductCard = ({
  id,
  name,
  imageUrl,
  stock,
  price,
  handler,
}: ProductProps) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
      <span>rs {price}</span>
      <div>
        <button onClick={() => handler()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
