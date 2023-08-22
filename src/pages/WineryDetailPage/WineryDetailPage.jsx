import { useParams } from 'react-router-dom';
import { useWineryData } from '../../utilities/winery-context';
import { Button } from 'react-bootstrap';
import './WineryDetailPage.css';

export default function WineryDetailPage() {
    const { wineryId } = useParams();
    const { wineries, atmospheres, additionalAmenities, visitingPolicies } = useWineryData();

    if (!wineries) {
        return <div>Loading...</div>; // Handle loading state
    }

    const winery = wineries.find(winery => winery._id === wineryId);

    if (!winery) {
        return <div>Winery not found</div>;
    }

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
        <div>
            <h3>{winery.name}</h3>
            <img src={winery.images[0]} className='img-detail'></img>
            <p><b>Overview:</b> {winery.overview}</p>
            <p><b>Address:</b> {winery.address}</p>
            <p><a href={winery.website} target="_blank">Website</a></p>
            <p><b>Phone Number:</b> {winery.phoneNumber}</p>
            {/* <p>{winery.images}</p> // Convert to img element */}
            <p><b>Hours:</b> {winery.hours}</p>
            <ul>
                <li><b>Atmosphere:</b> {atmosphereName.join(', ')}</li>
                <li><b>Additional Amenities:</b> {additionalAmenityName.join(', ')}</li>
                <li><b>Visiting Policies:</b> {visitingPolicyName.join(', ')}</li>
            </ul>
            {/* <ReviewForm />  Add Review Form Component to Create */}
            {/* <Reviews />  Add Review Component to show all Reviews */}
        </div>
    );
}