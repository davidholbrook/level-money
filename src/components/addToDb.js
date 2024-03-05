import React from 'react';
import Dexie from 'dexie';
import styled from 'styled-components';

export default function addToDb() {
  const db = new Dexie('llatDB');
  db.version(1).stores({
    transact: '++id,amount,store,label',
  });

  const addItemToDb = async (event) => {
    event.preventDefault();
    const amount = document.querySelector('.item-price').value;
    const store = document.querySelector('.item-store').value;
    const label = document.querySelector('.item-label').value;
    await db.transact.add({ amount, store, label });
  };

  const Modal = styled.div`
    display: grid;
    background: #999999;
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s;

    .open .modal-inner {
      transform: translateY(0);
    }
  `;

  const InnerModal = styled.div`
    max-width: 600px;
    min-width: 400px;
    padding: 2rem;
    border-radius: 5px;
    min-height: 200px;
    background: white;
    transform: translateY(-200%);
    transition: transform 2s;
  `;

  return (
    <Modal>
      <InnerModal>
        <h2>Add Transaction</h2>
        <p>Monthly</p>

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
      </InnerModal>
    </Modal>
  );
}
