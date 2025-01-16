import React from "react";

const DataField = ({ label, value }) => {
  return (
    <div className="pt-2">
      <dt className="font-medium text-gray-700 ">{label}</dt>
      <dd className="py-2 font-sans">{value}</dd>
    </div>
  );
};

export default DataField;
