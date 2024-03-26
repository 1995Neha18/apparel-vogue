import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

type cartItemsprops = {
  cartItem: any;
};

const CartItems = ({ cartItem }: cartItemsprops) => {
  const { productId, name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="cart-items">
      <img src={imageUrl} alt={name} />
      <article>
        <Link to={`/product/${productId}`}>{name}</Link>
        <p>
          <span> &#8377;</span>{" "}
          <span>{price}</span>
        </p>
      </article>

      <div>
        <button>-</button>
        <p>{quantity}</p>
        <button>+</button>
      </div>
      <button>
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItems;
