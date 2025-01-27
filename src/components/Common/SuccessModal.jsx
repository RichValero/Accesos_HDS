export const SuccessModal = ({ onClose, isOpen }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Registro completado
        </h2>
        <p className="mb-4">El registro se ha completado con éxito</p>
        <button type="button" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};
