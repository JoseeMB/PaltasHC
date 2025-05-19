import React from 'react';
import successGif from '../assets/palta.png'; // Asegúrate de tener un gif

const SuccessAlert = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-green-100 border border-green-400 text-green-700 p-6 rounded-lg shadow-lg max-w-sm text-center animate-fadeIn">
        <img src={successGif} alt="Éxito" className="w-24 h-24 mx-auto mb-4" />
        <p className="whitespace-pre-line mb-4">{message}</p>
        <button
          onClick={onClose}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Entendido
        </button>
      </div>
    </div>
  );
};

export default SuccessAlert;
