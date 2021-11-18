import React from 'react';
import { Link } from 'react-router-dom';
import { UserAddIcon, SwitchHorizontalIcon, CollectionIcon } from '@heroicons/react/solid'
import ContainerComponent from '../components/ContainerComponent';

const HomePage = () => {
  return (
    <ContainerComponent title="Home Page" >
      <div className="flex flex-row" >
        <div className="flex-1 mx-4 shadow-lg p-4 bg-white text-center transition duration-500 ease-in-out opacity-75 transform hover:-translate-y-1 hover:scale-110 hover:opacity-100">
          <Link to="/register_account">
            <span><UserAddIcon /> Nuevo Destinatario</span>
          </Link>
        </div>
        <div className="flex-1 mx-4 shadow-lg p-4 bg-white text-center transition duration-500 ease-in-out opacity-75 transform hover:-translate-y-1 hover:scale-110 hover:opacity-100">
          <Link to="/transfer" >
            <span><SwitchHorizontalIcon /> Transferir</span>
          </Link>
        </div>
        <div className="flex-1 mx-4 shadow-lg p-4 bg-white text-center transition duration-500 ease-in-out opacity-75 transform hover:-translate-y-1 hover:scale-110 hover:opacity-100">
          <Link to="/transactions" >
            <span><CollectionIcon /> Historial</span>
          </Link>
        </div>
      </div>
    </ContainerComponent>
  );
};

export default HomePage;
