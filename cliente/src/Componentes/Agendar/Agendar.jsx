import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const AgendarCita = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const formattedData = {
                ...data,
                fecha_consulta: data.fecha_consulta.split('T')[0] // Extraer solo la parte de la fecha sin la parte horaria
            };
        
            if (Object.keys(errors).length !== 0) {
                alert('Por favor, complete todos los campos correctamente.');
                return;
            }
        
            const response = await axios.post('http://127.0.0.1:3000/api/citas/agendar', formattedData);
            console.log('Cita agendada con éxito ', response);
            navigate('/home');
        } catch (error) {
            console.error('Error al agendar cita:', error);
        }
    };

    return (
        <Container maxWidth="md" style={{ marginTop: '2rem' }}>
            <Paper elevation={3} style={{ padding: '2rem', borderRadius: '1rem', minHeight: '90vh', backgroundColor: '#f5f5f5', fontFamily: '"Arial Rounded MT Bold", Arial, sans-serif' }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Agenda tu cita
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={4}>
                            <label>Nombre y Apellido:</label>
                            <input type='text' {...register('nombre_y_apellido', { required: true, minLength: 2, maxLength: 150 })} className="form-control" />
                            <small className="text-muted">Ingresa tu nombre y apellido</small>
                            {errors.nombre_y_apellido && <span>Este campo es requerido</span>}
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <label>Número de CIN:</label>
                            <input type='number' {...register('CIN', { required: true, minLength: 4, maxLength: 20 })} className="form-control" />
                            <small className="text-muted">Ingresa tu número de CIN</small>
                            {errors.CIN && <span>Este campo es requerido</span>}
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <label>Edad:</label>
                            <input type='number' {...register('edad', { required: true, max: 110 })} className="form-control" />
                            <small className="text-muted">Ingresa tu edad</small>
                            {errors.edad && <span>Este campo es requerido</span>}
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <label>Teléfono:</label>
                            <input type='number' {...register('telefono', { required: true, minLength: 5, maxLength: 30 })} className="form-control" />
                            <small className="text-muted">Ingresa tu número de teléfono</small>
                            {errors.telefono && <span>Este campo es requerido</span>}
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <label>Especialidades Consultadas:</label>
                            <select {...register('especialidades_consultadas', { required: true })} className="form-select">
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
                            <small className="text-muted">Selecciona la especialidad</small>
                            {errors.especialidades_consultadas && <span>Este campo es requerido</span>}
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <label>Fecha de la consulta:</label>
                            <input type='date' {...register('fecha_consulta', { required: true })} className="form-control" />
                            <small className="text-muted">Selecciona la fecha de la consulta</small>
                            {errors.fecha_consulta && <span>Este campo es requerido</span>}
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <label>Hora de la consulta:</label>
                            <input type='time' {...register('hora_consulta', { required: true })} className="form-control" />
                            <small className="text-muted">Selecciona la hora de la consulta</small>
                            {errors.hora_consulta && <span>Este campo es requerido</span>}
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <label>Correo del paciente (opcional):</label>
                            <input type='email' {...register('correo_paciente')} className="form-control" />
                            <small className="text-muted">Ingresa tu correo (opcional)</small>
                            {errors.correo_paciente && <span>Este campo debe ser un correo válido</span>}
                        </Grid>
                    </Grid>
                    <br />
                    <div style={{ textAlign: 'center' }}>
                        <button type='submit' className="btn btn-primary">Agendar</button>
                    </div>
                    <br />
                    <div style={{ textAlign: 'center' }}>
                        <Link to='/home' className="btn btn-secondary">Cancelar</Link>
                    </div>
                </form>
            </Paper>
        </Container>
    );
};

export default AgendarCita;
