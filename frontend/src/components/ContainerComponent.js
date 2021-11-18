import React from 'react';
import { UserAddIcon, SwitchHorizontalIcon, CollectionIcon } from '@heroicons/react/solid'

const ContainerComponent = (props) => {
  const iconTitle = (icon) => {
    switch (icon) {
      case 'account':
        return (<UserAddIcon className="h-16 w-16" />)
      case 'transfer':
        return (<SwitchHorizontalIcon className="h-16 w-16" />)
      case 'transactions':
        return (<CollectionIcon className="h-16 w-16" />)
      default:
        return null;
    }
  }

  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {
            props.icon && (
              <div class="relative">
                <div class="absolute -left-20 -bottom-12">
                  {iconTitle(props.icon)}
                </div>
              </div>
            )
          }
          <h1 className="text-3xl font-bold text-gray-900">
            {props.title}
          </h1>
        </div>
      </header>
      <main className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
          <div className="px-4 py-6 sm:px-0 h-screen">
            {props.children}
          </div>
        </div>
      </main>
    </>
  );
};

export default ContainerComponent;
