import { useParams } from 'react-router-dom';
import { useWineryData } from '../../utilities/winery-context';
import Review from '../../components/Review/Review';
import { Carousel, Image, Accordion } from 'react-bootstrap';
import './WineryDetailPage.css';

export default function WineryDetailPage({ user, reviews, setReviews }) {
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
            <div className='carousel-container' >
                <Carousel slide={false} fade>
                    {winery.images.map((image, index) => (
                        <Carousel.Item key={index}>
                            <Image src={image} className="img-detail" alt={`winery-${index}`} fluid></Image>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
            <div className='winery-detail-body'>
                <h2>{winery.name}</h2>
                <p><b>Overview:</b> {winery.overview}</p>
                <p><b>Address:</b> {winery.address}</p>
                <p><a href={winery.website} target="_blank" rel="noreferrer">Website</a></p>
                <p><b>Phone Number:</b> {winery.phoneNumber}</p>
                <p><b>Hours:</b> {winery.hours}</p>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Visiting Policies</Accordion.Header>
                            <Accordion.Body>
                            <ul>
                                {visitingPolicyName.map((name, index) => (
                                    <li key={index}>{name}</li>
                                ))}
                            </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Atmosphere</Accordion.Header>
                            <Accordion.Body>
                            <ul>
                                {atmosphereName.map((name, index) => (
                                    <li key={index}>{name}</li>
                                ))}
                            </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Additional Amenities</Accordion.Header>
                            <Accordion.Body>
                            <ul>
                                {additionalAmenityName.map((name, index) => (
                                    <li key={index}>{name}</li>
                                ))}
                            </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    {/* <li><b>Atmosphere:</b> {atmosphereName.join(', ')}</li>
                    <li><b>Additional Amenities:</b> {additionalAmenityName.join(', ')}</li>
                    <li><b>Visiting Policies:</b> {visitingPolicyName.join(', ')}</li> */}
                </Accordion>
                </div>
            <br></br>
            <Review user={user} reviews={reviews} setReviews={setReviews} winery={winery}/>
        </div>
    );
}