import { Link } from "react-router-dom";

function ProductsPage(props) {
  console.log("Inside ProductsPage: ", { props });

  const { products } = props;

  return (
    <main>
      <h2>Products</h2>
      <ul>
        {products.map((product, index) => {
          return (
            <li key={index}>
              <h3>{product.name}</h3>
              <p>£{product.price}</p>
              <Link to={`/products/${product.id}`} state={{ product }}>
                View Product
              </Link>
              <br></br>
              <Link to={`/products/${product.id}/edit`} state={{ product }}>
                Edit Product
              </Link>
              {/* added link to edit page with a link element = updated url (step 3) */}
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default ProductsPage;
