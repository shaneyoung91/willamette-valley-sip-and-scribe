import { useParams } from 'react-router-dom';
import { useWineryData } from '../../utilities/winery-context';
import Review from '../../components/Review/Review';
import { Carousel, Image, Accordion, Card } from 'react-bootstrap';
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
            <div>
                <Carousel data-bs-theme="dark" fade>
                    {winery.images.map((image, index) => (
                        <Carousel.Item key={index}>
                            <div className='carousel-container'>
                                <Image src={image} className="img-detail" alt={`winery-${index}`} fluid></Image>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
            <br></br>
            <div className='winery-detail-body'>
                <Card>
                    <Card.Header as="h3" className='text-center'>{winery.name}</Card.Header>
                    <Card.Body>
                        <Card.Text>{winery.overview}</Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Text><b>Address:</b> {winery.address}</Card.Text>
                        <Card.Text><b>Phone Number:</b> {winery.phoneNumber}</Card.Text>
                        <Card.Text><a href={winery.website} target="_blank" rel="noreferrer">Website</a></Card.Text>
                    </Card.Body>
                </Card>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Hours & Visiting Policies</Accordion.Header>
                            <Accordion.Body>
                            <ul>
                                {visitingPolicyName.map((name, index) => (
                                    <li key={index}>{name}</li>
                                ))}
                            </ul>
                            <p><b>Hours of Operation - </b> {winery.hours}</p>
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
            <div className='grid-container'>
                <Review user={user} reviews={reviews} setReviews={setReviews} winery={winery}/>
            </div>
        </div>
    );
}