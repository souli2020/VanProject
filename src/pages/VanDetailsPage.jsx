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
        <div>


            <VanDetails van={van} description={van.description} />
        </div>
    )
}

export default VanDetailsPage