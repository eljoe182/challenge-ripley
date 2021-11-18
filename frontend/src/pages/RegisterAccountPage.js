import React, { useEffect, useState } from 'react';
import ContainerComponent from '../components/ContainerComponent';
import { create, store } from '../api/accountBook.api'
import ValidateRut from '../utils/rut'

const RegisterAccountPage = () => {
  const [banks, setBanks] = useState([]);
  const [rutIsValid, setRutIsValid] = useState(true);
  const [accountType, setAccountType] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    rut: '',
    email: '',
    phone: '',
    bank: '',
    accountType: '',
    accountNumber: '',
  });

  const getData = async () => {
    await create()
      .then((response) => {
        const { resources } = response;
        setBanks(resources.banks);
        setAccountType(resources.accountType);
      })
      .catch(error => console.log(error));
  }

  useEffect(() => {
    if (banks.length === 0) {
      getData();
    }
  }, [banks, accountType])

  const handleOnChange = (el) => {
    const { value, name } = el.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleOnBlur = (el) => {
    setRutIsValid(ValidateRut(el.target.value));
  }

  const handleSubmit = async (el) => {
    el.preventDefault();
    await store(formData).then((response) => {
      console.log(response);
    }).catch((error) => {console.log(error)});
  }

  return (
    <ContainerComponent title="Nuevo destinatario" icon="account">
      <div className="grid grid-cols-3 gap-4">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST" onSubmit={handleSubmit}>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="ej. Pedro Pérez"
                      maxLength="120"
                      minLength="5"
                      required
                      onChange={handleOnChange}
                      className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="rut" className="block text-sm font-medium text-gray-700">RUT</label>
                    <input
                      type="text"
                      name="rut"
                      id="rut"
                      placeholder="ej. 11222333-K"
                      maxLength="20"
                      minLength="8"
                      required
                      onChange={handleOnChange}
                      onBlur={handleOnBlur}
                      className={
                        (rutIsValid) ? "mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" :
                          "mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-red-400 rounded-md"
                      }
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="ej. usuario@servidor.ltd"
                      maxLength="120"
                      minLength="8"
                      required
                      onChange={handleOnChange}
                      className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="ej. +56912341234"
                      maxLength="20"
                      minLength="8"
                      required
                      onChange={handleOnChange}
                      className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="bank" className="block text-sm font-medium text-gray-700">Banco</label>
                    <select
                      id="bank"
                      name="bank"
                      required
                      onChange={handleOnChange}
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                      <option>--Seleccione--</option>
                      {
                        banks.map(item => (
                          <option key={item.id} value={item.id}>{item.name}</option>
                        ))
                      }
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="accountType" className="block text-sm font-medium text-gray-700">Tipo de cuenta</label>
                    <select
                      id="accountType"
                      name="accountType"
                      required
                      onChange={handleOnChange}
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                      <option>--Seleccione--</option>
                      {
                        accountType.map(item => (
                          <option key={item.id} value={item.id}>{item.name}</option>
                        ))
                      }
                    </select>
                  </div>

                  <div className="col-span-3">
                    <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">Nº de Cuenta</label>
                    <input
                      type="text"
                      name="accountNumber"
                      id="accountNumber"
                      placeholder="ej. 99999999"
                      maxLength="20"
                      minLength="8"
                      required
                      onChange={handleOnChange}
                      className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </ContainerComponent>
  );
};

export default RegisterAccountPage;
