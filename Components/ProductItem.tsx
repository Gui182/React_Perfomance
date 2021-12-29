import { memo, useState } from 'react'
import { AddProductsToWishListProps } from './AddProductToWishList'
import dynamic from 'next/dynamic'
import lodash from 'lodash'
//import { AddProductsToWishList } from './AddProductToWishList'
const AddProductToWishList = dynamic<AddProductsToWishListProps>(() => {
    return import('./AddProductToWishList').then(mod => mod.AddProductsToWishList)
}, {
    loading: () => <span>Carregando...</span>
})

interface ProductItemProps {
    product: {
        id: number;
        price: number;
        priceFormatted: string;
        title: string;
    }
    onAddToWhishList: (id: number) => void
}

function ProductItemComponent({ product, onAddToWhishList }: ProductItemProps) {
    const [isAddingToWishList, setIsAddingToWishList] = useState(false)

    return (
        <div>
            {product.title} - <strong>{product.priceFormatted}</strong>
            <button onClick={() => setIsAddingToWishList(true)}>Adicionar aos favoritos</button>

            {isAddingToWishList && (
                <AddProductToWishList
                    onAddToWishList={() => onAddToWhishList(product.id)}
                    onRequestClose={() => setIsAddingToWishList(false)}
                />
            )}
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return lodash.isEqual(prevProps.product, nextProps.product)
})