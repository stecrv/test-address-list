"use strict"
import React from 'react';
import {Image, Row, Col, Well, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {deleteAddresses,updateAddresses} from '../../actions/adressesActions';

class AddressItem extends React.Component{
    handleEdit(){

    }
    handleRemove(){

    }
    render(){
        return(
            <Well>
                <Row>

                    <Col xs={6} sm={4}>
                        <p>{this.props.data.name}</p>
                        <p>{this.props.data.line1}</p>
                        <p>{this.props.data.line2}</p>
                        <p>{this.props.data.city}</p>
                        <p>{this.props.data.country}</p>
                        <p>{this.props.data.cap}</p>
                        <Button onClick={this.handleEdit.bind(this)} bsStyle='primary'>Edit</Button>
                        <Button onClick={this.handleRemove.bind(this)} bsStyle='primary'>Remove</Button>

                    </Col>
                </Row>
            </Well>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        updateAddresses:updateAddresses,
        deleteAddresses:deleteAddresses
    }, dispatch)
}
export default connect(null, mapDispatchToProps)(AddressItem);
