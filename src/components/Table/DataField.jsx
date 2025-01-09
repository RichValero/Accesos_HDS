import React from "react";

const DataField = ({ label, value }) => {
  return (
    <div className="mt-2">
      <dt className="font-medium text-gray-700 font-montserrat ">{label}</dt>
      <dd className="mt-3 font-sans">{value}</dd>
    </div>
  );
};

export default DataField;
