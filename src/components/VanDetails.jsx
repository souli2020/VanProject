import React from 'react'
import { Link } from 'react-router-dom'
function VanDetails({ ...props }) {
    const { van, description, link } = props
    return (
        <>
            <div id={van.id} key={van.id} className="van-tile"  >
                <Link to={!link ? `/vans/${van.id}` : link} >
                    <img src={van.imageUrl} />
                    <div className="van-info">
                        <h3>{van.name}</h3>
                        {description && <p>{description}</p>}
                        <p>${van.price}<span>/day</span></p>

                    </div>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </Link>
            </div>
        </>
    )
}

export default VanDetails