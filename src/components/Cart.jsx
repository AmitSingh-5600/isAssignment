import productList from "../data/productList.json";

const Cart = () => {
  return (
    <>
      <div className="flex-col">
        <h3 className="text-2xl text-center underline p-4">Items in cart</h3>
        <div className="min-w-100 mx-auto grid gap-10 w-2/6 ">
          {productList.products.map((product) => (
            <div
              key={product.id}
              className="flex  bg-slate-100 p-4 justify-between"
            >
              <img className="h-30" src={product.imageUrl} alt="product" />

              <div className="w-3/6">
                <h4>{product.name}</h4>
                <p>{product.detail}</p>
                <button className="bg-blue-200 rounded-xl p-3 mt-2">
                  Remove Item
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="bg-blue-600 rounded-xl p-4 fixed top-2 right-2">
          CHECKOUT
        </button>
      </div>

      <div className="pb-20 hidden">
        <p className="text-center">Your cart is empty.</p>
        <p className="text-center">You have not added any item to your cart.</p>
      </div>
    </>
  );
};

export default Cart;
