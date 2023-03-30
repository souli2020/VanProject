import { useEffect, useState, React } from 'react'
import VanDetails from '../../components/VanDetails'
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
                        {vans.map(van => <VanDetails van={van} id={van.id} key={van.id} link={`${van.id}`} />)}
                    </div>) : <h2>Loading ... </h2>
            }

        </>
    )
}

export default HostVans