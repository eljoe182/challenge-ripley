import React from 'react';
import bankIcon from '../assets/img/bank.svg';
import ButtonHeaderComponent from './ButtonHeaderComponent';

const HeaderComponent = (props) => {
  return (
    <nav className="bg-gray-400">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>

              {/* <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>

              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg> */}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img className="block lg:hidden h-8 w-auto" src={bankIcon} alt="Workflow" />
              <img className="hidden lg:block h-8 w-auto" src={bankIcon} alt="Workflow" />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <ButtonHeaderComponent href="/" >
                  Home
                </ButtonHeaderComponent>
                <ButtonHeaderComponent href="/register_account" >
                  Nuevo Destinatario
                </ButtonHeaderComponent>
                <ButtonHeaderComponent href="/transfer" >
                  Transferir
                </ButtonHeaderComponent>
                <ButtonHeaderComponent href="/transactions" >
                  Historial
                </ButtonHeaderComponent>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">

          {/* <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</a>

          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Nuevo Destinatario</a>

          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Transferir</a>

          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Historial</a> */}
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
