export const TableLayout = ({ children }) => {
  return (
    <section className="w-full">
      <div className="shadow ring-1 ring-black ring-opacity-5 bg-white rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300">
          {children}
        </table>
      </div>
    </section>
  );
};

export const TableHeader = ({ children }) => {
  return (
    <thead>
      <tr className="bg-primary text-white">{children}</tr>
    </thead>
  );
};

export const TableHeaderCell = ({ children }) => {
  return <th className="py-3 px-4 text-center">{children}</th>;
};

export const TableBody = ({ children }) => {
  return <tbody className="divide-y divide-gray-200">{children}</tbody>;
};

export const TableCell = ({ children }) => {
  return (
    <td className="whitespace-nowrap py-4 px-4 text-center">{children}</td>
  );
};
