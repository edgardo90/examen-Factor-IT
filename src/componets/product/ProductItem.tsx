import type { FC } from 'react';
import { formatMoney } from '../../utils/formatMoney'
import type { IProduct } from '../../interfaces/product'

interface ProductItemProps {
    product: IProduct
}

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
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

                <button
                    type="button"
                    className="w-full bg-blue-400 hover:bg-blue-700 text-black hover:text-white cursor-pointer py-2 px-4 rounded-md transition-all duration-200 active:scale-90"
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}