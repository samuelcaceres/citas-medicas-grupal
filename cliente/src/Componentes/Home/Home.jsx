import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Bienvenido</h1>
       <div>
            <Link to="/crear">
            <button>Agendar</button>
            </Link>
        </div> 
        <div>
            <Link to="/editar/:id"> 
            <button>Editar</button>
            </Link>
        </div>
        <div>
            <Link to="/details/:id"> 
            <button>Ver</button>
            </Link>
        </div>
    </div>
  );
}

export default Home;
