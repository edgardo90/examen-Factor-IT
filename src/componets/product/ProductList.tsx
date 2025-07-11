import { products } from '../../data/products'
import { ProductItem } from './ProductItem'

export const ProductList = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-8">Productos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-2 p-4"> {/* Cambiado gap-4 a gap-8 */}
                {products.map((product) => (
                    <div key={product.id} className="mx-auto mt-3"> {/* Contenedor con margen automático */}
                        <ProductItem product={product} />
                    </div>
                ))}
            </div>
        </div>
    )
}