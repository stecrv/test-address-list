"use strict"
import React from 'react';
import {connect} from 'react-redux';
import {getAddresses, postAddresses, resetData} from '../../actions/adressesActions';
import {bindActionCreators} from 'redux';
import {Well, Alert, Grid, Col, Row, Button} from 'react-bootstrap';

import AddressItem from './addressItem';

import AddressForm from './addressForm';



class AddressesList extends React.Component{
    handleNew(){
        this.props.resetData()
    }
    componentDidMount(){
        this.props.getAddresses()
    }
    render(){
        const addrList = this.props.addresses.map(function(addr,index){
            return(
                <Col xs={12} sm={4} md={4} key={addr.id}>
                    <AddressItem
                        id={addr.id}
                        data={addr}
                    />
                </Col>
            )
        });
        const newAddr =addrList.length ? <Col xs={12} sm={4} md={4} >
            <Well>
                <Button onClick={this.handleNew.bind(this)} bsStyle='primary'>Add a new address</Button>
            </Well>
        </Col> : ''
        return(
            <div>
                <h1>Addresses</h1>
                <Row>
                    <Col xs={12}>
                        {this.props.msg ? (<Alert bsStyle={this.props.style} >{this.props.msg}</Alert>) : ''  }
                    </Col>
                </Row>
                <Row >
                    { addrList }
                    { newAddr }
                </Row>
                <Row>
                    <Col xs={12}>
                        <AddressForm />
                    </Col>
                </Row>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        addresses: state.addresses.addresses,
        msg: state.addresses.msg,
        style: state.addresses.style,
        validation: state.addresses.validation
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getAddresses:getAddresses,
        postAddresses:postAddresses,
        resetData:resetData
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AddressesList);
