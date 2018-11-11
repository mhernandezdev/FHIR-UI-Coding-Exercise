import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import Header from './components/Header'
import PatientDetails from './components/PatientDetails'
import PatientConditions from './components/PatientConditions'
import LinearProgress from '@material-ui/core/LinearProgress';


class App extends Component {

    componentDidMount() {
        this.props.fetchPatient();
        this.props.fetchConditions();
    }

    render() {
        const { patient, conditions } = this.props;

        return (
            <div className="App">
                <Header />

                { !patient || !conditions ? <LinearProgress /> : <div>
                    <PatientDetails />
                    <PatientConditions />
                </div> }
            </div>
        );
    }
}
function mapStateToProps(state){
    return state;
}
export default connect(mapStateToProps, actions)(App);
