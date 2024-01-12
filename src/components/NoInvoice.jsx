import React from "react";
import woman from "../assets/illustration-empty.svg";

function NoInvoice() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-10">
      <img src={woman} alt="" />
      <div className="flex flex-col gap-6">
        <h2 className="text-ruined-smores font-bold text-[20px]">
          There is nothing here
        </h2>
        <div className="text-papilio-argeotus flex flex-col items-center">
          <p className="mb-[-5px]">Create an invoice by clicking the</p>
          <p>
            <span className="font-bold">New</span> button and get started
          </p>
        </div>
      </div>
    </div>
  );
}

export default NoInvoice;
