import productList from "../data/productList.json";
import { useSelector, useDispatch } from "react-redux";
import cartSlice from "../data/cartSlice";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const { removeFromCart, clearAllItems } = cartSlice.actions;
  const dispatch = useDispatch();
  const { cartProductIds } = useSelector((state) => state.cart);
  let cartItems = productList.products.filter((product) =>
    cartProductIds.includes(product.id)
  );
  return (
    <>
      {cartProductIds.length > 0 && (
        <div className="flex-col">
          <h3 className="text-2xl text-center underline p-4">Items in cart</h3>
          <div className="mx-auto w-full grid gap-10 sm:w-120">
            {cartItems.map((product) => (
              <div
                key={product.id}
                className="flex  bg-slate-100 p-4 justify-center"
              >
                <div className="w-1/2 flex justify-end mr-4">
                  <img className="h-30 " src={product.imageUrl} alt="product" />
                </div>

                <div className="w-1/2 ml-4">
                  <h4>{product.name}</h4>
                  <p>{product.detail}</p>
                  <button
                    className="bg-blue-200 rounded-xl p-3 mt-2"
                    onClick={() => dispatch(removeFromCart(product.id))}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            className="bg-blue-600 rounded-xl p-4 fixed top-2 right-2"
            onClick={() => dispatch(clearAllItems())}
          >
            CHECKOUT
          </button>
        </div>
      )}

      {cartProductIds.length < 1 && (
        <div className="pb-20 flex-col  bg-slate-100 w-3/6 mx-auto">
          <div className="flex justify-center">
            <FaShoppingCart className="size-16 mt-4" />
          </div>
          <p className="text-center">Your cart is empty.</p>
          <p className="text-center">
            You have not added any item to your cart.
          </p>
        </div>
      )}
    </>
  );
};

export default Cart;
