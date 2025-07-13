import type { FC } from "react";
import { formatMoney } from "../../utils/formatMoney";
import type { IPurchase } from "../../interfaces/purchase";

interface PurchaseItemProps {
  purchase: IPurchase;
}

export const PurchaseItem: FC<PurchaseItemProps> = ({ purchase }) => {
  return (
    <div
      key={purchase.id}
      className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold">Compra #{purchase.id}</h3>
          <p className="text-sm text-gray-500">Fecha: {purchase.date}</p>
        </div>
        <span className="text-lg font-bold">
          {formatMoney(purchase.totalAmount)}
        </span>
      </div>
      {/* aca muestro los productos comprados */}
      <div className="mt-3 border-t pt-3">
        <h4 className="font-semibold mb-2">Productos:</h4>
        <ul className="space-y-2">
          {purchase.products.map((product) => (
            <li key={product.id} className="flex justify-between">
              <span>
                {product.name} (cant x{product.quantity})
              </span>
              <span>{formatMoney(product.price * product.quantity)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
