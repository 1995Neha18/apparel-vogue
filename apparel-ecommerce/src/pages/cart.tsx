import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItems from "../components/cart-items";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId: "hhjjsfjfj",
    imageUrl:
      "https://m.media-amazon.com/images/I/316ArzLeJ2L._SY445_SX342_QL70_FMwebp_.jpg",
    name: "Macbook",
    price: 3000,
    quantity: 4,
    stock: 10,
  },
];

const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subtotal + tax + shippingCharges;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCoupon, setIsValidCoupon] = useState<boolean>(false);

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      if (Math.random() > 0.5) setIsValidCoupon(true);
      else setIsValidCoupon(false);
    }, 1000);
    return () => {
      clearTimeout(timeOutID);
      setIsValidCoupon(true);
    };
  }, [couponCode]);

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <CartItems key={index} cartItem={item} />
          ))
        ) : (
          <h1>No Items Added</h1>
        )}
      </main>
      <aside>
        <p>
          Subtotal:<span> &#8377;</span>
          {subtotal}
        </p>
        <p>
          Shipping Charges:<span> &#8377;</span>
          {shippingCharges}
        </p>
        <p>
          Tax:<span> &#8377;</span>
          {tax}
        </p>
        <p>
          Discount:{" "}
          <em className="red">
            <span> &#8377;</span>
            {discount}
          </em>
        </p>
        <p>
          <b>
            Total:<span> &#8377;</span>
            {total}
          </b>
        </p>

        <input
          type="text"
          placeholder="Coupon code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        {couponCode &&
          (isValidCoupon ? (
            <span className="green">
              {discount} off using the
              <code>{couponCode}</code>{" "}
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />{" "}
            </span>
          ))}

        {cartItems.length > 0 && <Link to={"/shipping"}>Checkout</Link>}
      </aside>
    </div>
  );
};

export default Cart;
