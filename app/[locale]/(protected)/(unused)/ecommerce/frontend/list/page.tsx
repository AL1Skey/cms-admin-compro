import { getProducts } from "../data";
import EmptyProject from "../empty";
import FrontendWrapper from "../frontend-wrapper";
import ProductList from "./product-list";

const ListPage = async () => {
  const products = await getProducts();
  if (products.length === 0) return <EmptyProject />;
  return (
    <FrontendWrapper>
      <div className=" space-y-3 grid-cols-1 gap-5 h-max">
        {products?.map((product, i) => (
          <div key={`list_key_${i}`}>
            <ProductList product={product} />
          </div>
        ))}
      </div>
    </FrontendWrapper>
  );
};

export default ListPage;