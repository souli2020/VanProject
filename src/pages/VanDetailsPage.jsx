import { useEffect, useState, React } from 'react'
import { useParams, useLocation } from "react-router-dom";
import VanDetails from '../components/VanDetails';

function VanDetailsPage() {
    const location = useLocation()
    const type = location.state?.type || '';


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
                    {type ? (
                        <small className='link-button click-text'> click in the image to return to {type}  </small>)
                        : <small className='link-button click-text'>click to return to all vans</small>}

                    <VanDetails van={van} link={'..'} description={van.description} className="van-detail" />

                </>) : <h2>Bear with us...</h2>}
        </div>
    )
}

export default VanDetailsPage