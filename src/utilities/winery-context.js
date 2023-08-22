import { createContext, useContext, useEffect, useState } from "react";
import * as wineriesAPI from '../utilities/wineries-api';
import * as atmospheresAPI from '../utilities/atmospheres-api';
import * as additionalAmenitiesAPI from '../utilities/additionalAmenities-api';
import * as visitingPoliciesAPI from '../utilities/visitingPolicies-api';

const WineryContext = createContext();

export function WineryProvider({ children }) {
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
        <WineryContext.Provider value={{ wineries, atmospheres, additionalAmenities, visitingPolicies }}>
            {children}
        </WineryContext.Provider>
    );
}

export function useWineryData() {
    return useContext(WineryContext);
}