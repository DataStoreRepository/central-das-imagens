import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardPhoto from '../../components/card-photo/card-photo'
import { useLocation } from 'react-router-dom';
import "./resultados.css"

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function SearchResults() {
    const query = useQuery();
    const searchTerm = query.get('query');
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/foto/search?query=${searchTerm}`);
                setPhotos(response.data); // Certifique-se de que response.data é um array de fotos
                console.log(response.data)
            } catch (error) {
                console.error('Erro ao buscar fotos:', error);
                setPhotos([]); // Se ocorrer um erro, defina como um array vazio para evitar erros de mapeamento
            }
        };

        fetchPhotos();
    }, [searchTerm]);

    return (
        <div className='photos'>
            <h1>Resultados da pesquisa para "{searchTerm}"</h1>
            <div className="photos-grid">
                {photos.map((photo) => (
                    <CardPhoto key={photo.id} id={photo.id} titulo={photo.titulo} descricao={photo.descricao} foto={photo.imagem}/>
                ))}
            </div>
        </div>
    );
}

export default SearchResults;
