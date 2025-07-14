import { getUserLocalStorage } from "../../utils/userLocalStorge";
import { Link } from "react-router-dom";

export const MyProfile = () => {
  const user = getUserLocalStorage();

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Link to="/">
        <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
          Regresar a productos
        </span>
      </Link>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Mi Perfil</h1>
        </div>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h2 className="text-sm font-medium text-gray-500">Email</h2>
            <p className="mt-1 text-lg">{user?.email}</p>
          </div>
          {
            user?.name && 
            <div className="border-b pb-4">
              <h2 className="text-sm font-medium text-gray-500">Nombre</h2>
              <p className="mt-1 text-lg">{user.name}</p>
            </div>
          }
          {
            user?.lastName &&
            <div className="border-b pb-4">
              <h2 className="text-sm font-medium text-gray-500">Apellido</h2>
              <p className="mt-1 text-lg">{user.lastName}</p>
            </div>
          }
          <div className="pt-2">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                user?.isVip
                  ? "bg-purple-100 text-yellow-600 font-medium"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              Tipo de usuario:{user?.isVip ? " Usuario VIP" : " Usuario estándar"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
