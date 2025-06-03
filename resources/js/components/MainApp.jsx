import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MainApp() {
    const [eventos, setEventos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("/api/eventos")
        .then(response => {
            setEventos(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.error("Erro ao buscar eventos:", error);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div>Carregando eventos...</div>;
    }

    return (
        <div>
            <h1>Agenda de Vinhos</h1>
            <ul>
                {eventos.map(evento => (
                    <li key={evento.id}>{evento.titulo} - {evento.data}</li>
                ))}
                { /* Aqui fica o calendario e o formulário */ }
            </ul>
        </div>
    );
}

export default MainApp;