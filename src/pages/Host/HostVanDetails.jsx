import { useEffect, useState, React } from 'react'
import { Link, useParams } from 'react-router-dom'
import VanDetails from '../../components/VanDetails'
function HostVanDetails() {
    const { id } = useParams()
    const [van, setVan] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            await fetch(`/api/host/vans/${id}`)
                .then(res => res.json())
                .then(data => {
                    setVan(prev => data.vans[0])

                })
        }
        fetchData()

    }, [])

    return (
        <div className="van-detail-container">
            {
                Object.keys(van).length ?
                    (<>
                        <Link to="/host/vans">Go back to all vans</Link>
                        <VanDetails van={van} description={van.description} id={van.id} />
                    </>
                    ) : <h2>Loading...</h2>
            }
        </div>
    )
}



export default HostVanDetails