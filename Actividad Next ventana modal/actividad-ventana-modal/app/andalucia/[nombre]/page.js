import provincias from '../provincias';

export default function ProvinciaPage({ params }) {
    // Encuentra la provincia basada en el parámetro dinámico
    const provincia = provincias.find(
        (p) => p.nombre.toLowerCase() === params.nombre.toLowerCase()
    );

    // Muestra un mensaje de error si la provincia no existe
    if (!provincia) {
        return (
            <div className="container mt-5 text-center">
                <h1>Provincia no encontrada</h1>
                <p>La ruta especificada no corresponde a ninguna provincia.</p>
            </div>
        );
    }

    // Si la provincia existe, muestra su contenido en una card
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <img
                            src={provincia.foto}
                            className="card-img-top"
                            alt={provincia.nombre}
                            style={{ height: '300px', objectFit: 'cover' }}
                        />
                        <div className="card-body text-center">
                            <h3 className="card-title">{provincia.nombre}</h3>
                            <p className="card-text text-dark fw-bold">
                                {provincia.descripcion}
                            </p>
                            <a href="/andalucia" className="btn btn-primary">
                                Volver a Andalucía
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
