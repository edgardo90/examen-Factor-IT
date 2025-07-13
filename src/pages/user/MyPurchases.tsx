import { getUserLocalStorage } from "../../utils/userLocalStorge";
import { Link } from "react-router-dom";
import { formatMoney } from "../../utils/formatMoney";

export const MyPurchases = () => {
  const user = getUserLocalStorage();

  return (
    <div className="p-4 max-w-4xl mx-auto">
        <Link to='/'>
          <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
            Regresar a productos
          </span>
        </Link>
      <div className="flex justify-between items-center mb-6 mt-4">
        <h1 className="text-2xl font-bold">Mis Compras</h1>
      </div>
      {/* asa se muesta el  Listado de compras */}
      <div className="space-y-4">
        {user?.purchases?.map((purchase) => (
          <div
            key={purchase.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">Compra #{purchase.id}</h3>
                <p className="text-sm text-gray-500">{purchase.date}</p>
              </div>
              <span className="text-lg font-bold">
                {formatMoney(purchase.totalAmount)}
              </span>
            </div>
            {/* aca muestro los productos comprados */}
            <div className="mt-3 border-t pt-3">
              <h4 className="font-medium mb-2">Productos:</h4>
              <ul className="space-y-2">
                {purchase.products.map((product) => (
                  <li key={product.id} className="flex justify-between">
                    <span>
                      {product.name} (x{product.quantity})
                    </span>
                    <span>{formatMoney(product.price * product.quantity)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
