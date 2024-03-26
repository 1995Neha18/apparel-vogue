import { FaPlus } from "react-icons/fa";

type ProductProps = {
  productId: string;
  name: string;
  imageUrl: string;
  stock: number;
  price: number;
  handler: () => void;
};

// const server = "sffjfefnfkefn";

const ProductCard = ({
  // productId,
  name,
  imageUrl,
  // stock,
  price,
  handler,
}: ProductProps) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
      <p>
        <span> &#8377;</span>
        <span>{price}</span>
      </p>
      <div>
        <button onClick={() => handler()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
