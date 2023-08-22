

export default function WineryCard({ winery, index, atmospheres, additionalAmenities, visitingPolicies }) {
    const atmosphereName = winery.atmospheres.map(id => {
        const atmosphere = atmospheres.find(item => item._id === id);
        return atmosphere ? atmosphere.name : 'N/A';
    });

    const additionalAmenityName = winery.additionalAmenities.map(id => {
        const additionalAmenity = additionalAmenities.find(item => item._id === id);
        return additionalAmenity ? additionalAmenity.name : 'N/A';
    });

    const visitingPolicyName = winery.visitingPolicies.map(id => {
        const visitingPolicy = visitingPolicies.find(item => item._id === id);
        return visitingPolicy ? visitingPolicy.name : 'N/A';
    });

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
                <li>Atmosphere: {atmosphereName.join(', ')}</li>
                <li>Additional Amenities: {additionalAmenityName.join(', ')}</li>
                <li>Visiting Policies: {visitingPolicyName.join(', ')}</li>
                </ul>
            </div>
        </>
    )
}
