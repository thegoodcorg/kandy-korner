import { useEffect, useState } from "react"


export const Products = ({ searchText }) => {

    const [products, setProducts] = useState([])
    const [filteredList, setFilteredList] = useState([])

    useEffect(() => {
        fetch('http://localhost:8088/products?_expand=productType')
            .then((res) => res.json())
            .then((productsArray) => {
                setProducts(productsArray)
            })
    }, []
    )

    useEffect(() => {
        const searchedCandies = products.filter(product => product.name.toLowerCase().startsWith(searchText.toLowerCase()))
        setFilteredList(searchedCandies)
    },
        [searchText]
    )

    useEffect(() => {
        setFilteredList(products)
    },[products]) // sets the initial state of filtered list to render when the page first loads

    return <>
        <article className="products">
            <ul>
                {
                    filteredList.map(
                        (product) => {
                            return <li className="products" key={product.id}>
                                {product.name} <br />
                                price: $ {product.price}. <br />
                                Product category: {product.productType.category}
                            </li>
                        })
                }
            </ul>
        </article>
    </>

}