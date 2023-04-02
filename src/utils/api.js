async function getVans(url) {

    const res = await fetch(url)
    let data = await res.json()
    // setVans(data.vans)
    return data.vans



}
export default getVans