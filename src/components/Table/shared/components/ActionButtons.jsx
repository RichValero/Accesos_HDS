import { Eye, Pencil, Trash2 } from "lucide-react";

export const ActionButtons = ({ onEdit, onView, onDelete }) => {
  return (
    <div className="flex justify-center items-center gap-2">
      <Pencil
        strokeWidth={2}
        color="#ededed"
        onClick={onEdit}
        className="rounded-xl p-1 cursor-pointer bg-[#238c2f] hover:bg-[#2db63d] shadow-md"
        size={30}
      />

      <Eye
        strokeWidth={2}
        color="#ededed"
        onClick={onView}
        className="rounded-xl p-1 cursor-pointer bg-[#275eb6] hover:bg-[#2474f3] shadow-md"
        size={30}
      />
      <Trash2
        strokeWidth={2}
        color="#ededed"
        onClick={onDelete}
        className="bg-[#a41d1d] rounded-xl p-1 cursor-pointer hover:bg-[#d42c2c] shadow-md"
        size={30}
      />
    </div>
  );
};
