import { useState } from 'react';
import { Link } from 'react-router-dom';
import { users } from '../../data/users'
import { useNavigate } from 'react-router-dom';
import { saveUserLocalStorage } from '../../utils/userLocalStorge';
import type { FC } from 'react'

interface LoginFormProps {
    setOpen?: (open: boolean) => void

}

export const LoginForm: FC<LoginFormProps> = ({ setOpen }) => {
    const navigate = useNavigate()

    const [error, setError] = useState('');
    const [dataForm, setDataForm] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDataForm(data => ({
            ...data,
            [name]: value
        }))
        setError('')
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (!dataForm.email || !dataForm.password) {
                const error = new Error("Todos los campos son obligatorios")
                throw error
            }
            const findUser = users.find(el => el.email === dataForm.email);
            if (!findUser) {
                const error = new Error("Email o Contraseña incorrecto")
                throw error
            }
            if (findUser.password !== dataForm.password) {
                const error = new Error("Email o Contraseña incorrecto")
                throw error
            }
            saveUserLocalStorage(findUser)
            setTimeout(() => {
                alert("Ingreso exitoso!")
                navigate('/')
                if (setOpen) {
                    setOpen(false)
                }
            }, 400)
        } catch (error: any) {
            console.log({ error })
            setError(`${error.message}`);
            alert(`Error! ${error.message}`)

        }
    }

    return (
        <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-lg border-2 border-gray-100">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Iniciar sesión</h2>
            {error && (
                <div className="mb-6 p-3 bg-red-50 text-red-600 rounded-lg text-sm border border-red-200">
                    {error}
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name='email'
                        value={dataForm.email}
                        onChange={(e) => handleChange(e)}
                        className="mt-1 block w-full px-4 py-3 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="user@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        id="password"
                        name='password'
                        value={dataForm.password}
                        onChange={(e) => handleChange(e)}
                        className="mt-1 block w-full px-4 py-3 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="******"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center cursor-pointer py-3 px-4 border-2 border-blue-600 rounded-lg shadow-sm text-md font-semibold text-white bg-blue-500 hover:bg-blue-700  focus:ring-blue-500 transition-all active:scale-90"
                    >
                        Ingresar
                    </button>
                </div>
            </form>
            <div className="mt-6 pt-4 text-center text-sm text-gray-600 border-t-2 border-gray-400">
                ¿No tienes una cuenta?{' '}
                <Link
                    to="/register"
                    className="font-semibold text-blue-600 hover:text-blue-500"
                >
                    Regístrate aquí
                </Link>
            </div>
        </div>
    )
}