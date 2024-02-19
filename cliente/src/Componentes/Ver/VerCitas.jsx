import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Detailscita = () => {
    const [citas, setCitas] = useState([]);
    const [searchId, setSearchId] = useState('');
    const [searchedCita, setSearchedCita] = useState(null);
    const [searchError, setSearchError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8001/api/citas');
                setCitas(response.data);
            } catch (error) {
                console.error('Error al obtener datos de las citas:', error);
            }
        };

        fetchData();
    }, []);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8001/api/detallscita/${searchId}`);
            setSearchedCita(response.data);
            setSearchError('');
        } catch (error) {
            console.error('Error al buscar la cita:', error);
            setSearchError('No se encontró ninguna cita con ese ID.');
        }
    };

    return (
        <div className='resipiente1'>
            <div className='recipiente2' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 className='contenedor1'>Pet Shelter</h1>
                <button style={{ marginLeft: 'auto' }}>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
                        Back Home
                    </Link>
                </button>
            </div>
            <br />
            <div className='recipiente4'>
                <h2>List of Appointments:</h2>
                <ul>
                    {citas.map(cita => (
                        <li key={cita.id}>
                            <Link to={`/details/${cita.id}`}>{cita.nombre_y_apellido}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <br />
            <div className='recipiente4'>
                <h2>Search by ID:</h2>
                <input type='text' value={searchId} onChange={(e) => setSearchId(e.target.value)} />
                <button onClick={handleSearch}>Search</button>
                {searchError && <p>{searchError}</p>}
                {searchedCita && (
                    <div>
                        <h3>Found Patient:</h3>
                        <p>Nombre y Apellido: {searchedCita.nombre_y_apellido}</p>
                        <p>CIN: {searchedCita.CIN}</p>
                        <p>Edad: {searchedCita.edad}</p>
                        <p>Teléfono: {searchedCita.telefono}</p>
                        <p>Especialidades Consultadas: {searchedCita.especialidades_consultadas}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Detailscita;

