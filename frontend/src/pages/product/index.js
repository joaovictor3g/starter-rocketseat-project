import React, { useEffect, useState } from 'react';
import { Link ,useHistory } from 'react-router-dom';
import api from '../../services/api';

import { FiTrash, FiEdit } from 'react-icons/fi';
 
import './styles.css';

export default function Product(props) {
    const [product, setProduct] = useState([]);
    const history = useHistory();
    const { id } = props.match.params; 

    useEffect(() => {
        Detail()
    }, []);

    async function Detail() {
        try {
            const response = await api.get(`/products/${id}`);
                
            setProduct(response.data);
        } catch(err) {
            alert('Erro no carregamento');
        }
    }

    async function deleteProduct() {
        await api.delete(`/products/${id}`)

        alert('Apagado');
        history.push('/');
    }

    return (
        <>
            <div className="detail-container">
                <h1>{product.title}</h1>
                <p>{product.description}</p>

                <p>
                    URL: <a href={product.url}>{product.url}</a>
                </p>
            </div>

            <div className="button-group">
                <button onClick={deleteProduct} type="button" className="delete">
                    <FiTrash size={22} color="#da552f" /> 
                </button>
                <Link to={`/products/update/${id}`} className="update">
                    <FiEdit size={22} color="#da552f" /> 
                </Link>
            </div>
        </>
    );
}