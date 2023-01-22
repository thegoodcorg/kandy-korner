import { useEffect, useState } from "react"


export const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:8088/products?_expand=productType')
            .then((res) => res.json())
            .then((productsArray) => { setProducts(productsArray);
                 console.log(productsArray)})
    }, []
    )

    return <>
        <article className="products">
            <ul>
                {
                    products.map(
                        (product) => {
                            return <li className="products">
                            {product.name} <br/>  
                            price: $ {product.price}. <br/>
                            Product category: {product.productType.category}
                        </li>
                    })
                }
            </ul>
        </article>
    </>

}