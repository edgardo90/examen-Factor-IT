import { IconButton } from "@mui/material";
import { Remove, Add, Close } from "@mui/icons-material";
import type { FC } from "react";
import type { IPurchasedProduct } from "../../interfaces/product";
import { formatMoney } from "../../utils/formatMoney";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { SUM_QUANTITY_PRODUCT ,SUBTRACT_QUANTITY_PRODUCT, DELETE_PRODUCT_TO_CART } from '../../redux/cart/cartSlice'


interface PurchaseProductItemProps {
  product: IPurchasedProduct;
}

export const PurchaseProductItem: FC<PurchaseProductItemProps> = ({ product}) => {
  const cartState = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <div className="relative mr-3">
        <img
          src={product.imageUrl[0]}
          alt={product.name}
          className="w-16 h-16 object-contain rounded mr-3"
        />
        <IconButton
          className="absolute top-[-90px] w-4 h-4  left-16 bg-white shadow"
          onClick={()=>dispatch(DELETE_PRODUCT_TO_CART(product.id))}
        >
          <Close fontSize="small" />
        </IconButton>
      </div>
      <span className="flex-1 text-xs">
        {product.name}
        <br />
        <span className="text-lg font-bold text-blue-600 mt-auto mb-4">
          {formatMoney(product.price)}
        </span>
      </span>
      <div className="flex items-center mx-2">
        <IconButton color="warning" onClick={()=>dispatch(SUBTRACT_QUANTITY_PRODUCT(product.id))}>
          <Remove fontSize="small" />
        </IconButton>
        <span className="mx-2 w-6 text-center">{product.quantity}</span>
        <IconButton color="primary" onClick={()=>dispatch(SUM_QUANTITY_PRODUCT(product.id))}>
          <Add fontSize="small" />
        </IconButton>
      </div>
    </>
  );
};
