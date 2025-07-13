import { CartButton } from './cart/CartButton';
import { Link, useLocation } from 'react-router-dom';
import { getUserLocalStorage } from '../utils/userLocalStorge';
import { useState } from 'react'
import { MenuUser } from './user/MenuUser'


export const Header = () => {

    const location = useLocation()

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <header className="fixed top-0 left-0 right-0 w-full bg-gray-400 text-white shadow-md z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="h-10">
                    <Link to='/'>
                        <img
                            src="https://www.factorit.com.ar/images/logo.svg"
                            alt="FactorIT Logo"
                            className="h-full object-contain"
                        />
                    </Link>
                </div>
                {/* <button type='button' onClick={() => console.log(getUserLocalStorage())}>consola user</button> */}
                {
                    (location.pathname === "/" || location.pathname.includes('user') ) && 
                    <nav className="flex space-x-4">
                        {
                            !getUserLocalStorage() ?
                                <Link
                                    to="/login"
                                    className="hover:text-blue-700 mr-8 text-lg cursor-pointer transition-all duration-200"
                                >
                                    Iniciar sesión
                                </Link>
                                :
                                <div className="flex items-center mr-8 hover:text-blue-600 cursor-pointer transition-all duration-200">
                                    <MenuUser anchorEl={anchorEl} handleClick={handleClick} handleClose={handleClose} open={open} />
                                    {/* <AccountCircle fontSize="small" className="mr-1" /> */}
                                    {/* <span className="text-lg">
                                        Mi perfil
                                    </span> */}
                                </div>
                        }
                        <div className='mr-5'>
                            <CartButton />
                        </div>
                    </nav>
                }
            </div>
        </header>
    )
}