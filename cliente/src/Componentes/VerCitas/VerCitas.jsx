/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const VisualizarCitas = () => {
    const [citas, setCitas] = useState([]);
    const [pacienteFilter, setPacienteFilter] = useState('');
    const [especialidadFilter, setEspecialidadFilter] = useState('');
    const [fechaFilter, setFechaFilter] = useState('');
    const [showPreview, setShowPreview] = useState(false);
    const [previewUrl, setPreviewUrl] = useState('');
    const [showFilterSection, setShowFilterSection] = useState(false);

    useEffect(() => {
        const fetchCitas = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:3000/api/citas/all');
                setCitas(response.data);
            } catch (error) {
                console.error('Error al obtener citas:', error);
            }
        };
        fetchCitas();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:3000/api/citas/${id}`);
            setCitas(citas.filter(cita => cita._id !== id));
        } catch (error) {
            console.error('Error al eliminar cita:', error);
        }
    };

    const handleEdit = async (id) => {
        window.location.href = `/editar/${id}`;
    };

    const generarPDF = () => {
        const input = document.getElementById('tabla-citas');

        // Eliminar los botones de acción antes de capturar la tabla
        const botonesAccion = input.getElementsByClassName('btn-accion');
        for (let boton of botonesAccion) {
            boton.style.display = 'none';
        }

        html2canvas(input, {
            scale: 2,
            logging: true,
            windowWidth: document.getElementById('tabla-citas').scrollWidth,
            windowHeight: document.getElementById('tabla-citas').scrollHeight
        })
        .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 210;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

            // Restaurar la visibilidad de los botones de acción después de capturar la tabla
            for (let boton of botonesAccion) {
                boton.style.display = 'table-cell';
            }

            const pdfUrl = pdf.output('bloburl');
            setPreviewUrl(pdfUrl);
            setShowPreview(true);
        });
    };

    const closePreview = () => {
        setShowPreview(false);
        setPreviewUrl('');
    };

    const downloadPDF = () => {
        const a = document.createElement('a');
        a.href = previewUrl;
        a.download = 'citas.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    // Función para formatear la fecha a YYYY-MM-DD
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleClearFilter = (filterSetter) => {
        filterSetter('');
    };

    const filteredCitas = citas.filter(cita =>
        cita.nombre_y_apellido.toLowerCase().includes(pacienteFilter.toLowerCase()) &&
        cita.especialidades_consultadas.toLowerCase().includes(especialidadFilter.toLowerCase()) &&
        (fechaFilter ? formatDate(new Date(cita.fecha_consulta)) === fechaFilter : true)
    );

    return (
        <div className="container">
            <h1>Reporte de Citas agendadas</h1>
            <div>
                <button className="btn btn-secondary mb-2" style={{ marginRight: '5px' }}>
                    <Link to={'/home'} style={{ color: '#fff', textDecoration: 'none' }}>
                        Volver a Inicio
                    </Link>
                </button>
                <button className="btn btn-secondary mb-2" style={{ marginRight: '5px' }} onClick={generarPDF}>
                    Vista Previa del Reporte
                </button>
                <button className="btn btn-secondary mb-2" style={{ marginLeft: '0px' }} onClick={() => setShowFilterSection(!showFilterSection)}>
                    Filtrar
                </button>
                {showFilterSection && (
                    <div className="form-group">
                        <div className="input-group mb-2">
                            <input type="text" className="form-control" placeholder="Filtrar por paciente" value={pacienteFilter} onChange={(e) => setPacienteFilter(e.target.value)} />
                            {pacienteFilter && (
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button" onClick={() => handleClearFilter(setPacienteFilter)}>x</button>
                                </div>
                            )}
                        </div>
                        <div className="input-group mb-2">
                            <input type="text" className="form-control" placeholder="Filtrar por especialidad" value={especialidadFilter} onChange={(e) => setEspecialidadFilter(e.target.value)} />
                            {especialidadFilter && (
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button" onClick={() => handleClearFilter(setEspecialidadFilter)}>x</button>
                                </div>
                            )}
                        </div>
                        <div className="input-group mb-2">
                            <input type="date" className="form-control" placeholder="Filtrar por fecha" value={fechaFilter} onChange={(e) => setFechaFilter(e.target.value)} />
                            {fechaFilter && (
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button" onClick={() => handleClearFilter(setFechaFilter)}>x</button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
            <table id="tabla-citas" className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Nro.</th> 
                        <th scope="col">Paciente</th>
                        <th scope="col">Cedula</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Teléfono</th>
                        <th scope="col">Especialidades Consultadas</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Hora</th>
                        <th scope="col">Correo</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCitas.map((cita, index) => (
                        <tr key={cita._id} style={{ verticalAlign: 'middle' }}>
                            <td>{index + 1}</td> 
                            <td>{cita.nombre_y_apellido}</td>
                            <td>{cita.CIN}</td>
                            <td>{cita.edad}</td>
                            <td>{cita.telefono}</td>
                            <td>{cita.especialidades_consultadas}</td>
                            <td>{new Date(cita.fecha_consulta).toLocaleDateString()}</td>
                            <td>{cita.hora_consulta}</td>
                            <td>{cita.correo_paciente}</td>
                            <td className="btn-accion">
                                <button className="btn btn-danger" style={{ marginRight: '5px' }} onClick={() => handleDelete(cita._id)}>
                                    <DeleteIcon />
                                </button>
                                <button className="btn btn-primary">
                                    <Link to={`/editar/${cita._id}`} style={{ color: '#fff', textDecoration: 'none' }}>
                                        <EditIcon />
                                    </Link>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showPreview && (
                <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 999 }}>
                    <div className="modal-dialog" style={{ margin: '10% auto', maxWidth: 'calc(800px + 20%)' }}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Vista Previa del Reporte</h5>
                                <button type="button" className="close" onClick={closePreview}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <iframe src={previewUrl} style={{ width: '100%', height: '500px', border: 'none' }}></iframe>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={downloadPDF}>Descargar Reporte</button>
                                <button type="button" className="btn btn-secondary" onClick={closePreview}>Cerrar Vista Previa</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VisualizarCitas;

*/


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RefreshIcon from '@mui/icons-material/Refresh'; // Importar el icono de refresh
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const VisualizarCitas = () => {
    const [citas, setCitas] = useState([]);
    const [pacienteFilter, setPacienteFilter] = useState('');
    const [especialidadFilter, setEspecialidadFilter] = useState('');
    const [fechaFilter, setFechaFilter] = useState('');
    const [showPreview, setShowPreview] = useState(false);
    const [previewUrl, setPreviewUrl] = useState('');
    const [showFilterSection, setShowFilterSection] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    useEffect(() => {
        const fetchCitas = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:3000/api/citas/all');
                setCitas(response.data);
            } catch (error) {
                console.error('Error al obtener citas:', error);
            }
        };
        fetchCitas();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:3000/api/citas/${id}`);
            setCitas(citas.filter(cita => cita._id !== id));
            setAlertMessage('La cita ha sido eliminada correctamente.');
            setAlertOpen(true);
            setTimeout(() => {
                setAlertOpen(false);
            }, 3000);
        } catch (error) {
            console.error('Error al eliminar cita:', error);
        }
    };

    const handleEdit = async (id) => {
        window.location.href = `/editar/${id}`;
    };

    const generarPDF = () => {
        const input = document.getElementById('tabla-citas');

        // Eliminar los botones de acción antes de capturar la tabla
        const botonesAccion = input.getElementsByClassName('btn-accion');
        for (let boton of botonesAccion) {
            boton.style.display = 'none';
        }

        html2canvas(input, {
            scale: 2,
            logging: true,
            windowWidth: document.getElementById('tabla-citas').scrollWidth,
            windowHeight: document.getElementById('tabla-citas').scrollHeight
        })
        .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 210;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

            // Restaurar la visibilidad de los botones de acción después de capturar la tabla
            for (let boton of botonesAccion) {
                boton.style.display = 'table-cell';
            }

            const pdfUrl = pdf.output('bloburl');
            setPreviewUrl(pdfUrl);
            setShowPreview(true);
        });
    };

    const closePreview = () => {
        setShowPreview(false);
        setPreviewUrl('');
    };

    const downloadPDF = () => {
        const a = document.createElement('a');
        a.href = previewUrl;
        a.download = 'citas.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    // Función para formatear la fecha a YYYY-MM-DD
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleClearFilter = (filterSetter) => {
        filterSetter('');
    };

    const filteredCitas = citas.filter(cita =>
        cita.nombre_y_apellido.toLowerCase().includes(pacienteFilter.toLowerCase()) &&
        cita.especialidades_consultadas.toLowerCase().includes(especialidadFilter.toLowerCase()) &&
        (fechaFilter ? formatDate(new Date(cita.fecha_consulta)) === fechaFilter : true)
    );

    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlertOpen(false);
    };

    return (
        <div className="container" style={{ textAlign: 'center', padding: '30px' }}>
            <h1>Reporte de Citas agendadas</h1>
            <div>
            <button className="btn btn-secondary mb-2" style={{ marginRight: '5px', backgroundColor: 'purple', borderColor: 'purple' }}>
                <Link to={'/home'} style={{ color: '#fff', textDecoration: 'none' }}>
                    Volver a Inicio
                </Link>
            </button>
            <button className="btn btn-secondary mb-2" style={{ marginRight: '5px', backgroundColor: 'purple', borderColor: 'purple' }} onClick={generarPDF}>
                Vista Previa del Reporte
            </button>
            <button className="btn btn-secondary mb-2" style={{ marginLeft: '0px', backgroundColor: 'purple', borderColor: 'purple' }} onClick={() => setShowFilterSection(!showFilterSection)}>
                Filtrar
            </button>
            {showFilterSection && (
                <div className="form-group">
                    <div className="input-group mb-2" style={{ fontSize: '0.8rem' }}>
                        <input type="text" className="form-control" placeholder="Filtrar por paciente" value={pacienteFilter} onChange={(e) => setPacienteFilter(e.target.value)} style={{ width: '80%' }} />
                        {pacienteFilter && (
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button" onClick={() => handleClearFilter(setPacienteFilter)}>
                                    <RefreshIcon /> {/* Aquí agregamos el icono de refresh */}
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="input-group mb-2" style={{ fontSize: '0.8rem' }}>
                        <input type="text" className="form-control" placeholder="Filtrar por especialidad" value={especialidadFilter} onChange={(e) => setEspecialidadFilter(e.target.value)} style={{ width: '80%' }} />
                        {especialidadFilter && (
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button" onClick={() => handleClearFilter(setEspecialidadFilter)}>
                                    <RefreshIcon /> {/* Aquí agregamos el icono de refresh */}
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="input-group mb-2" style={{ fontSize: '0.8rem' }}>
                        <input type="date" className="form-control" placeholder="Filtrar por fecha" value={fechaFilter} onChange={(e) => setFechaFilter(e.target.value)} style={{ width: '80%' }} />
                        {fechaFilter && (
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button" onClick={() => handleClearFilter(setFechaFilter)}>
                                    <RefreshIcon /> {/* Aquí agregamos el icono de refresh */}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            </div>
            <table id="tabla-citas" className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Nro.</th> 
                        <th scope="col">Paciente</th>
                        <th scope="col">Cedula</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Teléfono</th>
                        <th scope="col">Especialidades Consultadas</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Hora</th>
                        <th scope="col">Correo</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCitas.map((cita, index) => (
                        <tr key={cita._id} style={{ verticalAlign: 'middle' }}>
                            <td>{index + 1}</td> 
                            <td>{cita.nombre_y_apellido}</td>
                            <td>{cita.CIN}</td>
                            <td>{cita.edad}</td>
                            <td>{cita.telefono}</td>
                            <td>{cita.especialidades_consultadas}</td>
                            <td>{new Date(cita.fecha_consulta).toLocaleDateString()}</td>
                            <td>{cita.hora_consulta}</td>
                            <td>{cita.correo_paciente}</td>
                            <td className="btn-accion">
                                <button className="btn btn-danger" style={{ marginRight: '5px', borderRadius: '10px' }} onClick={() => handleDelete(cita._id)}>
                                    <DeleteIcon />
                                </button>
                                <button className="btn btn-primary" style={{ borderRadius: '10px' }}>
                                    <Link to={`/editar/${cita._id}`} style={{ color: '#fff', textDecoration: 'none' }}>
                                        <EditIcon />
                                    </Link>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Snackbar open={alertOpen} autoHideDuration={3000} onClose={handleCloseAlert} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={handleCloseAlert} severity="success">
                    {alertMessage}
                </Alert>
            </Snackbar>
            {showPreview && (
                <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 999 }}>
                    <div className="modal-dialog" style={{ margin: '10% auto', maxWidth: 'calc(800px + 20%)' }}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Vista Previa del Reporte</h5>
                                <button type="button" className="close" onClick={closePreview}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <iframe src={previewUrl} style={{ width: '100%', height: '500px', border: 'none' }}></iframe>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={downloadPDF}>Descargar Reporte</button>
                                <button type="button" className="btn btn-secondary" onClick={closePreview}>Cerrar Vista Previa</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VisualizarCitas;
