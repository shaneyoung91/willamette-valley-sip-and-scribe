

export default function WineryCard({ winery, atmosphere, additionalAmenity, visitingPolicy, index }) {
    return (
        <>
            <div>
                <p>{winery.name}</p>
                <p>{winery.overview}</p>
                <p>{winery.address}</p>
                {/* <p>{winery.website}</p> // Convert to Link */}
                <p>{winery.phoneNumber}</p>
                {/* <p>{winery.images}</p> // Convert to img element */}
                <p>{winery.hours}</p>
                <ul>
                    {/* <li>{atmosphere ? atmosphere.name : 'N/A'}</li>
                    <li>{additionalAmenity ? additionalAmenity.name : 'No additional amenities available'}</li>
                    <li>{visitingPolicy ? visitingPolicy.name : 'No visiting policies available'}</li> */}
                </ul>
            </div>
        </>
    )
}
