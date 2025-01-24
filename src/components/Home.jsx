import productList from "../data/productList.json";

const Home = () => {
  return (
    <div className="">
      <div className="grid  p-4 mx-auto w-full gap-4 sm:grid-cols-2 md:grid-cols-3 l9:grid-cols-4 xl:grid-cols-5 ">
        {productList.products.map((product) => {
          return (
            <div
              className="bg-slate-100 flex flex-col items-center gap-1  "
              key={product.id}
            >
              <img
                className="h-50 mb-8"
                src={product.imageUrl}
                alt="Card cap"
              />
              <hr className="w-4/6 text-black" />
              <h5 className="">{product.name}</h5>
              <p className="">${product.price}</p>

              <button className="bg-blue-500 rounded-md p-1 mb-8">
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
