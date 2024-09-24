import { Product } from "@/app/page";
import Link from "next/link";
import React from "react";

interface Props {
  cart: Product[];
  removeFromCart: (id: string) => void;
}

function Cart({ cart, removeFromCart }: Props) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2
        style={{
          fontFamily: "Roboto Mono",
        }}
      >
        Your Cart
      </h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Rs {item.price.toFixed(2)}</p>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="remove-button"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p>Total: Rs {total.toFixed(2)}</p>
            <Link href="/checkout" className="checkout-button">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
