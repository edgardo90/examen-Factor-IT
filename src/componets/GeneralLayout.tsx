import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export const GeneralLayout = () => {
    return (
        <div className="min-h-screen flex flex-col pt-16"> 
            <Header />
            <main className="flex-grow container mx-auto px-4 py-6">
                <Outlet /> {/* Las páginas se renderizarán aquí  gracias al Outlet*/}
            </main>
            <Footer />
        </div>
    )
}