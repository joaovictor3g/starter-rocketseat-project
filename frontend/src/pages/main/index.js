import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

function Main() {
    const [products, setProducts] = useState([]);
    const [productInfo, setProductInfo] = useState([]);
    const [pages, setPages] = useState(1);

    useEffect(() => {
        loadProducts();
    
    }, []);

    async function loadProducts(page = 1){
        const response = await api.get(`/products?page=${pages}`);

        console.log(page);

        const { docs, ...productInfo } = response.data;

        setProducts(response.data.docs);
        setProductInfo(productInfo);
    
    };

    function prevPage() {
        if(pages === 1)
            return;
        
        setPages(pages-1);
        loadProducts(pages);
    }

    function nextPage() {
        if(pages === productInfo.pages)   return;

        setPages(pages+1);
        loadProducts(pages);

    }

  
    return(
        <div className="product-list">
            {products.map(product => (
                <article key={product._id}>
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>
                    
                    <Link to={`/products/${product._id}`} >Acessar detalhes</Link>
                </article>
            ))}
            <div className="actions">
                <button disabled={pages ===1} onClick={prevPage}>Anterior</button>
                <button disabled={pages === productInfo.pages} onClick={nextPage}>Proximo</button>
            </div>
        </div>
    );
}

export default Main;