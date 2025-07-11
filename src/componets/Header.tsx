import { CartButton } from './cart/CartButton';


export const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 w-full bg-gray-400 text-white shadow-md z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="h-14">
                    <img
                        src="https://www.factorit.com.ar/images/logo.svg"
                        alt="FactorIT Logo"
                        className="h-full object-contain"
                    />
                </div>
                <nav className="flex space-x-4">
                    <p className="hover:text-blue-700 mr-8 text-lg cursor-pointer">Iniciar sesion</p>
                    <div className='mr-5'>
                        <CartButton />
                    </div>
                </nav>
            </div>
        </header>
    )
}