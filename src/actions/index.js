import axios from 'axios';

export const FETCH_PATIENT = 'fetch_patient'
export const FETCH_CONDITIONS = 'fetch_conditions'

const ID = '4596007';
const API = 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca';

export const fetchPatient = () => async dispatch => {
    const res = await axios.get( API +'/Patient/'+ ID);
    dispatch({ type: FETCH_PATIENT, payload: res.data });
};

export const fetchConditions = () => async dispatch => {
    const res = await axios.get( API +'/Condition/?patient='+ ID);
    dispatch({ type: FETCH_CONDITIONS, payload: res.data });
};

