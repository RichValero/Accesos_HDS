import React from "react";
import ExpandedRowContent from "./ExpandedContent";
import { formatDate } from "../../utils/constants/FormatDate";
import { Download, Eye, Pencil, Trash2 } from "lucide-react";

export const TableRow = ({ row, isExpanded, onToggleExpand, isLoading }) => {
  return (
    <>
      <tr className="even:bg-white odd:bg-slate-100 even:shadow-sm text-center">
        <td className="px-6 py-4 whitespace-nowrap tablerow">{row.id}</td>
        <td className="px-6 py-4 whitespace-nowrap tablerow capitalize">
          {row.fullname}
        </td>
        <td className="px-6 py-4 whitespace-nowrap tablerow">{row.email}</td>
        <td className="px-6 py-4 whitespace-nowrap tablerow">
          {row.department}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          {formatDate(row.created_at)}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">Activo</td>
        <td className="px-3 py-4 whitespace-nowrap flex gap-2 ">
          <Pencil
            strokeWidth={2}
            color="#ededed"
            className="rounded-xl p-1 cursor-pointer hover:bg-green-900 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-800  to-sky-600 "
            size={30}
          />
          <Trash2
            strokeWidth={2}
            color="#ededed"
            className="bg-red-600 rounded-xl p-1 cursor-pointer hover:bg-red-900 shadow-md shadow-red-300"
            size={30}
          />
          <Eye
            strokeWidth={2}
            color="#ededed"
            onClick={() => {
              onToggleExpand(row.id);
            }}
            className={`rounded-xl p-1 cursor-pointer hover:bg-blue-900 ${
              isExpanded ? "bg-blue-900" : "bg-blue-600"
            }`}
            size={30}
          />

          <Download
            strokeWidth={2}
            color="#ededed"
            className="rounded-xl p-1 cursor-pointer bg-slate-600 hover:bg-slate-900"
            size={30}
          />
        </td>
      </tr>
      {isExpanded && (
        <tr key={`expanded-${row.id}`}>
          <ExpandedRowContent userData={row} isLoading={isLoading} />
        </tr>
      )}
    </>
  );
};
