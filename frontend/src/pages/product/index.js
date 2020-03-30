import React, { Component ,useEffect, useState } from 'react';
import api from '../../services/api';

import './styles.css';

export default function Product(props) {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        Detail()
    }, []);

    async function Detail() {
        const { id } = props.match.params;

        const response = await api.get(`/products/${id}`);
        
        setProduct(response.data);
    }

    return (
        <div className="detail-container">
            <h1>{product.title}</h1>
            <p>{product.description}</p>

            <p>
                URL: <a href={product.url}>{product.url}</a>
            </p>
        </div>
    );
}