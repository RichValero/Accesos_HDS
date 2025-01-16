import React from "react";
import ExpandedRowContent from "./ExpandedContent";
import { formatDate } from "../../utils/constants/FormatDate";
import { Download, Eye, Pencil, Trash2 } from "lucide-react";

export const TableRow = ({ row, isExpanded, onToggleExpand, isLoading }) => {
  return (
    <>
      <tr className="divide-y divide-gray-200 text-center hover:bg-slate-100 font-poppins">
        <td className="px-6 py-4 whitespace-nowrap">{row.id}</td>
        <td className="px-6 py-4 whitespace-nowrap capitalize">
          {row.fullname}
        </td>
        <td className="px-6 py-4 whitespace-nowrap ">{row.email}</td>
        <td className="px-6 py-4 whitespace-nowrap">{row.department}</td>
        <td className="px-6 py-4 whitespace-nowrap ">
          {formatDate(row.created_at)}
        </td>
        <td className="px-6 py-4 whitespace-nowrap ">
          <div className="bg-green-300 text-green-700 rounded-md font-semibold">
            Activo
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap flex gap-2 items-center justify-center ">
          <Pencil
            strokeWidth={2}
            color="#ededed"
            className="rounded-xl p-1 cursor-pointer bg-[#238c2f] hover:bg-[#2db63d] shadow-md"
            size={30}
          />
          <Eye
            strokeWidth={2}
            color="#ededed"
            onClick={() => {
              onToggleExpand(row.id);
            }}
            className={`rounded-xl p-1 cursor-pointer hover:bg-[#2474f3] shadow-md ${
              isExpanded ? "bg-[#2474f3]" : "bg-[#275eb6]"
            }`}
            size={30}
          />

          <Download
            strokeWidth={2}
            color="#ededed"
            className="rounded-xl p-1 cursor-pointer bg-[#5e5e5e] hover:bg-[#919191] shadow-md"
            size={30}
          />
          <Trash2
            strokeWidth={2}
            color="#ededed"
            className="bg-[#a41d1d] rounded-xl p-1 cursor-pointer hover:bg-[#d42c2c] shadow-md"
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
