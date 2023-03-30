import { useEffect, useState, React } from 'react'
import { useParams } from "react-router-dom";
import VanDetails from '../components/VanDetails';

function VanDetailsPage() {
    const [van, setVan] = useState({})
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {

            await fetch(`/api/vans/${id}/`)
                .then(res => res.json())
                .then(data => {
                    setVan(data.vans)
                })
        }
        fetchData()
    }, [])

    return (
        <div className="van-detail-container">


            {Object.keys(van).length ?
                (<>
                    <button className="link-button"> Rent this van </button>
                    <VanDetails van={van} description={van.description} className="van-detail" />

                </>) : <h2>Bear with us...</h2>}
        </div>
    )
}

export default VanDetailsPage