import React from 'react'
import { Link, useLocation } from 'react-router-dom'
function VanDetails({ ...props }) {
    const location = useLocation()

    const { van, description, link, state } = props


    return (
        <>
            <div id={van.id} key={van.id} className="van-tile"  >
                <Link to={!link ? `${van.id}` : `${link + "?" + location.state.filters}`} className={link ? "host-van-link-wrapper" : ''} relative="path" state={state} >
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