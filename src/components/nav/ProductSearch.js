

export const ProductSearch = ({searchInput}) => {

    return <input
     type="text" 
     placeholder="Find Candy" 
     onChange={
        (event) => {
            searchInput(event.target.value)
        }
     }></input>
}