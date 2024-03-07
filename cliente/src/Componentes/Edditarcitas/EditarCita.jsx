/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const EditarCita = () => {
    const { id } = useParams();
    const [editedCita, setEditedCita] = useState({
        nombre_y_apellido: '',
        CIN: '',
        edad: '',
        telefono: '',
        especialidades_consultadas: '',
        fecha_consulta: '',
        hora_consulta: '',
        correo_paciente: ''
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCita = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:3000/api/citas/${id}`);
                setEditedCita(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener la cita:', error);
            }
        };
        fetchCita();
    }, [id]);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://127.0.0.1:3000/api/citas/${id}`, editedCita);
            window.location.href = '/editar';
        } catch (error) {
            console.error('Error al guardar la edición:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const normalizedValue = name === 'fecha_consulta' ? new Date(value).toISOString().split('T')[0] : value;
        setEditedCita({ ...editedCita, [name]: normalizedValue });
    };

    if (loading) {
        return <div>Cargando...</div>;
    }

    const containerStyle = {
        marginTop: '2rem'
    };

    const paperStyle = {
        padding: '2rem',
        borderRadius: '1rem',
        minHeight: '90vh',
        backgroundColor: '#f5f5f5'
    };

    const inputStyle = {
        marginBottom: '1rem',
        padding: '0.75rem',
        fontSize: '1rem',
        borderRadius: '0.25rem',
        border: '1px solid #daeaf6',
        backgroundColor: '#b5d6d6',
        color: '#000',
        width: '100%',
        boxSizing: 'border-box'
    };

    return (
        <Container maxWidth="md" style={containerStyle}>
            <Paper elevation={3} style={paperStyle}>
                <Typography variant="h4" align="center" gutterBottom>
                    Editar Cita
                </Typography>
                <form onSubmit={onSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={4}>
                            <label>Nombre y Apellido:</label>
                            <input type="text" name="nombre_y_apellido" value={editedCita.nombre_y_apellido} onChange={handleChange} style={inputStyle} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <label>CIN:</label>
                            <input type="number" name="CIN" value={editedCita.CIN} onChange={handleChange} style={inputStyle} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <label>Edad:</label>
                            <input type="number" name="edad" value={editedCita.edad} onChange={handleChange} style={inputStyle} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <label>Teléfono:</label>
                            <input type="tel" name="telefono" value={editedCita.telefono} onChange={handleChange} style={inputStyle} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <label>Especialidades Consultadas:</label>
                            <select name="especialidades_consultadas" value={editedCita.especialidades_consultadas} onChange={handleChange} style={inputStyle}>
                                <option value="Médico Clínico">Médico Clínico</option>
                                <option value="Cardiólogo">Cardiólogo</option>
                                <option value="Endocrinólogo">Endocrinólogo</option>
                                <option value="Dermatólogo">Dermatólogo</option>
                                <option value="Ginecólogo">Ginecólogo</option>
                                <option value="Pediatra">Pediatra</option>
                                <option value="Neurólogo">Neurólogo</option>
                                <option value="Psiquiatra">Psiquiatra</option>
                                <option value="Traumatólogo">Traumatólogo</option>
                                <option value="Oftalmólogo">Oftalmólogo</option>
                                <option value="Otorrinolaringólogo">Otorrinolaringólogo</option>
                                <option value="Urologo">Urologo</option>
                                <option value="Cirujano General">Cirujano General</option>
                                <option value="Gastroenterólogo">Gastroenterólogo</option>
                                <option value="Nutricionista">Nutricionista</option>
                                <option value="Oncólogo">Oncólogo</option>
                                <option value="Reumatólogo">Reumatólogo</option>
                                <option value="Anestesiólogo">Anestesiólogo</option>
                                <option value="Radiólogo">Radiólogo</option>
                                <option value="Fisioterapeuta">Fisioterapeuta</option>
                             </select>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <label>Fecha de consulta</label>
                            <input type="date" name="fecha_consulta" value={editedCita.fecha_consulta} onChange={handleChange} style={inputStyle} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <label>Hora de consulta</label>
                            <input type="time" name="hora_consulta" value={editedCita.hora_consulta} onChange={handleChange} style={inputStyle} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <label>Correo del paciente:</label>
                            <input type="email" name="correo_paciente" value={editedCita.correo_paciente} onChange={handleChange} style={inputStyle} />
                        </Grid>
                    </Grid>
                    <div style={{ textAlign: 'center' }}>
                        <Button type="submit" variant="contained" color="primary" style={{ marginBottom: '1rem', marginRight: '1rem' }}>Guardar</Button>
                        <Button type="button" variant="contained" color="secondary" style={{ marginBottom: '1rem' }} onClick={() => window.location.href = '/editar'}>Cancelar</Button>
                    </div>
                </form>
            </Paper>
        </Container>
    );
};

export default EditarCita;*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const EditarCita = () => {
    const { id } = useParams();
    const [editedCita, setEditedCita] = useState({
        nombre_y_apellido: '',
        CIN: '',
        edad: '',
        telefono: '',
        especialidades_consultadas: '',
        fecha_consulta: '',
        hora_consulta: '',
        correo_paciente: ''
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCita = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:3000/api/citas/${id}`);
                setEditedCita(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener la cita:', error);
            }
        };
        fetchCita();
    }, [id]);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://127.0.0.1:3000/api/citas/${id}`, editedCita);
            window.location.href = '/editar';
        } catch (error) {
            console.error('Error al guardar la edición:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const normalizedValue = name === 'fecha_consulta' ? new Date(value).toISOString().split('T')[0] : value;
        setEditedCita({ ...editedCita, [name]: normalizedValue });
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`http://127.0.0.1:3000/api/citas/${id}`);
            alert('La cita ha sido eliminada correctamente.');
            window.location.href = '/editar';
        } catch (error) {
            console.error('Error al eliminar la cita:', error);
        }
    };

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <Container maxWidth="md" style={{ marginTop: '2rem' }}>
            <Paper elevation={3} style={{ padding: '2rem', borderRadius: '1rem', minHeight: '90vh', backgroundColor: '#f5f5f5' }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Editar Cita
                </Typography>
                <form onSubmit={onSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={4}>
                            <label>Nombre y Apellido:</label>
                            <input type="text" name="nombre_y_apellido" value={editedCita.nombre_y_apellido} onChange={handleChange} className="form-control" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <label>CIN:</label>
                            <input type="number" name="CIN" value={editedCita.CIN} onChange={handleChange} className="form-control" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <label>Edad:</label>
                            <input type="number" name="edad" value={editedCita.edad} onChange={handleChange} className="form-control" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <label>Teléfono:</label>
                            <input type="tel" name="telefono" value={editedCita.telefono} onChange={handleChange} className="form-control" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <label>Especialidades Consultadas:</label>
                            <select name="especialidades_consultadas" value={editedCita.especialidades_consultadas} onChange={handleChange} className="form-control">
                                <option value="Médico Clínico">Médico Clínico</option>
                                <option value="Cardiólogo">Cardiólogo</option>
                                <option value="Endocrinólogo">Endocrinólogo</option>
                                <option value="Dermatólogo">Dermatólogo</option>
                                <option value="Ginecólogo">Ginecólogo</option>
                                <option value="Pediatra">Pediatra</option>
                                <option value="Neurólogo">Neurólogo</option>
                                <option value="Psiquiatra">Psiquiatra</option>
                                <option value="Traumatólogo">Traumatólogo</option>
                                <option value="Oftalmólogo">Oftalmólogo</option>
                                <option value="Otorrinolaringólogo">Otorrinolaringólogo</option>
                                <option value="Urologo">Urologo</option>
                                <option value="Cirujano General">Cirujano General</option>
                                <option value="Gastroenterólogo">Gastroenterólogo</option>
                                <option value="Nutricionista">Nutricionista</option>
                                <option value="Oncólogo">Oncólogo</option>
                                <option value="Reumatólogo">Reumatólogo</option>
                                <option value="Anestesiólogo">Anestesiólogo</option>
                                <option value="Radiólogo">Radiólogo</option>
                                <option value="Fisioterapeuta">Fisioterapeuta</option>
                             </select>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <label>Fecha de consulta</label>
                            <input type="date" name="fecha_consulta" value={editedCita.fecha_consulta} onChange={handleChange} className="form-control" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <label>Hora de consulta</label>
                            <input type="time" name="hora_consulta" value={editedCita.hora_consulta} onChange={handleChange} className="form-control" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <label>Correo del paciente:</label>
                            <input type="email" name="correo_paciente" value={editedCita.correo_paciente} onChange={handleChange} className="form-control" />
                        </Grid>
                    </Grid>
                    <div style={{ textAlign: 'center' }}>
                        <Button type="submit" variant="contained" color="primary" style={{ marginBottom: '1rem', marginRight: '1rem', marginTop: '1rem' }}>Guardar</Button>
                        <Button type="button" variant="contained" color="secondary" style={{ marginBottom: '1rem', marginTop: '1rem', marginRight: '1rem'}} onClick={handleDelete}>Eliminar</Button>
                        <Button type="button" variant="contained" color="secondary" style={{ marginBottom: '1rem', marginTop: '1rem'}} onClick={() => window.location.href = '/editar'}>Cancelar</Button>
                    </div>
                </form>
            </Paper>
        </Container>
    );
};

export default EditarCita;
