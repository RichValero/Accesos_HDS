export const SuccessModal = ({ onClose, isOpen }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-center text-2xl font-bold text-green-600 mb-4">
          Registro completado
        </h2>
        <p className="mb-4 font-poppins">
          El registro se ha completado con éxito
        </p>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={onClose}
            className="bg-primary rounded-md text-white font-semibold px-4 py-1"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
