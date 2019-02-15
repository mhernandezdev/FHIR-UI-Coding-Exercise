import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import SortableTable from './SortableTable'

const PatientConditions = ({ conditions }) => {

    const pubmed = 'https://www.ncbi.nlm.nih.gov/pubmed/?term=';
    const header = [
        { id:'code', label:'Condition', sortable:true },
        { id:'dateRecorded', label:'Date first recorded', sortable:true },
        { id:'pubmed', label:'PubMed', sortable:false }
    ];

    // flatten conditions // filter down to active
    // remove dups // keep the oldest date recorded
    let data = [];
    if(conditions.entry){
        data = conditions.entry.filter(e => e.resource.clinicalStatus==="active").map(e => {
            return {
                id: e.resource.id,
                dateRecorded: e.resource.dateRecorded,
                code: (e.resource.code.coding && e.resource.code.coding[0].display) || 'Condition Missing',
                pubmed: e.resource.code.coding ? <a href={ pubmed + e.resource.code.coding[0].display } target="_blank" rel="noopener noreferrer">PubMed Search</a> : <span className="inactive">PubMed Search</span>
            }
        })
        data = _.sortBy(data, (e) => e.dateRecorded);
        data = _.uniqBy(data, 'code');
    }

    return (
        <div className="patient-conditions content">
            <SortableTable data={ data } header={ header } />
      </div>
    );
}

function mapStateToProps({ conditions }){
    return { conditions };
}

export default connect(mapStateToProps)(PatientConditions);