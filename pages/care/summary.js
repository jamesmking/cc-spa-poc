import { useEffect, useState } from 'react'
import LayoutCare from '/components/layouts/layoutCare'

const CareSummary = () => {

    const [patient, setPatient] = useState({})
    const patientData = {
        "Title": "Mr",
        "ForeName": "Robert",
        "Forename2": "",
        "Surname": "Whitehouse",
        "NameSuffix": "",
        "PreferKnownAs": "",
        "aliases": [
            {
                "AliasID": 6,
                "Alias": "Rob"
            },
            {
                "AliasID": 2,
                "Alias": "Bob"
            },
        ],
        "Active": true,
        "Closed": false,
        "DOB": "17-02-1925",
        "DOA": "30-03-2009",
        "DOD": "",
        "CauseOfDeath": "",
        "ReasonForLeaving": "",
        "KeyWorkerGUID": "258A7449-7ACA-4898-93B2-5E68AABD6E6C",
        "KeyWorkerName": "Jan Neville",
        "KeyWorker_Sex": "No Preference",
        "ClientType": 1,
        "RoomNumber": 3,
        "RoomSuffix": "Ground Floor",
        "RoomSuffix2": "",
        "PictureDate": "08-03-2022 15:35",
        "ClientSex": "F",
        "ClientGender": -1,
        "WeightSetting": "Stones",
        "WeightKG": "88.4",
        "WeightST": "13st 13lb",
        "HeightCM": "170",
        "Build": "medium",
        "EyeColour": "Blue",
        "EyeWear": "N/A",
        "HairColour": "gre/white",
        "HairLength": "Short",
        "HearingAid": "None",
        "MaritalStatus": "married",
        "MaidenName": "",
        "CountryOfBirth": "",
        "DNR": 2,
        "DNRDetail": "In the event that John becomes unwell. John is for admission to go into hospital.",
        "GP": 120,
        "Surgery": 101,
        "MentalHealthDoctor": 0,
        "Allergies": "None Known",
        "DietaryNeeds": "None: John will need his food cut up small",
        "DCKeySafe": "",
        "DCChargeBand": "",
        "AllocationGroup": 7,
        "CSG": 1,
        "NHSNumber": "NH87979134"
    }

    useEffect(() => setPatient(patientData), [])

    return (
        <LayoutCare>
            <h1>Care Plan Summary</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Full name</th>
                        <td>{ patient.Title } { patient.ForeName } { patient.Surname }</td>
                    </tr>
                    {patient.aliases &&
                    <tr>
                        <th>Alias</th>
                        <td>
                            { patient.aliases.map(function (alias) {
                                return <li>{alias.Alias}</li>;
                            })}
                        </td>
                    </tr>
                    }
                    <tr>
                        <th>Date of birth</th>
                        <td>{ patient.DOB }</td>
                    </tr>
                    <tr>
                        <th>Date of arrival</th>
                        <td>{ patient.DOA }</td>
                    </tr>
                </tbody>
            </table>

        </LayoutCare>
    );
}

export default CareSummary