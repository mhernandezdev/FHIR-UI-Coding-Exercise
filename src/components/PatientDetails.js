import React from 'react';
import { connect } from 'react-redux';

const PatientDetails = ({ patient }) => {

    const name = patient.name && patient.name[0].text;
    const gender = patient.gender
    const birthDate = patient.birthDate;

    return(
        <div className="patient-details content">
            <h1 className="patient-name">{ name }</h1>
            <p className="patient-birth-date">{ `Birth date: ${birthDate}` } </p>
            <p className="patient-gender">{ `Gender: ${gender}` } </p>
        </div>
    );
}

function mapStateToProps({ patient }){
    return { patient };
}

export default connect(mapStateToProps)(PatientDetails);