import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

function ItemListCreater({ id, handleDelete }) {
  return (
    <div key={id} className="flex gap-4 items-center">
      <input type="text" className="input border-stoic-white" />
      <input type="number" className="input border-stoic-white max-w-[70px]" />
      <input type="number" className="input border-stoic-white" />
      <p>Total</p>
      <button onClick={() => handleDelete(id)}>
        <FaRegTrashAlt />
      </button>
    </div>
  );
}

export default ItemListCreater;
