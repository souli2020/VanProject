import { useEffect, useState, React } from 'react'
import server from '../../server'
import VanDetails from '../components/VanDetails'


function Van() {
    const [vans, setVans] = useState([])
    useEffect(() => {
        async function fetchData() {

            const result = await fetch('/api/vans')
                .then(res => res.json())
                .then(data => {
                    setVans(data.vans)

                })


        }
        fetchData()

    }, [])

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vans.map(van => <VanDetails van={van} key={van.id} />)}
            </div>
        </div>
    )
}

export default Van