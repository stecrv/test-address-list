"use strict"
import React from 'react';
import {MenuItem, InputGroup, DropdownButton, Image, Col, Row, Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';
import {postAddresses} from '../../actions/adressesActions';


class AddressForm extends React.Component{

    handleSubmit(){
        const address={
            title: findDOMNode(this.refs.title).value,
            name: findDOMNode(this.refs.name).value,
            line1: findDOMNode(this.refs.line1).value,
            line2: findDOMNode(this.refs.line2).value,
            town: findDOMNode(this.refs.town).value,
            country: findDOMNode(this.refs.country).value,
            postcode: findDOMNode(this.refs.postcode).value,
            phone: findDOMNode(this.refs.phone).value,

        }

        this.props.postAddresses(address);
    }

    render(){
        return(
            <Well>
                <Panel>
                    <FormGroup controlId="title">
                        <ControlLabel>Title</ControlLabel>
                        <FormControl type="text" ref="title" placeholder="Enter Title" />
                    </FormGroup>
                    <FormGroup controlId="name">
                        <ControlLabel>* full name</ControlLabel>
                        <FormControl type="text" ref="name" placeholder="* full name" />
                    </FormGroup>
                    <FormGroup controlId="line1">
                        <ControlLabel>Address line 1</ControlLabel>
                        <FormControl type="text" ref="line1" placeholder="* address line 1" />
                    </FormGroup>
                    <FormGroup controlId="line1">
                        <ControlLabel>Address line 2</ControlLabel>
                        <FormControl type="text" ref="line2" placeholder="address line 2" />
                    </FormGroup>
                    <FormGroup controlId="town">
                        <ControlLabel>* Towm/City</ControlLabel>
                        <FormControl type="town" ref="town" placeholder="* town" />
                    </FormGroup>
                    <FormGroup controlId="country">
                        <ControlLabel>Country</ControlLabel>
                        <FormControl type="country" ref="country" placeholder="country" />
                    </FormGroup>
                    <FormGroup controlId="postcode">
                        <ControlLabel>* postcode</ControlLabel>
                        <FormControl type="postcode" ref="postcode" placeholder="country" />
                    </FormGroup>
                    <FormGroup controlId="phone">
                        <ControlLabel>* phone</ControlLabel>
                        <FormControl type="phone" ref="phone" placeholder="* phone" />
                    </FormGroup>
                    <Button onClick={this.handleSubmit.bind(this)} bsStyle="primary" >Add book</Button>
                </Panel>
            </Well>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {postAddresses},
        dispatch)
}
export default connect(null,mapDispatchToProps)(AddressForm)