import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'; 

import api from '../../services/api';

import './styles.css';

export default function Update(props) {
    const [product, setProduct] = useState([]);
    const history = useHistory();

    const { id } = props.match.params;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');

    useEffect(() => {
        getProduct();
    }, []);

    async function getProduct() {
        const response = await api.get(`/products/${id}`);

        console.log(response.data);
        setProduct(response.data);
       
    }
    
    async function updateProduct(e) {
        e.preventDefault();

        const { id } = props.match.params;

        const data = {
            title,
            description,
            url
        };

        try {
            const response = await api.put(`/products/update/${id}`, data);

            alert(`Informações alteradas com sucesso: ${response.data}`);
        
            history.push(`/products/${id}`);

        } catch(err) {
            alert('Nada alterado');
        }
    }

    return( 
        <div className="update-container">
            <form onSubmit={updateProduct}>    
                <h3>Título:</h3>
                <input
                    value={title} 
                    onChange={e => setTitle(e.target.value)}

                />

                <h3>Descrição:</h3>
                <textarea
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <h3>URL:</h3>
                <input
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                />

                <button className="atualizar" type="submit">
                    Atualizar
                </button>
            </form>
        </div>
    );
}