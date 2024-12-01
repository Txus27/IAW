'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Modal from './Modal';
import provincias from './provincias';

export default function Andalucia() {
    const [provinciaSeleccionada, setProvinciaSeleccionada] = useState(null);
    const router = useRouter();

    // Maneja el clic en "Saber más": abre el modal y actualiza la URL
    const handleModal = (provincia) => {
        setProvinciaSeleccionada(provincia); // Abre el modal
        router.push(`/andalucia/${provincia.nombre.toLowerCase()}`); // Actualiza la URL
    };

    // Maneja el cierre del modal y vuelve a la URL principal
    const cerrarModal = () => {
        setProvinciaSeleccionada(null); // Cierra el modal
        router.push('/andalucia'); // Restablece la URL
    };

    // Abre el modal automáticamente si la URL contiene una provincia
    useEffect(() => {
        const pathParts = window.location.pathname.split('/');
        if (pathParts[1] === 'andalucia' && pathParts[2]) {
            const provincia = provincias.find(
                (p) => p.nombre.toLowerCase() === pathParts[2].toLowerCase()
            );
            if (provincia) {
                setProvinciaSeleccionada(provincia); // Abre el modal con la provincia seleccionada
            }
        }
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-center">Provincias de Andalucía</h1>
            <div className="row mt-4">
                {provincias.map((provincia, index) => (
                    <div key={index} className="col-md-3 mb-4">
                        <div className="card">
                            <img
                                src={provincia.foto}
                                className="card-img-top"
                                alt={provincia.nombre}
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">{provincia.nombre}</h5>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => handleModal(provincia)}
                                >
                                    Saber más
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {provinciaSeleccionada && (
                <Modal provincia={provinciaSeleccionada} onClose={cerrarModal} />
            )}
        </div>
    );
}
