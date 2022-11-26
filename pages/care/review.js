import { useState } from 'react'
import LayoutCare from '/components/layouts/layoutCare';

const CareReview = () => {

    const [serviceUser, setServiceUser] = useState('')

    const handleChange = (event) => {
        setServiceUser(event.target.value)
    };

    return (
        <LayoutCare>

            <h1>Care Review</h1>

            <fieldset>
                <legend>Start review</legend>
                <div className="form-row">
                    <label htmlFor="user">Service user</label>
                    <input type="text" className="textField" id="user" name="user" onChange={handleChange} value={serviceUser} />
                </div>
            </fieldset>

        </LayoutCare>
    );
}

export default CareReview