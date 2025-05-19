import React, { useState } from 'react';
import palta from '../../assets/palta.png';
import './Order.css'; 
import AnimatedPrice from '../../components/AnimatedPrice';
import SuccessAlert from '../../components/SuccessAlert';
import ErrorAlert from '../../components/ErrorAlert';

const Order = () => {
    const [quantity, setQuantity] = useState(0); // solo un número, no array
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrement = () => {
        setQuantity(prev => (prev > 0 ? prev - 1 : 0));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value.trim();
        const email = e.target.email.value.trim();

        if (!name) {
            setError('Por favor, ingresa tu nombre.');
            setSuccess('');
            return;
        }
        if (!email) {
            setError('Por favor, ingresa tu correo o teléfono.');
            setSuccess('');
            return;
        }
        if (quantity <= 0) {
            setError('La cantidad debe ser mayor a 0');
            setSuccess('');
            return;
        }

        // Aquí podrías hacer una solicitud real con fetch o axios
        console.log('Formulario enviado');
        setSuccess('Tu pedido fue enviado correctamente 🎉.\n Te contactaremos para recopilar más detalles');
        setError('');
        
        // (opcional) limpiar formulario:
        e.target.reset();
        setQuantity(0);
    };


    return (
        
        <div className="w-full">
            {success && (
            <SuccessAlert message={success} onClose={() => setSuccess('')} />
            )}
            {error && (
            <ErrorAlert message={error} onClose={() => setError('')} />
            )}

            <section className="bg-background text-text flex flex-col items-center justify-center h-screen animate-fadeIn">
                <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-6">
                Realiza tu pedido acá
                </h1>
                <div className="container px-4 mx-auto">
                    <div className="form max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
                        
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-800 mb-1" htmlFor="name">Tu Nombre</label>
                                <input
                                    className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300"
                                    placeholder="Ingresa tu nombre"
                                    type="text"
                                    id="name"
                                    name="name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-800 mb-1" htmlFor="email">Correo o Teléfono</label>
                                <input
                                    className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300"
                                    placeholder="Ingresa tu correo o número de teléfono"
                                    name="email"
                                    id="email"
                                    type="text"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="title block text-gray-800 mb-2">Carro</label>
                                <div className="product flex items-center gap-4">
                                    <img src={palta} alt="Palta" className="max-w-[40px]" />
                                    <div className="flex items-center gap-2">
                                        <button
                                        type="button"
                                        onClick={handleDecrement}
                                        title="Add New"
                                        className="group cursor-pointer outline-none hover:rotate-180 duration-300"
                                        >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25px"
                                            height="25px"
                                            viewBox="0 0 24 24"
                                            className="stroke-green-700 fill-none group-active:stroke-green-200 group-active:fill-green-600 group-active:duration-0 duration-300"
                                        >
                                            <path
                                            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                            strokeWidth="1.5"
                                            ></path>
                                            <path d="M8 12H16" strokeWidth="1.5"></path>
                                        </svg>
                                        </button>
                                        <span>{quantity} kg</span>
                                        
                                        <button
                                        type="button"
                                        onClick={handleIncrement}
                                        title="Add New"
                                        className="group cursor-pointer outline-none hover:rotate-180 duration-300"
                                        >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25px"
                                            height="25px"
                                            viewBox="0 0 24 24"
                                            className="stroke-green-700 fill-none group-active:stroke-green-200 group-active:fill-green-600 group-active:duration-0 duration-300"
                                        >
                                            <path
                                            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                            strokeWidth="1.5"
                                            ></path>
                                            <path d="M8 12H16" strokeWidth="1.5"></path>
                                            <path d="M12 16V8" strokeWidth="1.5"></path>
                                        </svg>
                                        </button>


                                    </div>
                                    <AnimatedPrice quantity={quantity} />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-800 mb-1" htmlFor="message">
                                    Mensaje (opcional)
                                </label>
                                <textarea
                                    className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300"
                                    rows="4"
                                    placeholder="Mensaje (opcional)"
                                    name="message"
                                    id="message"
                                ></textarea>
                            </div>
                            <button
                            className="w-full text-gray-800 py-2 px-4 rounded-lg transition duration-300 [background-color:var(--color-primary-dark)] focus:outline-none focus:ring-2 focus:ring-green-500 hover:bg-green-600"
                            type="submit"
                            >
                            Enviar Pedido
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Order;
