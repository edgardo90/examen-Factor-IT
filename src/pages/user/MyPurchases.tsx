import { getUserLocalStorage } from "../../utils/userLocalStorge";
import { Link } from "react-router-dom";
import { formatMoney } from "../../utils/formatMoney";
import { PurchaseItem } from "../../componets/user/PurchaseItem";

export const MyPurchases = () => {
  const user = getUserLocalStorage();

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Link to="/">
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
          <PurchaseItem purchase={purchase} key={purchase.id} />
        ))}
      </div>
    </div>
  );
};
