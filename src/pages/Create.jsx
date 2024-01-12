import React, { useState } from "react";
import ItemListCreater from "../components/ItemListCreater";
import { Link } from "react-router-dom";

function Create() {
  const [items, setItems] = useState([
    {
      id: Math.random() * new Date(),
      itemName: "",
      qty: 0,
      prive: 0,
      total: 0,
    },
  ]);
  console.log(items);

  const addNewItem = () => {
    setItems((prev) => {
      return [
        ...prev,
        {
          id: Math.random() * new Date(),
          itemName: "",
          qty: 0,
          prive: 0,
          total: 0,
        },
      ];
    });
  };

  const handleDelete = (id) => {
    setItems((prev) => {
      return prev.filter((item) => {
        return item.id !== id;
      });
    });
  };
  return (
    <div className="container">
      <h1>New Invoice</h1>

      <Link to="/" className="btn">
        Back
      </Link>

      <form>
        <p>Bill From</p>
        <label>
          <p>Street Address</p>
          <input type="text" />
        </label>
        <div>
          <label>
            <p>City</p>
            <input type="text" />
          </label>
          <label>
            <p>Post Code</p>
            <input type="text" />
          </label>
          <label>
            <p>Country</p>
            <input type="text" />
          </label>
        </div>
        <div>
          <p>Bill To</p>
          <label>
            <p>Client's Name</p>
            <input type="text" />
          </label>
          <label>
            <p>Client's Email</p>
            <input type="text" />
          </label>
          <label>
            <p>Street Address</p>
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            <p>City</p>
            <input type="text" />
          </label>
          <label>
            <p>Post Code</p>
            <input type="text" />
          </label>
          <label>
            <p>Country</p>
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            <p>Project Description</p>
            <input type="text" />
          </label>
        </div>
        <div>
          <p>Item List</p>

          <div className="flex flex-col gap-4">
            {items.map((item) => {
              return (
                <ItemListCreater
                  key={item.id}
                  handleDelete={handleDelete}
                  id={item.id}
                />
              );
            })}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              addNewItem();
              console.log(1);
            }}
            className="btn bg-true-lavender"
          >
            Add New Item
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
