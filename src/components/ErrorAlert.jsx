import React from 'react';
import errorGif from '../assets/palta.png'; // Asegúrate de tener un gif

const ErrorAlert = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-red-100 border border-red-400 text-red-700 p-6 rounded-lg shadow-lg max-w-sm text-center animate-fadeIn">
        <img src={errorGif} alt="Error" className="w-24 h-24 mx-auto mb-4" />
        <p className="mb-4">{message}</p>
        <button
          onClick={onClose}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Entendido
        </button>
      </div>
    </div>
  );
};

export default ErrorAlert;
