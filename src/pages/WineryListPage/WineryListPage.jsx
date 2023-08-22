import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import * as wineriesAPI from '../../utilities/wineries-api';
import * as atmospheresAPI from '../../utilities/atmospheres-api';
import * as additionalAmenitiesAPI from '../../utilities/additionalAmenities-api';
import * as visitingPoliciesAPI from '../../utilities/visitingPolicies-api';
import WineryCard from "../../components/WineryCard/WineryCard";


export default function WineryListPage() {
    const [wineries, setWineries] = useState([]);
    const [atmospheres, setAtmospheres] = useState([]);
    const [additionalAmenities, setAdditionalAmenities] = useState([]);
    const [visitingPolicies, setVisitingPolicies] = useState([]);

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
            <h2>WineryListPage</h2>
            <div>
                {wineries.map((winery, index) => (
                    <WineryCard
                        winery={winery} 
                        key={index} 
                        index={index}
                        atmospheres={atmospheres}
                        additionalAmenities={additionalAmenities}
                        visitingPolicies={visitingPolicies}
                    />
                ))}
            </div>
        </div>
    )
}