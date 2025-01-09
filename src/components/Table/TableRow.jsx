import React from "react";
import ExpandedRowContent from "./ExpandedContent";
import { formatDate } from "../../utils/constants/FormatDate";

export const TableRow = ({ row, isExpanded, onToggleExpand, isLoading }) => {
  return (
    <>
      <tr
        onClick={() => {
          onToggleExpand(row.id);
        }}
        className="cursor-pointer hover:bg-slate-200 even:bg-white odd:bg-slate-100 even:shadow-sm text-center"
      >
        <td className="px-6 py-4 whitespace-nowrap">{row.id}</td>
        <td className="px-6 py-4 whitespace-nowrap capitalize">
          {row.fullname}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">{row.email}</td>
        <td className="px-6 py-4 whitespace-nowrap">{row.department}</td>
        <td className="px-6 py-4 whitespace-nowrap">
          {formatDate(row.created_at)}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">Activo</td>
        <td className="px-6 py-4 whitespace-nowrap">Editar - Eliminar</td>
      </tr>
      {isExpanded && (
        <tr key={`expanded-${row.id}`}>
          <ExpandedRowContent userData={row} isLoading={isLoading} />
        </tr>
      )}
    </>
  );
};
