import React from "react";
import { contactList } from "../utils/constants";

const Contacts = () => {
  return (
    <div className="flex flex-1 text-center p-10">
      <div className=" group block max-w-md mx-auto rounded-lg p-10 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-6">
        {contactList.map((contact, index) => (
          <div key={index} className="flex flex-col justify-center">
            <p className="text-primary font-bold text-2xl">{contact.title}</p>
            <p className="text-primary font-semibold text-xl">
              {contact.subtitle}
            </p>
            <p className="text-primary font-semibold text-xl">
              {contact.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
