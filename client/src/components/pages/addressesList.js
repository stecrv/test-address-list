"use strict"
import React from 'react';
import {connect} from 'react-redux';
import {getAddresses} from '../../actions/adressesActions';
import {bindActionCreators} from 'redux';
import { Grid, Col, Row, Button} from 'react-bootstrap';

/*
import addressItem from './addressForm';
import addressForm from './addressItem';
*/


class AddressesList extends React.Component{
    componentDidMount(){
        // this.props.getAddresses()
    }
    render(){
        return(
            <div>
                <h1>Addresses</h1>
                <div>list</div>
                <div>form</div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        addresses: state.addresses.addresses
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getAddresses:getAddresses
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AddressesList);
