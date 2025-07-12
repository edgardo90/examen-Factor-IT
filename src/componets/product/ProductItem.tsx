import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { formatMoney } from '../../utils/formatMoney';
import type { IProduct } from '../../interfaces/product';
import { LoginFormModal } from '../login/LoginFormModal';
import { getUserLocalStorage } from '../../utils/userLocalStorge';
//
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../redux/store';
import { ADD_PRODUCT_TO_CART } from '../../redux/cart/cartSlice'
import type { IPurchasedProduct } from '../../interfaces/product'


interface ProductItemProps {
    product: IProduct
}


export const ProductItem: FC<ProductItemProps> = ({ product }) => {

    const cartState = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch()

    const [openModal, setOpenModal] = useState(false)
    const [purchasedProduct, setPurchasedProduct] = useState<IPurchasedProduct | null>()

    const handleClickAddProduct = () => {
        if (!getUserLocalStorage()) {
            setOpenModal(true)
            return
        }
        dispatch(
            ADD_PRODUCT_TO_CART(product)
        )
    }

    useEffect(() => {
        console.log(cartState.products)
        const findPurchasedProduct = cartState.products.find(el => el.id === product.id);
        if (!findPurchasedProduct) {
            setPurchasedProduct(null)
        }
        if (findPurchasedProduct) {
            setPurchasedProduct(findPurchasedProduct)
        }
    }, [cartState.products])

    return (
        <div
            key={product.id}
            className=" border  border-gray-200 rounded-lg shadow-md overflow-hidden max-w-[300px] h-full hover:shadow-lg transition-shadow duration-300"
        >
            <div className="w-full h-60 ">
                <img
                    src={product.imageUrl[0]}
                    alt={product.name}
                    className="w-full h-full object-contain p-4"
                    loading="lazy"
                />
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-base  text-gray-800 mb-2 line-clamp-2 min-h-[3rem]">
                    {product.name}
                </h3>
                <p className="text-xl font-bold text-blue-600 mt-auto mb-4">
                    {formatMoney(product.price)}
                </p>
                <div>
                    <LoginFormModal open={openModal} setOpen={setOpenModal} />
                    {
                        purchasedProduct ? (
                            <div className="flex items-center justify-between">
                                <button
                                    // onClick={() => }
                                    className="bg-red-500 hover:bg-red-700 w-10 text-white px-3 py-1 rounded-md cursor-pointer transition-all duration-200 active:scale-90"
                                >
                                    -
                                </button>
                                <span className="mx-2">{`${purchasedProduct.quantity} unidad${purchasedProduct.quantity > 1 ? 's' : ''}`}</span>
                                <button
                                    // onClick={() => }
                                    className="bg-blue-500  w-10 hover:bg-blue-700 text-white px-3 py-1 rounded-md cursor-pointer transition-all duration-200 active:scale-90"
                                >
                                    +
                                </button>
                            </div>
                        ) : (
                            <button
                                type="button"
                                 onClick={() => handleClickAddProduct()}
                                className="w-full bg-blue-400 hover:bg-blue-700 text-black hover:text-white cursor-pointer py-2 px-4 rounded-md transition-all duration-200 active:scale-90"
                            >
                                Agregar al carrito
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}