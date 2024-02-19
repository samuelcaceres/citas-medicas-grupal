import React  from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AgendarCita = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://127.0.0.1:3000/api/citas', data); 
    
            console.log('Cita agendada con éxito ', response);
            navigate('/'); // Navega de vuelta a la página principal después de agendar la cita
        } catch (error) {
            console.error('Error al agendar cita:', error);
        }
    };

    return (
        <div className='cofre1'>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 className='cofretitulo1'>Agenda tu cita</h1>
                <button className='cofreboton'>
                    <Link to={'/'} style={{ }}>
                        Back to Home
                    </Link>
                </button>
            </div>

            <h2 className='cofretitulo2'>Agendar Cita</h2>

            <form className='cofre2' onSubmit={handleSubmit(onSubmit)}>
                <div className='cofre2uno'>
                    <h2 className='cofresubtitulo1'>Agregar detalles de la cita</h2>
                    <div>
                        <label className='cofrepequeño1'>Nombre y Apellido:</label>
                        <br />
                        <input className='cofrecito1' type='text' {...register('nombre_y_apellido', { required: true, minLength: 2, maxLength: 150 })} />
                    </div>
                    <div>
                        <label className='cofrepequeño2'>CIN:</label>
                        <br />
                        <input className='cofrecito2' type='number' {...register('CIN', { required: true, minLength: 4, maxLength: 20 })} />
                    </div>
                    <div>
                        <label className='cofrepequeño3'>Edad:</label>
                        <br />
                        <input className='cofrecito3' type='number' {...register('edad', { required: true, max: 110 })} />
                    </div>
                    <div>
                        <label className='cofrepequeño4'>Teléfono:</label>
                        <br />
                        <input className='cofrecito4' type='tel' {...register('telefono', { required: true, minLength: 5, maxLength: 30 })} />
                    </div>
                    <div>
                        <label className='cofrepequeño5'>Especialidades Consultadas:</label>
                        <select className='cofrecito5' {...register('especialidades_consultadas', { required: true })}>
                            <option value='Médico Clínico'>Médico Clínico</option>
                            <option value='Cardiólogo'>Cardiólogo</option>
                            <option value='Endocrinólogo'>Endocrinólogo</option>
                        </select>
                    </div>
                </div>
                <input className='botoncofre' type='submit' value='Agendar Cita' />
            </form>
        </div>
    );
};

export default AgendarCita;
