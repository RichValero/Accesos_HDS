export const FormLayout = ({ title, label, children }) => {
  return (
    <section className="pt-5 min-h-screen mx-auto max-w-xl">
      <div className="flex flex-col justify-center items-center ring-1 ring-gray-300 rounded-xl p-8">
        <legend className="text-2xl font-bold text-center text-primary">
          {title}
        </legend>
        <h2 className="text-md font-semibold text-center py-2">{label}</h2>
        <div className="w-full">{children}</div>
      </div>
    </section>
  );
};
