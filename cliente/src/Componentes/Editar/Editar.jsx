
    import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

const EditarEliminarCita = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [cita, setCita] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8001/api/detallscita/${id}`);
                setCita(response.data);
            } catch (error) {
                console.error('Error al obtener datos de la cita:', error);
            }
        };

        fetchData();
    }, [id]);

    const onSubmit = async (data) => {
        try {
            const response = await axios.put(`http://127.0.0.1:8001/api/editcita/${id}`, data);
            console.log('Cita editada con éxito ', response);
            navigate('/'); // Navega de vuelta a la página principal después de editar la cita
        } catch (error) {
            console.error('Error al editar cita:', error);
        }
    };

    const eliminarCita = async () => {
        try {
            const response = await axios.delete(`http://127.0.0.1:8001/api/eliminar/${id}`);
            console.log('Cita eliminada con éxito', response);
            navigate('/');
        } catch (error) {
            console.error('Error al eliminar cita:', error);
        }
    };


    return (
        <div className='cofre1'>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 className='cofretitulo1'>hola</h1>
                <button className='cofreboton'>
                    <Link to={'/'} style={{ }}>
                        Back to Home
                    </Link>
                </button>
            </div>

            <h2 className='cofretitulo2'>Edit: </h2>

            <form className='cofre2' onSubmit={handleSubmit(onSubmit)}>
                <div className='cofre2uno'>
                    <h2 className='cofresubtitulo1'>Editar detalles de la cita</h2>
                    <div>
                        <label className='cofrepequeño1'>Nombre y Apellido:</label>
                        <br />
                        <input className='cofrecito1' type='text' {...register('nombre_y_apellido', { required: true, minLength: 2, maxLength: 150 })} defaultValue={cita.nombre_y_apellido} />
                    </div>
                    <div>
                        <label className='cofrepequeño2'>CIN:</label>
                        <br />
                        <input className='cofrecito2' type='number' {...register('CIN', { required: true, minLength: 4, maxLength: 20 })} defaultValue={cita.CIN} />
                    </div>
                    <div>
                        <label className='cofrepequeño3'>Edad:</label>
                        <br />
                        <input className='cofrecito3' type='number' {...register('edad', { required: true, max: 110 })} defaultValue={cita.edad} />
                    </div>
                    <div>
                        <label className='cofrepequeño4'>Teléfono:</label>
                        <br />
                        <input className='cofrecito4' type='tel' {...register('telefono', { required: true, minLength: 5, maxLength: 30 })} defaultValue={cita.telefono} />
                    </div>
                    <div>
                        <label className='cofrepequeño5'>Especialidades Consultadas:</label>
                        <select className='cofrecito5' {...register('especialidades_consultadas', { required: true })} defaultValue={cita.especialidades_consultadas}>
                            <option value='Médico Clínico'>Médico Clínico</option>
                            <option value='Cardiólogo'>Cardiólogo</option>
                            <option value='Endocrinólogo'>Endocrinólogo</option>
                        </select>
                    </div>
                </div>
                <input className='botoncofre' type='submit' value='Editar Cita' />
            </form>

            <div style={{ marginTop: '20px' }}>
                <button className='cofreboton' onClick={eliminarCita}>
                    Eliminar Cita
                </button>
            </div>
        </div>
    );
};

export default EditarEliminarCita ;
