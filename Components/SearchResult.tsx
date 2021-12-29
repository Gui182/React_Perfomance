import { List, ListRowRenderer } from 'react-virtualized'
import { ProductItem } from "./ProductItem"

interface SearchResultsProps {
    totalPrice: number;
    results: Array<{
        id: number;
        price: number;
        priceFormatted: string
        title: string;
    }>
    onAddToWishList: (id: number) => void
}

export function SearchResult({ totalPrice, results, onAddToWishList }: SearchResultsProps) {
    const rowRender: ListRowRenderer = ({ index, key, style }) => {
        return (
            <div key={key} style={style}>
                <ProductItem 
                   product={results[index]}
                   onAddToWhishList={onAddToWishList}
                />
            </div>
        )
    }
  
    return (
        <div>
            <h2>{totalPrice}</h2>

            <List
                height={300}
                rowHeight={30}
                width={900}
                overscanRowCount={5}
                rowCount={results.length}
                rowRenderer={rowRender}
            />

            {/* {results.map(product => {
                return (
                    <ProductItem 
                    key={product.id}
                    product={product}
                    onAddToWhishList={onAddToWishList}
                    />
                )
            })} */}
        </div>
    )
}