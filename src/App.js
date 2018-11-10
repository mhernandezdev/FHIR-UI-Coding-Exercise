import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './actions';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



class App extends Component {

    componentDidMount() {
        console.log('componentDidMount()')
        this.props.fetchPatient();
        this.props.fetchConditions();
    }

    render() {
        return (
            <div className="App">
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap>
                            SMART on FHIR UI Coding Exercise
                        </Typography>
                    </Toolbar>
                </AppBar>


            </div>
        );
    }
}

export default connect(null, actions)(App);
