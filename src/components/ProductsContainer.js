import { useState } from "react"
import { ProductSearch } from "./nav/ProductSearch"
import { Products } from "./Products"


export const ProductContainer = () => {
const [searchTerms, setSearchTerms] = useState("")

    return <>
        <ProductSearch searchInput={setSearchTerms}/>
        <Products searchText={searchTerms} />
    </>
}