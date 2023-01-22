import { useEffect, useState } from "react"


export const Locations = () => {

    const [locations, setLocations] = useState([])

    useEffect(() => {
        fetch('http://localhost:8088/locations')
            .then((res) => res.json())
            .then((locationsArray) => { setLocations(locationsArray) })
    }, []
    )

    return <>
        <article className="locations">
            <ul>
                {
                    locations.map(
                        (location) => {
                            return <li className="location">
                            {location.address}   
                            size: {location.squareFootage} sqft.
                        </li>
                    })
                }
            </ul>
        </article>
    </>

}