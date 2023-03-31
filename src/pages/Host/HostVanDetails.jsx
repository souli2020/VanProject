import { useEffect, useState, React } from 'react'
import { useParams, Outlet, NavLink } from 'react-router-dom'
import HostNavbar from '../../components/HostNavbar'

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
        <section>
            <NavLink
                to=".."
                relative='path'
                className="back-button"
            >&larr; <span>Back to all vans</span></NavLink>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={van.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${van.type}`}
                        >
                            {van.type}
                        </i>
                        <h3>{van.name}</h3>
                        <h4>${van.price}/day</h4>
                    </div>
                </div>
                <HostNavbar />
                <Outlet context={van} />
            </div>

        </section>

    )
}



export default HostVanDetails