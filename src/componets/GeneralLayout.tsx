import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col pt-16"> {/* Añade pt-16 para evitar solapamiento con el Header */}
            <Header />
            <main className="flex-grow container mx-auto px-4 py-6">
                <Outlet /> {/* Las páginas se renderizarán aquí  gracias al Outlet*/}
            </main>
            <Footer />
        </div>
    )
}