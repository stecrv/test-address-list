"use strict"
import React from 'react';
import {Image, Row, Col, Well, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {deleteAddresses, updateAddresses} from '../../actions/adressesActions';

class AddressItem extends React.Component {
    handleEdit() {
        this.props.updateAddresses(this.props.id)
    }

    handleRemove() {
        if(confirm('Delete the item?')) {
            this.props.deleteAddresses(this.props.id)
        };
    }

    handleDelivery() {

    }

    render() {
        return (
            <Well>
                        <p>{this.props.data.title} {this.props.data.name}</p>
                        <p>{this.props.data.line1}</p>
                        <p>{this.props.data.line2}</p>
                        <p>{this.props.data.postcode}, {this.props.data.city}, {this.props.data.country}</p>
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

export default connect(null, mapDispatchToProps)(AddressItem);
