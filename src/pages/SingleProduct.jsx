import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SingleProduct() {
  const { id } = useParams();
  const urlProducts = `https://fakestoreapi.com/products/${id}`;
  const [product, setProducts] = useState();

  useEffect(() => {
    fetch(urlProducts)
      .then((res) => res.json())
      .then((data) => {
        console.log("Prodotto:", data);
        setProducts(data);
      });
  }, [id]);

  if (!product) {
    return <p className="text-center py-5">Caricamento...</p>;
  }

  return (
    <>
      <main className="container py-5">
        <div className="card border border-dark shadow bg-white text-dark shadow">
          <div className="row g-0">
            {/* Immagine */}
            <div className="col-md-6 d-flex align-items-center justify-content-center p-4">
              <img
                src={product.image}
                alt={product.title}
                className="img-fluid"
                style={{ maxHeight: "400px", objectFit: "contain" }}
              />
            </div>

            {/* Contenuto */}
            <div className="col-md-6 p-5 d-flex flex-column justify-content-between">
              <div>
                <h2 className="fw-bold mb-3">{product.title}</h2>
                <p className="text-muted text-capitalize">{product.category}</p>
                <p className="my-4">{product.description}</p>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-auto">
                <span className="fs-4 fw-bold">
                  ${product?.price?.toFixed(2)}
                </span>
                <button className="btn btn-outline-dark btn-lg">
                  Aggiungi al carrello
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
