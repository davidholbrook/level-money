import React, { useState } from 'react';
import Dexie from 'dexie';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icons from '../icons/icons';

function AddToDb({ remove }) {
  const [obstore, setObstore] = useState(1);

  const db = new Dexie('llatDB');
  const db1 = new Dexie('llatSP');
  db.version(1).stores({
    transact: '++id,amount,store,label',
  });

  db1.version(1).stores({
    transact: '++id,amount,store,label',
  });

  const addItemToDb = async (event) => {
    event.preventDefault();
    const amount = document.querySelector('.item-price').value;
    const store = document.querySelector('.item-store').value;
    const label = document.querySelector('.item-label').value;
    (await (obstore === 0))
      ? db.transact.add({ amount, store, label })
      : db1.transact.add({ amount, store, label });
    remove();
  };

  window.addEventListener('keydown', (e) => {
    console.log(e.key);
    if (e.key === 'Escape') remove();
  });

  return (
    <Modal onClick={remove}>
      <InnerModal onClick={(e) => e.stopPropagation()}>
        <h2 className="text-4xl text-center text-dark">Add Transaction</h2>
        <hr className="my-5 border-b border-gray-200" />
        <h3 className="text-sm text-center text-dark uppercase my-2">
          Which type of transaction is it?
        </h3>
        <div className="bg-darkgrey rounded-full flex justify-between py-2 mx-10">
          <button
            type="button"
            onClick={() => {
              const dd = 0;
              setObstore(dd);
            }}
            className={
              obstore === 0
                ? `bg-white px-6 mx-3 rounded-full font-bold text-darkgrey uppercase`
                : `text-white pl-5 uppercase font-bold`
            }
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => {
              const dd = 1;
              setObstore(dd);
            }}
            className={
              obstore === 1
                ? `bg-white px-6 mx-3 rounded-full font-bold text-darkgrey uppercase`
                : `text-white pr-5 uppercase font-bold`
            }
          >
            Special
          </button>
        </div>
        <hr className="my-5 border-b border-gray-200" />
        <h3 className="text-sm text-center text-dark uppercase my-2">
          Enter transaction
        </h3>
        <form
          className="add-item-form pl-4 block"
          onSubmit={(e) => addItemToDb(e)}
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

export default AddToDb;

AddToDb.propTypes = {
  remove: PropTypes.func,
};

const Modal = styled.div`
  display: grid;
  background: rgba(71, 106, 111, 0.8);
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
`;

const InnerModal = styled.div`
  width: 500px;
  padding: 5rem;
  border-radius: 5px;
  min-height: 200px;
  background: white;
  border: 1px solid black;
  box-shadow: 0 0 38px rgba(0, 0, 0, 0.2);
  position: relative;
`;
