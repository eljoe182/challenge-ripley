import React, { useEffect, useState } from 'react';
import ContainerComponent from '../components/ContainerComponent';
import { create, store } from '../api/transfer.api'

const TransferPage = () => {
  const [formData, setFormData] = useState({
    account: '',
    amount: 0,
    bankName: ''
  });
  const [accounts, setAccounts] = useState([]);
  const [banks, setBanks] = useState([]);
  const [accountSelected, setAccountSelected] = useState({
    name: '',
    email: '',
    phone: '',
    bankName: '',
    accountType: ''
  });

  const getData = async () => {
    await create().then((response) => {
      const { accountBook, banks: listBanks } = response.resources;
      setAccounts(accountBook);
      setBanks(listBanks);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleOnChange = (el) => {
    const { value, name, tagName } = el.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (tagName === 'SELECT') {
      findInformation(value);
    };
  };

  const findInformation = (id) => {
    const { name, email, phone, bankId, accountType } = accounts.filter(item => item.id === Number(id))[0];
    const { name: bankName } = banks.filter(item => item.id === bankId)[0];
    setAccountSelected({ name, email, phone, bankName, accountType: accountType.name });
  };

  const handleSubmit = async (el) => {
    el.preventDefault();
    await store({
      ...formData,
      bankName: accountSelected.bankName
    });
  };

  return (
    <ContainerComponent title="Transferir" icon="transfer">
      <div className="grid grid-cols-4 gap-1">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST" onSubmit={handleSubmit}>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <div className="grid grid-cols-12 gap-1">
                      <div className="col-span-12">
                        <label htmlFor="account" className="block text-sm font-medium text-gray-700">Destinatario</label>
                        <select
                          id="account"
                          name="account"
                          onChange={handleOnChange}
                          required
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        >
                          <option>--Seleccione--</option>
                          {
                            accounts.map(item => (
                              <option key={item.id} value={item.id}>{item.name}</option>
                            ))
                          }
                        </select>
                      </div>
                      <div className="col-span-12">
                        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Monto</label>
                        <input
                          type="number"
                          name="amount"
                          id="amount"
                          onChange={handleOnChange}
                          required
                          className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <div>Detalle del destinatario</div>
                    <div>Nombre: <small className="text-gray-400">{accountSelected.name}</small></div>
                    <div>Correo: <small className="text-gray-400">{accountSelected.email}</small></div>
                    <div>Banco: <small className="text-gray-400">{accountSelected.bankName}</small></div>
                    <div>Tipo de cuenta: <small className="text-gray-400">{accountSelected.accountType}</small></div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Transferir
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </ContainerComponent>
  );
};

export default TransferPage;
