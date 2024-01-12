import React from "react";
import iconDown from "../assets/icon-arrow-down.svg";

import { useFetch } from "../hooks/useFetch";

import { Link } from "react-router-dom";
import InvoiceList from "../components/InvoiceList";
import NoInvoice from "../components/NoInvoice";

function Home() {
  const { data, isPending, error } = useFetch("http://localhost:2000/data");
  console.log(data);
  return (
    <div className="container flex flex-col h-full">
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-[20px] md:text-3xl">Invoices</h1>
          <p className="text-[12px] font-medium text-papilio-argeotus">
            {data
              ? data.length > 0
                ? `There are ${data ? data.length : 0} total invoices`
                : "No Invoices"
              : "No Invoices"}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="m-1 font-bold text-[15px] flex items-center gap-[15px]"
            >
              <p>Filter</p>
              <img src={iconDown} alt="" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          {
            <Link
              to="/create"
              className="bg-slate-blue flex items-center p-4 btn rounded-full text-white"
            >
              <p>New</p>
            </Link>
          }
        </div>
      </div>
      {data ? !data.length ? <NoInvoice /> : "" : ""}
      {data && <InvoiceList data={data} />}
    </div>
  );
}

export default Home;
