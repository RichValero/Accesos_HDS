import React from "react";
import DataField from "./DataField";

const DataSection = ({ title, fields }) => {
  return (
    <div>
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <dl className="mt-2 text-md">
        {fields.map(({ label, value }, index) => (
          <DataField key={index} label={label} value={value} />
        ))}
      </dl>
    </div>
  );
};

export default DataSection;
