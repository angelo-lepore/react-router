// Import degli hook di React
import { useState, useEffect } from "react";

export default function ProductsPage() {
  const urlProducts = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(urlProducts)
      .then((res) => res.json())
      .then((data) => {
        console.log("Prodotti:", data);
        setProducts(data);
      });
  }, []);

  return (
    <>
      <main>
        <div className="container py-5">
          <h1 className="display-4 text-center mb-5">I nostri Prodotti</h1>

          <div className="row">
            {products.map(({ id, title, price, image, category }) => (
              <div key={id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card h-100 border border-dark bg-white text-dark shadow">
                  <img
                    src={image}
                    className="card-img-top p-3"
                    alt={title}
                    style={{ objectFit: "contain", height: "200px" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title fw-semibold">{title}</h6>
                    <p className="card-text text-muted text-capitalize small mb-2">
                      {category}
                    </p>
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <span className="fw-bold text-dark">
                        ${price.toFixed(2)}
                      </span>
                      <button className="btn btn-outline-dark btn-sm">
                        Aggiungi
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
