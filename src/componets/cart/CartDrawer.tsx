import type { FC } from "react";
import { styled, useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
///
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
////
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Delete } from "@mui/icons-material";
//
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import { SET_CART, TOTAL_COST_TO_CART } from "../../redux/cart/cartSlice";
//
import { PurchaseProductItem } from "./PurchaseProductItem";
import { formatMoney } from "../../utils/formatMoney";
import { useEffect, useState } from "react";
import { getCurrentDate } from "../../utils/helpers";
import {
  getUserLocalStorage,
  saveUserLocalStorage,
} from "../../utils/userLocalStorge";
import type { IPurchase } from "../../interfaces/purchase";
import { useNavigate } from "react-router-dom";

interface CartDrawerProps {
  handleDrawerClose: () => void;
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export const CartDrawer: FC<CartDrawerProps> = ({ handleDrawerClose }) => {
  const theme = useTheme();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const cartState = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleDeleteCart = () => {
    dispatch(SET_CART());
  };

  useEffect(() => {
    dispatch(TOTAL_COST_TO_CART());
  }, [cartState.products]);

  const handleButtonFinishBuy = () => {
    setLoading(true);
    try {
      if (cartState.totalProducts === 0) {
        throw new Error("No hay productos seleccionados");
      }
      const user = getUserLocalStorage();
      const purchase: IPurchase = {
        id: user?.purchases ? user?.purchases.length + 1 : 1,
        date: getCurrentDate(),
        totalAmount: cartState.totalCost,
        products: cartState.products,
      };
      user?.purchases.unshift(purchase);
      if (user) {
        saveUserLocalStorage(user);
      }
      setTimeout(() => {
        setLoading(false);
        // console.log({ user, cartState, purchase });
        alert("Se finalizo la compra con exito");
        dispatch(SET_CART());
        handleDrawerClose();
        navigate("/");
      }, 800);
    } catch (error: any) {
      console.log({ error });
      alert(error.message);
      setLoading(false);
    }
  };

  return (
    <Box sx={{ width: 400 }} role="presentation">
      <DrawerHeader>
        <span>
          <abbr title="Cerrar">
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </abbr>
          <span className="text-xs">
            {`Mi carrito${
              cartState.specialDay && cartState.specialDay !== "Normal"
                ? `, Descuento por ${cartState.specialDay} `
                : ""
            } 
          (${cartState.totalProducts} productos)
          `}
          </span>
          <abbr title="Eleminar carrito">
            <IconButton type="button" onClick={() => handleDeleteCart()}>
              <Delete color="error" />
            </IconButton>
          </abbr>
        </span>
      </DrawerHeader>
      <Divider />
      <List>
        {cartState.products.map((product) => (
          // aca puedo hacer un nuevo componente para renderizar esto
          <div
            key={product.id}
            className="flex items-center py-6 px-2 border-b"
          >
            <PurchaseProductItem product={product} key={product.id} />
          </div>
        ))}
      </List>
      <div className="px-4 py-2 font-medium flex justify-between items-center">
        <span>Subtotal</span>
        <span className="font-bold">{formatMoney(cartState.subtotalCost)}</span>
      </div>
      <Divider />
      <div className="px-4 py-2 font-medium flex justify-between items-center">
        <span>Descuentos</span>
        <span className="font-bold">-{formatMoney(cartState.discount)}</span>
      </div>
      <Divider />
      <div className="px-4 py-2 font-medium flex justify-between items-center">
        <span>Total</span>
        <span className="font-bold">{formatMoney(cartState.totalCost)}</span>
      </div>
      <div className="px-4 py-2 mt-2">
        <button
          type="button"
          onClick={() => handleButtonFinishBuy()}
          disabled={loading}
          className="w-full bg-blue-400 hover:bg-blue-700 text-black hover:text-white cursor-pointer py-2 px-4 rounded-md transition-all duration-200 active:scale-90"
        >
          {!loading ? "Finalizar compra" : "Espere..."}
        </button>
      </div>
    </Box>
  );
};
