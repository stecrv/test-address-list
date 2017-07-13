"use strict"
import React from 'react';
import {Image, Row, Col, Well, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {deleteAddresses, updateAddresses,getAddress} from '../../actions/adressesActions';

class AddressItem extends React.Component {
    handleEdit() {
        this.props.getAddress(this.props.id)
    }

    handleRemove() {
        if(confirm('Delete the item?')) {
            this.props.deleteAddresses(this.props.id)
        };
    }

    handleDelivery() {

    }

    render() {
        const d = this.props.data;
        return (
            <Well>
                        <p>{d.id}) {d.title} {d.name}</p>
                        <p>{d.line1}</p>
                        <p>{d.line2}</p>
                        <p>{d.postcode}, {d.city}, {d.country}</p>
                        <Row>
                            <Col xs={6}>
                                <Button onClick={this.handleEdit.bind(this)} bsStyle='link'>Edit</Button>
                                <Button onClick={this.handleRemove.bind(this)} bsStyle='link'>Remove</Button>
                            </Col>
                            <Col xs={6}>
                                <Button onClick={this.handleDelivery.bind(this)} bsStyle='primary'>Deliver Here</Button>
                            </Col>
                        </Row>

            </Well>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateAddresses: updateAddresses,
        deleteAddresses: deleteAddresses
    }, dispatch)
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {getAddress},
        dispatch)
}
export default connect(mapDispatchToProps, mapDispatchToProps)(AddressItem);
