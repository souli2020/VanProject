import { useEffect, useState, React } from 'react'
import { Link } from 'react-router-dom'
import server from '../../../server'

function HostVans() {
    const [vans, setVans] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('/api/host/vans')
                .then(res => res.json())

                .then(data => {
                    setVans(data.vans)
                })
        }
        fetchData()
    }, [])
    return (
        <>
            {
                vans.length ?
                    (<div>
                        <h2>Your listed vans:</h2>
                        {vans.map(van =>
                            <Link
                                to={`/host/vans/${van.id}`}
                                key={van.id}
                                className="host-van-link-wrapper"
                            >
                                <div className="host-van-single" key={van.id}>
                                    <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                                    <div className="host-van-info">
                                        <h3>{van.name}</h3>
                                        <p>${van.price}/day</p>
                                    </div>
                                </div>
                            </Link>)}
                    </div>) : <h2>Loading ... </h2>
            }

        </>
    )
}

export default HostVans