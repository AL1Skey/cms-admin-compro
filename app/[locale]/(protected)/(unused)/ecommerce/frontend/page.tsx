import { getProducts } from "./data";
import EmptyProject from "./empty";
import ProductBox from "./product-box";
import FrontendWrapper from "./frontend-wrapper";
const EcommercePage = async () => {
  const products = await getProducts();
  if (products.length === 0) return <EmptyProject />;
  return (
    <FrontendWrapper>
    <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 h-max">
      {products?.map((product, i) => (
        <ProductBox key={`grid_key_${i}`} product={product} />
      ))}
    </div>
    </FrontendWrapper>
  );
};

export default EcommercePage;