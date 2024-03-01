import React from 'react';

import Dexie from 'dexie';
import { useLiveQuery } from 'dexie-react-hooks';
import LabelSwitch from '../utils/labelsSwitch';
import CloseBtn from '../icons/close.js';

function Monthly() {
  const db = new Dexie('llatDB');
  db.version(1).stores({
    transact: '++id,amount,store,label',
  });

  const allItems = useLiveQuery(() => db.transact.toArray(), []);
  if (!allItems) return null;

  const addItemToDb = async (event) => {
    event.preventDefault();
    const amount = document.querySelector('.item-price').value;
    const store = document.querySelector('.item-store').value;
    const label = document.querySelector('.item-label').value;
    await db.transact.add({ amount, store, label });
  };

  const removeItemFromDb = async (id) => {
    if (window.confirm('Do you want to delete this transaction?')) {
      await db.transact.delete(id);
    }
  };

  const clearBtn = async () => {
    if (window.confirm('Do you want to clear all tranactions')) {
      await db.transact.clear();
    }
  };

  function TotalUp() {
    let number = 0;

    for (const trans of allItems) {
      number += parseFloat(trans.amount);
    }
    number = process.env.REACT_APP_SPEND_INCOME - number;
    number = number <= 0 ? 0 : number;
    return number;
  }

  return (
    <div className="bg-lite min-h-screen w-1/2">
      <div className="p-3 border-b-2 border-dark flex justify-between items-center">
        <div>
          <h2 className="fancy text-2xl text-dark inline-block">Monthly</h2>
          {TotalUp() <= 0 ? (
            <span className="text-red-900 font-bold uppercase text-lg">
              {' '}
              Over Budget
            </span>
          ) : null}
        </div>

        <p className="font-semibold text-xl">
          <span className="text-secondary">
            $<TotalUp />{' '}
          </span>
          |{' '}
          <span className="text-green-600">
            ${process.env.REACT_APP_SPEND_INCOME}
          </span>
        </p>
      </div>
      {allItems.length > 0 ? (
        allItems.map((item) => (
          <div className="flex items-center gap-2" key={item.id}>
            <p className="my-4 pl-4 text-xl">
              ${item.amount} {item.store} {LabelSwitch(item.label)}
            </p>
            <button
              onClick={() => removeItemFromDb(item.id)}
              type="button"
              aria-labelledby="delete"
              className="cursor-pointer"
            >
              <CloseBtn />
            </button>
          </div>
        ))
      ) : (
        <p className="my-4 pl-4 text-2xl text-secondary">No added items</p>
      )}

      <h3 className="border-b-2 border-dark fancy block mb-8 mt-3 p-3 text-dark text-2xl ">
        Add a New Transaction
      </h3>
      <form
        className="add-item-form pl-4 block"
        onSubmit={(event) => addItemToDb(event)}
      >
        <input
          type="text"
          className="item-store border border-gray-900 block w-11/12 p-2 my-4 text-xl"
          placeholder="Store Name"
          required
        />
        <input
          type="number"
          step=".01"
          className="item-price border border-gray-900 block w-11/12 p-2 my-4 text-xl"
          placeholder="Price"
          required
        />
        <select className="item-label border border-gray-900 block w-11/12 p-2 my-4 text-xl">
          <option value="1">Food</option>
          <option value="2">Gas</option>
          <option value="3">Services</option>
          <option value="4">Misc.</option>
        </select>
        <button
          type="submit"
          className="bg-gray-900 text-white uppercase px-2 py-3 w-11/12 text-xl "
        >
          Add New transaction
        </button>
      </form>

      {allItems.length > 0 ? (
        <>
          <h3 className="border-b-2 border-dark fancy block mt-8 p-3 text-dark text-xl ">
            Remove All Transactions at End Of Month
          </h3>
          <p className="text-dark mt-0 uppercase text-sm ml-4 mt-2 mb-5">
            Auto clear coming soon.
          </p>
          <button
            onClick={() => clearBtn()}
            type="button"
            aria-labelledby="delete"
            className="cursor-pointer bg-red-900 text-white uppercase py-2 px-3 ml-4 mb-5 text-xl"
          >
            Clear all transactions
          </button>
        </>
      ) : null}
    </div>
  );
}

export default Monthly;
