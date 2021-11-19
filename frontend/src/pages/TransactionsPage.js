import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import ContainerComponent from '../components/ContainerComponent';
import { index } from '../api/transactions.api'

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);

  const getData = async () => {
    toast.promise(
      index(),
      {
        loading: 'Cargando información',
        success: (response) => {
          const { data } = response;
          console.log(data);
          setTransactions(data)
        },
        error: (error) => `${error.toString()}`,
      },
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ContainerComponent title="Histórico de transacciones" icon='transactions'>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nombre destinatario
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      RUT
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Banco
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tipo de cuenta
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Monto
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {
                    transactions.map(item => (
                      <tr key={item.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.transfer.accountBook.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.transfer.accountBook.rut}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.bankName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.transfer.accountBook.accountType.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          {item.amount}
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </ContainerComponent>
  );
};

export default TransactionsPage;
