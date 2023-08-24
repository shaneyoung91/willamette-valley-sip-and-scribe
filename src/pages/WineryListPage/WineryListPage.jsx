import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import * as wineriesAPI from '../../utilities/wineries-api';
import * as atmospheresAPI from '../../utilities/atmospheres-api';
import * as additionalAmenitiesAPI from '../../utilities/additionalAmenities-api';
import * as visitingPoliciesAPI from '../../utilities/visitingPolicies-api';
import WineryCard from "../../components/WineryCard/WineryCard";


export default function WineryListPage({ wineries, setWineries, atmospheres, setAtmospheres, 
    additionalAmenities, setAdditionalAmenities, visitingPolicies, setVisitingPolicies }) {
    
    useEffect(function() {
        async function getWineries() {
            const wineries = await wineriesAPI.getAll();
            setWineries(wineries);
        }

        async function getAtmospheres() {
            const atmospheres = await atmospheresAPI.getAll();
            setAtmospheres(atmospheres);
        }

        async function getAdditionalAmenities() {
            const additionalAmenities = await additionalAmenitiesAPI.getAll();
            setAdditionalAmenities(additionalAmenities);
        }

        async function getVisitingPolicies() {
            const visitingPolicies = await visitingPoliciesAPI.getAll();
            setVisitingPolicies(visitingPolicies);
        }

        getWineries();
        getAtmospheres();
        getAdditionalAmenities();
        getVisitingPolicies();
    }, []);

    return (
        <div>
            <h1>Explore the Willamette Valley Region</h1>
            <br></br>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {wineries.map((winery, index) => (
                        <WineryCard
                            winery={winery} 
                            key={winery._id}
                            index={index}
                            atmospheres={atmospheres}
                            additionalAmenities={additionalAmenities}
                            visitingPolicies={visitingPolicies}
                            wineries={wineries}
                        />
                    ))}
                </Row>
            </Container>
        </div>
    )
}