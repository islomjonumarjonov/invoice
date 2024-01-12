import React from "react";
import { Link } from "react-router-dom";

function InvoiceList({ data }) {
  return (
    <div className="mt-8 bg-pearl-white">
      <ul className="flex flex-col gap-4">
        {data.map((invoice) => {
          return (
            <li key={invoice.id} className="bg-[#fff] p-6 rounded">
              <Link
                to="/singleInvoice"
                className="md:flex md:justify-between items-center"
              >
                <div className="flex justify-between mb-6 md:m-0 text-md md:gap-[27px]">
                  <h2 className="text-ruined-smores font-bold">
                    <span className="text-true-lavender">#</span>
                    {invoice.id}
                  </h2>
                  <p className="text-[#858BB2]">{invoice.clientName}</p>
                </div>
                <div className="flex justify-between items-center md:gap-8">
                  <div className="flex flex-col md:flex-row md:gap-10">
                    <p className="text-papilio-argeotus">
                      Due {invoice.paymentDue.slice(8, 11)}{" "}
                      {invoice.paymentDue.slice(5, 7) == "01"
                        ? "Jan"
                        : invoice.paymentDue.slice(5, 7) == "02"
                        ? "Feb"
                        : invoice.paymentDue.slice(5, 7) == "03"
                        ? "Mar"
                        : invoice.paymentDue.slice(5, 7) == "04"
                        ? "Apr"
                        : invoice.paymentDue.slice(5, 7) == "05"
                        ? "May"
                        : invoice.paymentDue.slice(5, 7) == "06"
                        ? "Jun"
                        : invoice.paymentDue.slice(5, 7) == "07"
                        ? "Jul"
                        : invoice.paymentDue.slice(5, 7) == "08"
                        ? "Aug"
                        : invoice.paymentDue.slice(5, 7) == "09"
                        ? "Sep"
                        : invoice.paymentDue.slice(5, 7) == "10"
                        ? "Oct"
                        : invoice.paymentDue.slice(5, 7) == "11"
                        ? "Nov"
                        : invoice.paymentDue.slice(5, 7) == "12"
                        ? "Dec"
                        : ""}{" "}
                      {invoice.paymentDue.slice(0, 4)}
                    </p>
                    <p className="font-bold text-lg">£{invoice.total}</p>
                  </div>
                  <div
                    className={`rounded bg-opacity-[5.71%] ${
                      invoice.status === "paid"
                        ? "bg-[#33D69F]"
                        : invoice.status === "pending"
                        ? "bg-[#FF8F00]"
                        : invoice.status === "pending"
                        ? "bg-carbon-blue"
                        : ""
                    }`}
                  >
                    <p
                      className={`w-[104px] py-2 font-bold text-center ${
                        invoice.status === "paid"
                          ? "text-[#33D69F]"
                          : invoice.status === "pending"
                          ? "text-[#FF8F00]"
                          : invoice.status === "draft"
                          ? "text-carbon-blue"
                          : ""
                      }`}
                    >
                      • {invoice.status}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default InvoiceList;
