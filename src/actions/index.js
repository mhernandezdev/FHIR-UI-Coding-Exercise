import axios from 'axios';

export const FETCH_PATIENT = 'fetch_patient'
export const FETCH_CONDITIONS = 'fetch_conditions'

/*const res = async () => {
    console.log('hi');
    //const resp = await axios.get('https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Patient/1316024');
    const resp = await axios.get('https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition?patient=4596007');
    console.log('2', resp)
}
//Condition?patient=4596007
//https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Patient/4596007
//https://fhir-myrecord.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/:resource[?:parameters]
// https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Patient?identifier=urn:oid:1.1.1.1.1.1|10002700
res()
*/

const ID = '4596007';
const API = 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca';


export const fetchPatient = () => async dispatch => {
    const res = await axios.get( API +'/Patient/'+ ID);
    dispatch({ type: FETCH_PATIENT, payload: res.data });
};

export const fetchConditions = () => async dispatch => {
    const res = await axios.get( API +'/Condition/?patient='+ ID);
    dispatch({ type: FETCH_PATIENT, payload: res.data });
};

