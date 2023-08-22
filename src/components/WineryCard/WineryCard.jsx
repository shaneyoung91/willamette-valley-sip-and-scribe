import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Collapse } from 'react-bootstrap';
import './WineryCard.css';


export default function WineryCard({ winery, wineries, key, index, atmospheres, additionalAmenities, visitingPolicies}) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };
    
    return (
        <>
            <Col xs={12} md={6} lg={4} className='g-4'>
                <Card className={`card-container ${expanded ? 'card-expanded' : ''}`}>
                    <Link to={`/wineries/${(winery._id)}`} wineries={wineries} atmospheres={atmospheres} additionalAmenities={additionalAmenities} visitingPolicies={visitingPolicies}>
                        <Card.Img variant="top" src={winery.images[0]} className="card-image" />
                    </Link>
                    <Card.Body>
                        <Card.Title>{winery.name}</Card.Title>
                        <Card.Text>{expanded ? winery.overview : winery.overview.slice(0, 120) + '...'}</Card.Text>
                        <Button variant="primary" onClick={toggleExpanded}>
                            {expanded ? 'Collapse' : 'Expand'}
                        </Button>
                        <Collapse in={expanded}>
                        <div></div>
                        </Collapse>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}
