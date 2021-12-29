export interface AddProductsToWishListProps {
    onAddToWishList: () => void;
    onRequestClose: () => void;
 }

 export function AddProductsToWishList({
     onAddToWishList,
     onRequestClose
 }: AddProductsToWishListProps) {
    return (
        <span>
            Deseja adicionar ao favoritos?
            <button onClick={onAddToWishList}>Sim</button>
            <button onClick={onRequestClose}>Não</button>
        </span>
    )
 }

