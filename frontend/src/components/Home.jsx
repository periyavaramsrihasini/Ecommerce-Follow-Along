import Product from "./auth/Product";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <div className="flex flex-col gap-0 bg-[#2d2d2d] text-white">
      <div className="mt-15">
        <Navbar />
      </div>
      <Product />
    </div>
  );
};

export default Home;