import { useEffect, useState, React } from 'react'
import server from '../../server'
import { useSearchParams, Link } from 'react-router-dom'
import VanDetails from '../components/VanDetails'



function Van() {
    const [vans, setVans] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    useEffect(() => {
        async function fetchData() {

            const res = await fetch('/api/vans')
            let data = await res.json()
            setVans(data.vans)



        }
        fetchData()

    }, [])
    function setFilter(e) {
        //later on add currentTarget.name and add icons to price filter btn
        if (e === "clear") {
            searchParams.delete('type')
            searchParams.delete('price')
            setSearchParams(searchParams)
            return
        }
        if (e === "price") {
            const sortOrder = searchParams.get("price") === "asc" ? "desc" : "asc";
            searchParams.set("price", sortOrder);
            setSearchParams(searchParams);
            return;
        }
        searchParams.set('type', `${e}`)
        setSearchParams(searchParams)
    }
    const typeFilter = searchParams.get("type")
    const priceFilter = searchParams.get('price')

    let filtred = []
    if (priceFilter) {
        if (priceFilter === "asc") {
            filtred = vans.sort((a, b) => a.price - b.price)
        }
        else if (priceFilter === "desc") {
            filtred = vans.sort((a, b) => b.price - a.price)
        }
    }
    filtred = typeFilter ? vans.filter(van => van.type.toLowerCase() === typeFilter)
        : vans

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <button
                className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}
                name="simple" onClick={(e) => setFilter(e.target.name)}>simple</button>
            <button
                className={
                    `van-type simple ${typeFilter === "luxury" ? "selected" : ""}`
                }
                name="luxury" onClick={(e) => setFilter(e.target.name)}>luxury</button>
            <button
                className={`van-type simple ${typeFilter === "rugged" ? "selected" : ""}`}
                name="rugged" onClick={(e) => setFilter(e.target.name)}>rugged</button>

            <button className={`van-type simple ${priceFilter ? "selected" : ""}`}
                name="price" onClick={(e) => setFilter(e.target.name)}>
                {priceFilter === "asc" ? "Highest" : "Lowest"}
            </button>

            {typeFilter || priceFilter ? (<button
                className="van-type clear"
                name="clear"
                onClick={(e) => setFilter(e.target.name)}>clear filter
            </button>) : null}

            <div className="van-list">
                {vans.length ?
                    (filtred
                        .map(van =>

                            <VanDetails van={van} key={van.id} state={{ filters: searchParams.toString(), type: typeFilter }} />)) : <h2>Loading...</h2>
                }
            </div>
        </div>
    )
}

export default Van