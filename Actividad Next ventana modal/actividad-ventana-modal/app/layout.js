import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

export const metadata = {
    title: 'Andalucía - Provincias',
    description: 'Detalles de las provincias de Andalucía',
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>
                {children}
            </body>
        </html>
    );
}
