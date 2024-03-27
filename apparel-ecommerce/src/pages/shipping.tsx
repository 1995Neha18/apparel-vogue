import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";

const Shipping = () => {
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  });

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setShippingInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="shipping">
      <button>
        <BiArrowBack />
      </button>

      <form>
        <h1>Shipping Address</h1>

        <input
          required
          type="text"
          name="address"
          placeholder="Address"
          value={shippingInfo.address}
          onChange={changeHandler}
        />
        <input
          required
          type="text"
          name="city"
          placeholder="City"
          value={shippingInfo.city}
          onChange={changeHandler}
        />
        <input
          required
          type="text"
          name="state"
          placeholder="State"
          value={shippingInfo.state}
          onChange={changeHandler}
        />

        <select
          name="country"
          required
          value={shippingInfo.country}
          onChange={changeHandler}
        >
          <option value="">Select Country</option>
          <option value="india">India</option>
        </select>

        <input
          required
          type="number"
          name="pinCode"
          placeholder="Pincode"
          value={shippingInfo.pinCode}
          onChange={changeHandler}
        />
        <button>Pay Now</button>
      </form>
    </div>
  );
};

export default Shipping;
